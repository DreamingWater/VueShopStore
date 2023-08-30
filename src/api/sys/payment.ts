import { defHttp } from '/@/utils/http/axios';
import { TradeUser } from "@/api/sys/model/orderModel";
import { ErrorMessageMode } from '/#/axios';

enum Api {
  GetTradeUserInfo = 'store/trade_userinfo/',
}

/**
 * @description: user login api
 */
// export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
//   return defHttp.post<LoginResultModel>(
//     {
//       url: Api.Login,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//     },
//   );
// }

/**
 * @description: getUserInfo
 */
export function getTradeUserInfo() {
  return defHttp.get<TradeUser>({ url: Api.GetTradeUserInfo }, { errorMessageMode: 'none' });
}









import { Order } from '/@/api/sys/model/payModel'


const request = (params_obj) => {
  window.console.log(params_obj.url);
  if (params_obj.url === '/order/auth/trade' ) {
    return {"code":200,"message":"成功","data":{"totalAmount":4188,"userAddressList":[{"id":49,"userAddress":"昌平区北七家宏福苑南一区xx号xx单元1198","userId":2,"provinceId":1,"consignee":"帅杨哈","phoneNum":"18101085354","isDefault":"0","regionId":1,"fullAddress":"北京昌平区北七家宏福苑南一区xx号xx单元1198"},{"id":72,"userAddress":"北七家镇宏福苑南二区花筑公寓4楼","userId":2,"provinceId":1,"consignee":"晶哥","phoneNum":"18100000000","isDefault":"0","regionId":1,"fullAddress":"北京北七家镇宏福苑南二区花筑公寓4楼"},{"id":109,"userAddress":"昌平区北七家镇宏福苑南一区0号楼1单元","userId":2,"provinceId":1,"consignee":"24k纯帅","phoneNum":"18101085318","isDefault":"0","regionId":1,"fullAddress":"北京昌平区北七家镇宏福苑南一区0号楼1单元"},{"id":215,"userAddress":"青青草原","userId":2,"provinceId":1,"consignee":"慢羊羊","phoneNum":"18886868886","isDefault":"0","regionId":1,"fullAddress":"北京青青草原"},{"id":217,"userAddress":"123123","userId":2,"provinceId":6,"consignee":"zzl","phoneNum":"123","isDefault":"0","regionId":2,"fullAddress":"上海123123"},{"id":218,"userAddress":"爱坤家园","userId":2,"provinceId":1,"consignee":"爱坤","phoneNum":"18485858686","isDefault":"0","regionId":1,"fullAddress":"北京爱坤家园"},{"id":222,"userAddress":"123","userId":2,"provinceId":1,"consignee":"zzl","phoneNum":"123123","isDefault":"0","regionId":1,"fullAddress":"北京123"},{"id":226,"userAddress":"我爱我家","userId":2,"provinceId":2,"consignee":"只因坤","phoneNum":"18888888888","isDefault":"1","regionId":1,"fullAddress":"天津我爱我家"},{"id":227,"userAddress":"长江北路西段附二段23号紫金城创吉客公寓对面二期菜鸟驿站","userId":2,"provinceId":null,"consignee":"王滋","phoneNum":"18990108597","isDefault":"0","regionId":null,"fullAddress":null},{"id":228,"userAddress":"长江北路西段","userId":2,"provinceId":null,"consignee":"王滋","phoneNum":"18990108597","isDefault":"0","regionId":null,"fullAddress":null}],"tradeNo":"3caa8f4880414820b57621c08c59368c","totalNum":1,"originalTotalAmount":4188,"couponInfoList":[],"detailArrayList":[{"id":null,"orderId":null,"skuId":14,"skuName":"华为 HUAWEI P40 麒麟990 5G SoC芯片  6GB+128GB冰霜银全网通5G手机","imgUrl":"http://39.98.123.211/group1/M00/00/02/rBHu8l-sklaAbYPbAAHJf20K7J4980.jpg","orderPrice":4188,"skuNum":1,"createTime":null,"sourceType":"QUERY","sourceId":14,"splitTotalAmount":null,"splitActivityAmount":null,"splitCouponAmount":null,"refundStatus":"","refundStatusString":"","hasStock":null,"activityRule":null,"couponInfoList":null}],"activityReduceAmount":0,"orderDetailVoList":[{"orderDetailList":[{"id":null,"orderId":null,"skuId":14,"skuName":"华为 HUAWEI P40 麒麟990 5G SoC芯片  6GB+128GB冰霜银全网通5G手机","imgUrl":"http://39.98.123.211/group1/M00/00/02/rBHu8l-sklaAbYPbAAHJf20K7J4980.jpg","orderPrice":4188,"skuNum":1,"createTime":null,"sourceType":"QUERY","sourceId":14,"splitTotalAmount":null,"splitActivityAmount":null,"splitCouponAmount":null,"refundStatus":"","refundStatusString":"","hasStock":null,"activityRule":null,"couponInfoList":null}],"activityRule":null}]},"ok":true};
  } else if (params_obj.url === '/user/userAddress/auth/findUserAddressList'){
    return {"code":200,"message":"成功","data":[{"id":49,"userAddress":"昌平区北七家宏福苑南一区xx号xx单元1198","userId":2,"provinceId":1,"consignee":"帅杨哈","phoneNum":"18101085354","isDefault":"0","regionId":1,"fullAddress":"北京昌平区北七家宏福苑南一区xx号xx单元1198"},{"id":72,"userAddress":"北七家镇宏福苑南二区花筑公寓4楼","userId":2,"provinceId":1,"consignee":"晶哥","phoneNum":"18100000000","isDefault":"0","regionId":1,"fullAddress":"北京北七家镇宏福苑南二区花筑公寓4楼"},{"id":109,"userAddress":"昌平区北七家镇宏福苑南一区0号楼1单元","userId":2,"provinceId":1,"consignee":"24k纯帅","phoneNum":"18101085318","isDefault":"0","regionId":1,"fullAddress":"北京昌平区北七家镇宏福苑南一区0号楼1单元"},{"id":215,"userAddress":"青青草原","userId":2,"provinceId":1,"consignee":"慢羊羊","phoneNum":"18886868886","isDefault":"0","regionId":1,"fullAddress":"北京青青草原"},{"id":217,"userAddress":"123123","userId":2,"provinceId":6,"consignee":"zzl","phoneNum":"123","isDefault":"0","regionId":2,"fullAddress":"上海123123"},{"id":218,"userAddress":"爱坤家园","userId":2,"provinceId":1,"consignee":"爱坤","phoneNum":"18485858686","isDefault":"0","regionId":1,"fullAddress":"北京爱坤家园"},{"id":222,"userAddress":"123","userId":2,"provinceId":1,"consignee":"zzl","phoneNum":"123123","isDefault":"0","regionId":1,"fullAddress":"北京123"},{"id":226,"userAddress":"我爱我家","userId":2,"provinceId":2,"consignee":"只因坤","phoneNum":"18888888888","isDefault":"1","regionId":1,"fullAddress":"天津我爱我家"},{"id":227,"userAddress":"长江北路西段附二段23号紫金城创吉客公寓对面二期菜鸟驿站","userId":2,"provinceId":null,"consignee":"王滋","phoneNum":"18990108597","isDefault":"0","regionId":null,"fullAddress":null},{"id":228,"userAddress":"长江北路西段","userId":2,"provinceId":null,"consignee":"王滋","phoneNum":"18990108597","isDefault":"0","regionId":null,"fullAddress":null}],"ok":true};
    }else if (params_obj.url.indexOf('submitOrder') !== -1){
    return {"code":200,"message":"成功","data":36973,"ok":true}
  }else{
    window.console.log(params_obj.url);
    return {"code":200,"message":"成功","data":[],"ok":true};
  }
}

export const reqAddressInfo = () => request({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })
export const reqTradeNo = () => request({ url: '/order/auth/trade', method: 'get' })
export const postOrder = (param: Order, tradeNo: string) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data: param })
export const reqPayInfo = (orderId: number) => request({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
export const reqOrderPage = (pageNum: number) => request({ url: `/order/auth/${ pageNum }/5`, method: 'get' })

