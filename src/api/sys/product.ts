import { orderData, productDetail, SalesCardList } from "@/api/sys/fakedata";
import { LoginResultModel, SignupParams } from "@/api/sys/model/userModel";
import { ErrorMessageMode } from "#/axios";
import { defHttp } from "@/utils/http/axios";
import { RequestShowData } from "@/api/sys/model/product";
import { SalesCardItem } from "@/views/dashboard/analysis/data";
import { OrderItem } from "@/api/sys/model/orderModel";


const request = (params_obj) => {
  window.console.log(params_obj);
  if (params_obj.url.indexOf('item') !== -1 ) {
    return productDetail;
    // return {"code":200,"message":"成功","data":[],"ok":true};
  }
  return null;
}


//detail
export const reqDetailData = (id: number) => request({ url: `/item/${ id }`, method: 'get' })
export function reqShowData(params: RequestShowData): SalesCardItem[] {
  window.console.log(params);
  return SalesCardList;
  // return defHttp.post<LoginResultModel>(
  //   {
  //     url: Api.Signup,
  //     params,
  //   },
  //   {
  //     errorMessageMode: mode,
  //   },
  // );
}
export function reqOrderData(): OrderItem[] {
  window.console.log('reqOrderData');
  return orderData;
}
