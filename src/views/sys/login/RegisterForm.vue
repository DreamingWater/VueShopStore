<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <FormItem name="email" class="enter-x">
        <Input
          class="fix-auto-fill"
          size="large"
          v-model:value="formData.email"
          :placeholder="t('sys.login.email')"
          maxLength="50"
        />
      </FormItem>
      <!--      <FormItem name="mobile" class="enter-x">-->
      <!--        <Input-->
      <!--          size="large"-->
      <!--          v-model:value="formData.mobile"-->
      <!--          :placeholder="t('sys.login.mobile')"-->
      <!--          class="fix-auto-fill"-->
      <!--        />-->
      <!--      </FormItem>-->
      <FormItem name="email_code" class="enter-x">
        <CountdownInput
          size="large"
          class="fix-auto-fill"
          v-model:value="formData.email_code"
          :placeholder="t('sys.login.smsCode')"
          maxLength="6"
          :sendCodeApi="send_email"
        />
      </FormItem>
      <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
          maxLength="50"
        />
      </FormItem>
      <!--      <FormItem name="confirmPassword" class="enter-x">-->
      <!--        <InputPassword-->
      <!--          size="large"-->
      <!--          visibilityToggle-->
      <!--          v-model:value="formData.confirmPassword"-->
      <!--          :placeholder="t('sys.login.confirmPassword')"-->
      <!--        />-->
      <!--      </FormItem>-->

      <FormItem class="enter-x" name="policy">
        <!-- No logic, you need to deal with it yourself -->
        <Checkbox v-model:checked="formData.policy" size="small">
          {{ t('sys.login.policy') }}
        </Checkbox>
      </FormItem>

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
        :disabled="disable_button"
      >
        {{ t('sys.login.registerButton') }}
      </Button>
      <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </Form>
  </template>
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed, watch } from "vue";
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button, Checkbox } from 'ant-design-vue';
  import { StrengthMeter } from '/@/components/StrengthMeter';
  import { CountdownInput } from '/@/components/CountDown';
  import { useI18n } from '/@/hooks/web/useI18n';
  import ask_send_email, {
    useLoginState,
    useFormRules,
    useFormValid,
    LoginStateEnum,
  } from './useLogin';
  import { useUserStore } from '@/store/modules/user';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useDesign } from '@/hooks/web/useDesign';

  const FormItem = Form.Item;
  // const InputPassword = Input.Password;
  const { t } = useI18n();
  const { handleBackLogin, getLoginState } = useLoginState();
  const { notification, createErrorModal } = useMessage();
  const userStore = useUserStore();
  const formRef = ref();
  const loading = ref(false);
  const { prefixCls } = useDesign('signup');
  const disable_button = ref(true);
  const formData = reactive({
    email: '12321@qq.com',
    password: '12345678F',
    // confirmPassword: '',
    email_code: '112323',
    policy: false,
  });

  const { getFormRules } = useFormRules(formData);
  const { validForm } = useFormValid(formRef);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

  watch(
    () => formData,
    async () => {
      disable_button.value = true;
      const data = await validForm();
      // window.console.log(data);
      if (data) {
        disable_button.value = false;
      }
    },
    {
      deep: true,
    },
  );

  // 请求email验证码
  const send_email = async () => {
    const res = await ask_send_email(formData.email, 'email', userStore, true);
    if (res) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };
  async function handleRegister() {
    window.console.log('handleRegister');
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      const userInfo = await userStore.signup({
        password: data.password,
        email: data.email,
        email_code: data.email_code,
        mode: 'none', //不要默认的错误提示
      });
      if (userInfo) {
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
</script>
