import type { ValidationRule, FormInstance } from 'ant-design-vue/lib/form/Form';
import type { RuleObject, NamePath } from 'ant-design-vue/lib/form/interface';
import { ref, computed, unref, Ref } from 'vue';
import { useI18n } from '/@/hooks/web/useI18n';
import { emailcodereqApi } from "@/api/sys/user";
import { ImgOrEmail } from "@/api/sys/model/userModel";
import { useUserStore } from "@/store/modules/user";
// import { debounce ,throttle} from 'lodash-es';
export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE,
}

const currentState = ref(LoginStateEnum.LOGIN);

// 这里也可以优化
// import { createGlobalState } from '@vueuse/core'

export function useLoginState() {
  function setLoginState(state: LoginStateEnum) {
    currentState.value = state;
  }

  const getLoginState = computed(() => currentState.value);

  function handleBackLogin() {
    setLoginState(LoginStateEnum.LOGIN);
  }

  return { setLoginState, getLoginState, handleBackLogin };
}

export function useFormValid<T extends Object = any>(formRef: Ref<FormInstance>) {
  const validate = computed(() => {
    const form = unref(formRef);
    return form?.validate ?? ((_nameList?: NamePath) => Promise.resolve());
  });

  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data as T;
  }

  return { validate, validForm };
}

export function useFormRules(formData?: Recordable) {
  const { t } = useI18n();

  const getEmailFormRule = computed(() => createRule(t('sys.login.emailPlaceholder')));
  const getPasswordFormRule = computed(() => createRule(t('sys.login.passwordPlaceholder')));
  // const getMobileFormRule = computed(() => createRule(t('sys.login.mobilePlaceholder')));
  const getCodeFormRule = computed(() => createRule(t('sys.login.smsPlaceholder')));
  const validatePolicy = async (_: RuleObject, value: boolean) => {
    return !value ? Promise.reject(t('sys.login.policyPlaceholder')) : Promise.resolve();
  };

  const validateEmail = (_: RuleObject, value: string) => {
    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!value) {
      return Promise.reject(t('sys.login.emailPlaceholder'));
    }
    if (mailReg.test(value)) {
      return Promise.resolve();
    }
    if (value.length >= 50) {
      return Promise.reject(t('email must less than 50 chars'));
    }
    return Promise.reject(t('please input right email address'));
  };


  const validatePassword = (_: RuleObject, value: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    if (!value) {
      return Promise.reject(t('sys.login.passwordPlaceholder'));
    }
    if (!regex.test(value)) {
      return Promise.reject(t('Password must contain letter and digit'));
    }
    if (value.length <= 6) {
      return Promise.reject(t('Password must contain 6+ words'));
    }
    return Promise.resolve();
  };

  // const validateConfirmPassword = (password: string) => {
  //   return async (_: RuleObject, value: string) => {
  //     if (!value) {
  //       return Promise.reject(t('sys.login.passwordPlaceholder'));
  //     }
  //     if (value !== password) {
  //       return Promise.reject(t('sys.login.diffPwd'));
  //     }
  //     return Promise.resolve();
  //   };
  // };

  const getFormRules = computed((): { [k: string]: ValidationRule | ValidationRule[] } => {
    const emailFormRule = unref(getEmailFormRule);
    const passwordFormRule = unref(getPasswordFormRule);
    const codeFormRule = unref(getCodeFormRule);// 注册 页面 邮箱验证码
    // const mobileFormRule = unref(getMobileFormRule);
    // const ConfirmPasswordForm = {
    //   validator: validateConfirmPassword(formData?.password),
    //   trigger: 'change',
    //   // ...passwordFormRule
    // };

    switch (unref(currentState)) {
      // register form rules
      case LoginStateEnum.REGISTER:
        return {
          email: [{ validator: validateEmail, trigger: 'change' }], //emailFormRule,
          // password: passwordFormRule,
          password: [{ validator: validatePassword, trigger: 'change' }], // blur
          // confirmPassword: [ConfirmPasswordForm],
          policy: [{ validator: validatePolicy, trigger: 'change' }],
          email_code: codeFormRule,
        };

      // reset password form rules
      case LoginStateEnum.RESET_PASSWORD:
        window.console.log('RESET_PASSWORD');
        return {
          email: [{ validator: validateEmail, trigger: 'change' }], //emailFormRule,
          password: [{ validator: validatePassword, trigger: 'change' }], // blur
          email_code: codeFormRule,
        };

      // mobile form rules
      // case LoginStateEnum.MOBILE:
      //   return emailRule;

      // login form rules
      default:
        return {
          email: [{ validator: validateEmail, trigger: 'change' }],
          password: [{ validator: validatePassword, trigger: 'change' }],
          img_code: codeFormRule,
        };
    }
  });
  return { getFormRules };
}

function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
  ];
}

export function check_email_reg(email: string) {
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return mailReg.test(email);

}

const ask_send_email = async (email: string, img_or_email: ImgOrEmail, userStore: any,create_email:boolean) => {
  if (check_email_reg(email)) {
    // email 格式验证
    try {
      await userStore.verifycodeReq({
        email: email,
        img_or_email: img_or_email,
        create_email: create_email,
      }); // 获取图片验证码
      return true;
    } catch (error) {
      return false;
    }
  }
};
export default ask_send_email;
