import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  SignupParams,
  CodeParams,
  CodeReqParams,
  CodeResultModel, PdmodifyParams
} from "./model/userModel";

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = 'accounts/login/',
  Logout = 'accounts/logout/',
  GetUserInfo = 'accounts/getUserInfo/',
  GetPermCode = 'accounts/getPermCode/',
  TestRetry = 'accounts/testRetry/',
  Signup = 'accounts/signup/',
  PD_Modify = 'accounts/modify_password/',
  ImgcodeReq = 'accounts/img_code/',
  EmailcodeReq = 'accounts/email_code/',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}


/**
 * @description: user signup api
 */
export function signupApi(params: SignupParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Signup,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: change password api
 */
export function modify_passwdApi(params: PdmodifyParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.PD_Modify,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: request email or img code
 */
export function codereqApi(codeparams: CodeReqParams, mode: ErrorMessageMode = 'modal') {
  const { img_or_email, ...param } = codeparams;
  const params: CodeParams = param;
  if (img_or_email === 'img') {
    return defHttp.post<CodeResultModel>(
      {
        url: Api.ImgcodeReq,
        params,
      },
      {
        errorMessageMode: mode,
      },
    );
  } else if (img_or_email === 'email') {
    return defHttp.post<CodeResultModel>(
      {
        url: Api.EmailcodeReq,
        params,
      },
      {
        errorMessageMode: mode,
      },
    );
  }
  return Promise.reject('Error code type.');
}
