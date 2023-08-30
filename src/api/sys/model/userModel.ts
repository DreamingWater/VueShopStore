import { BaseResultModel } from "@/api/sys/model/baseModel";

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  email: string;
  password: string;
  img_code: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

/**
 * @description: Signup Params
 */
export interface SignupParams {
  email: string;
  password: string;
  email_code: string;
}

export interface PdmodifyParams extends  SignupParams{}
/**
 * @description: IMG/Email CODE Params
 */
export interface CodeParams {
  email: string;
}

export type ImgOrEmail = 'img' | 'email';

export interface CodeReqParams extends CodeParams {
  img_or_email: ImgOrEmail;
  create_email?: boolean;
}

/**
 * @description: IMG/Email CODE  Res
 */
export interface CodeResultModel extends BaseResultModel {}
