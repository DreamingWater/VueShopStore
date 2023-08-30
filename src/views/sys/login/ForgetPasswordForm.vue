<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <FormItem name="email" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.email"
          :placeholder="t('sys.login.userName')"
          maxLength="50"
        />
      </FormItem>
      <FormItem name="email_code" class="enter-x">
        <CountdownInput
          size="large"
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
      <FormItem class="enter-x">
        <Button type="primary" size="large" block @click="handleReset" :loading="loading" :disabled="disable_button">
          {{ t('common.resetText') }}
        </Button>
        <Button size="large" block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Button>
      </FormItem>
    </Form>
  </template>
</template>
<script lang="ts" setup>
import { reactive, ref, computed, unref, watch } from "vue";
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button } from 'ant-design-vue';
  import { CountdownInput } from '/@/components/CountDown';
  import { useI18n } from '/@/hooks/web/useI18n';
  import ask_send_email, {
    useLoginState,
    useFormRules,
    LoginStateEnum,
    useFormValid
  } from "./useLogin";
  import { useUserStore } from '@/store/modules/user';
  import { StrengthMeter } from '@/components/StrengthMeter';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useDesign } from "@/hooks/web/useDesign";
  const { notification, createErrorModal } = useMessage();
  const FormItem = Form.Item;
  const { t } = useI18n();
  const { handleBackLogin, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();
  const userStore = useUserStore();
  const formRef = ref();
  const loading = ref(false);
  const disable_button = ref(true);
  const formData = reactive({
    email: '12321@qq.com',
    email_code: '112323',
    password: '12345678F',
  });
  const { validForm } = useFormValid(formRef);
  const { prefixCls } = useDesign('forget-password');
  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);

  const send_email = async () => {
    const res = await ask_send_email(formData.email, 'email', userStore,false);
    if (res) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

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
  async function handleReset() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      const reset_state = await userStore.modify_passwd({
        password: data.password,
        email: data.email,
        email_code: data.email_code,
        mode: 'none', //不要默认的错误提示
      });
      if (reset_state) {
        notification.success({
          message: t('sys.login.modifypasswdSuccessTitle'),
          description: t('sys.login.modifypasswdSuccessDesc'),
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
