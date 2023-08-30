<template>
  <LoginFormTitle v-show="getShow" class="enter-x" />
  <Form
    class="p-4 enter-x"
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    v-show="getShow"
    @keypress.enter="handleLogin"
  >
    <FormItem name="email" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.email"
        :placeholder="t('sys.login.email')"
        class="fix-auto-fill"
      />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        :placeholder="t('sys.login.password')"
      />
    </FormItem>
    <FormItem name="img_code" class="enter-x">
      <ARow>
        <ACol>
          <a-input
            size="large"
            v-model:value="formData.img_code"
            :placeholder="t('sys.login.captcha')"
          />
        </ACol>
        <ACol style="display: flex; justify-content: center">
          <img
            :src="captcha_data"
            alt="captcha"
            @click="getCaptcha"
            style="width: 150px; height: 40px"
          />
        </ACol>
      </ARow>
    </FormItem>
    <ARow class="enter-x">
      <ACol :span="12">
        <FormItem>
          <!-- No logic, you need to deal with it yourself -->
          <Checkbox v-model:checked="rememberMe" size="small">
            {{ t('sys.login.rememberMe') }}
          </Checkbox>
        </FormItem>
      </ACol>
      <ACol :span="12">
        <FormItem :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <Button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            {{ t('sys.login.forgetPassword') }}
          </Button>
        </FormItem>
      </ACol>
    </ARow>

    <FormItem class="enter-x">
      <Button
        type="primary"
        size="large"
        block
        @click="handleLogin"
        :loading="loading"
        :disabled="disable_button"
      >
        {{ t('sys.login.loginButton') }}
      </Button>
      <!-- <Button size="large" class="mt-4 enter-x" block @click="handleRegister">
        {{ t('sys.login.registerButton') }}
      </Button> -->
    </FormItem>
    <ARow class="enter-x">
      <ACol :md="8" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.MOBILE)">
          {{ t('sys.login.mobileSignInFormTitle') }}
        </Button>
      </ACol>
      <ACol :md="8" :xs="24" class="!my-2 !md:my-0 xs:mx-0 md:mx-2">
        <Button block @click="setLoginState(LoginStateEnum.QR_CODE)">
          {{ t('sys.login.qrSignInFormTitle') }}
        </Button>
      </ACol>
      <ACol :md="6" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.REGISTER)">
          {{ t('sys.login.registerButton') }}
        </Button>
      </ACol>
    </ARow>

    <Divider class="enter-x">{{ t('sys.login.otherSignIn') }}</Divider>

    <div class="flex justify-evenly enter-x" :class="`${prefixCls}-sign-in-way`">
      <GithubFilled />
      <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled />
    </div>
  </Form>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, unref, watch, nextTick } from 'vue';

  import { Button, Checkbox, Col, Divider, Form, Input, Row } from 'ant-design-vue';
  import {
    AlipayCircleFilled,
    GithubFilled,
    GoogleCircleFilled,
    TwitterCircleFilled,
    WechatFilled,
  } from '@ant-design/icons-vue';
  import LoginFormTitle from './LoginFormTitle.vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { useUserStore } from '/@/store/modules/user';
  import {
    check_email_reg,
    LoginStateEnum,
    useFormRules,
    useFormValid,
    useLoginState,
  } from './useLogin';
  import { useDesign } from '/@/hooks/web/useDesign';
  //import { onKeyStroke } from '@vueuse/core';

  const ACol = Col;
  const ARow = Row;
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const { t } = useI18n();
  const { notification, createErrorModal } = useMessage();
  const { prefixCls } = useDesign('login');
  const userStore = useUserStore();

  const { setLoginState, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);
  const rememberMe = ref(false);
  const captcha_data = ref('');
  const disable_button = ref(true);
  captcha_data.value =
    'data:image/jpeg;base64,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';

  const formData = reactive({
    email: '112fd0105824881@qq.com', //userStore.getEmail,
    password: 'df1sf3242f', //userStore.getPasswd, // 获取本地的passwd
    img_code: '5636',
  });

  const { validForm } = useFormValid(formRef);

  //onKeyStroke('Enter', handleLogin);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      const userInfo = await userStore.login({
        password: data.password,
        email: data.email,
        img_code: data.img_code,
        mode: 'none', //不要默认的错误提示
      });
      if (userInfo) {
        if (rememberMe.value) {
          userStore.setPasswd(data.password);
          userStore.setEmail(data.email);
        }
        notification.success({
          message: t('sys.login.loginSuccessTitle'),
          description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
          duration: 3,
        });
      }
    } catch (error) {
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      });
    } finally {
      loading.value = false;
    }
  }
  watch(
    () => formData,
    async () => {
      disable_button.value = true;
      const data = await validForm();
      // window.console.log(data);
      if (data){
        disable_button.value = false;
      }

    },
    {
      deep: true,
    },
  );

  const getCaptcha = async () => {
    if (check_email_reg(formData.email)) {
      // email 格式验证
      const data = await userStore.verifycodeReq({
        email: formData.email,
        img_or_email: 'img',
      }); // 获取图片验证码
      captcha_data.value = data as string;
    } else {
      console.log('error in get img code');
    }
  };
</script>
