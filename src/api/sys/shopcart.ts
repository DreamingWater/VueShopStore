import { cartDetail, SalesCardList } from "@/api/sys/fakedata";
import { RequestShowData } from "@/api/sys/model/product";
import { SalesCardItem } from "@/views/dashboard/analysis/data";
import { ShopcartDetail } from "@/api/sys/model/shopcart";


const request = (params_obj) => {
  window.console.log(params_obj);
  if (params_obj.url.indexOf('cartList') !== -1 ) {
    return {"code":200,"message":"成功","data":[{"cartInfoList":[{"id":88507,"userId":"2","skuId":22,"cartPrice":1314,"skuNum":4,"imgUrl":"http://39.98.123.211/group1/M00/02/DA/rBHu8mGxO7mAE-3gAACWbB2wj-4610.jpg","skuName":"vivo S10 5G手机 8GB+256GB 青柠 超轻薄机身  6nm旗舰芯片 拍照手机 黑","isChecked":0,"createTime":"2023-05-26 08:44:33","operateTime":"2023-05-26 08:44:33","isOrdered":0,"orderTime":null,"sourceType":"QUERY","sourceId":22,"skuPrice":1314,"couponInfoList":null},{"id":88505,"userId":"2","skuId":9,"cartPrice":8197,"skuNum":1,"imgUrl":"http://39.98.123.211/group1/M00/00/02/rBHu8l-rgfWAJllcAAEY0AkXL8M782.jpg","skuName":"Apple iPhone 12 (A2404) 64GB 红色 支持移动联通电信5G 双卡双待手机","isChecked":0,"createTime":"2023-05-26 08:43:57","operateTime":"2023-05-26 08:43:57","isOrdered":0,"orderTime":null,"sourceType":"QUERY","sourceId":9,"skuPrice":8197,"couponInfoList":null},{"id":88502,"userId":"2","skuId":1,"cartPrice":5999,"skuNum":4,"imgUrl":"http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg","skuName":"小米10 至尊纪念版 双模5G 骁龙865  120W快充 8GB+128GB 陶瓷黑 游戏手机","isChecked":0,"createTime":"2023-05-26 08:29:47","operateTime":"2023-05-26 08:31:32","isOrdered":0,"orderTime":null,"sourceType":"QUERY","sourceId":1,"skuPrice":5999,"couponInfoList":null},{"id":88472,"userId":"2","skuId":11,"cartPrice":8197,"skuNum":3,"imgUrl":"http://39.98.123.211/group1/M00/00/02/rBHu8l-rgfWASR1YAADsOUYB-2g312.jpg","skuName":"Apple iPhone 12 (A2404) 64GB 白色 支持移动联通电信5G 双卡双待手机","isChecked":0,"createTime":"2023-05-26 00:45:20","operateTime":"2023-05-26 08:55:55","isOrdered":0,"orderTime":null,"sourceType":"QUERY","sourceId":11,"skuPrice":8197,"couponInfoList":null},{"id":88471,"userId":"2","skuId":12,"cartPrice":9197.00,"skuNum":2,"imgUrl":"http://39.98.123.211/group1/M00/00/02/rBHu8l-rgfWAVRWzAABUiOmA0ic932.jpg","skuName":"Apple iPhone 12 (A2404) 128GB 黑色 支持移动联通电信5G 双卡双待手机","isChecked":1,"createTime":"2023-05-26 00:34:56","operateTime":"2023-05-26 08:43:04","isOrdered":0,"orderTime":null,"sourceType":"QUERY","sourceId":12,"skuPrice":9197,"couponInfoList":null},{"id":88457,"userId":"2","skuId":21,"cartPrice":2424.00,"skuNum":1,"imgUrl":"http://39.98.123.211/group1/M00/02/DA/rBHu8mGxO7mAIZosAACYibCV0ks310.jpg","skuName":"vivo S10 5G手机 8GB+256GB 青柠 超轻薄机身  6nm旗舰芯片 拍照手机 青色","isChecked":0,"createTime":"2023-05-25 23:30:59","operateTime":"2023-05-25 23:30:59","isOrdered":1,"orderTime":"2023-05-26 00:34:42","sourceType":"QUERY","sourceId":21,"skuPrice":2424,"couponInfoList":null}],"activityRuleList":null,"createTime":"2023-05-26 08:44:33"}],"ok":true};

  } else {
    window.console.log(params_obj.url);
    return {"code":200,"message":"成功","data":[],"ok":true};
  }
}


//detail
export const reqDetailData = (id: number) => request({ url: `/item/${ id }`, method: 'get' })

//cart
export const postCartData = (id: number, quantity: number) => request({ url: `/cart/addToCart/${ id }/${ quantity }`, method: 'post' })
export const reqCartData = () => request({ url: '/cart/cartList', method: 'get' })
export const deleteCartData = (skuId: number) => request({ url: `/cart/deleteCart/${ skuId }`, method: 'DELETE' })
export const updateCartChecked = (skuId: number, checked: 0 | 1) => request({ url: `/cart/checkCart/${ skuId }/${ checked }`, method: 'get' })


// 获取购入车数据
export function reqShopcartData(): ShopcartDetail[] {
  window.console.log('reqShopcartData');
  return cartDetail;
}

// 商品加入购入车
export function postShopcartData(params: ShopcartDetail) {
  window.console.log(params);
  window.console.log('postShopcartData');
}

// 删除购物车商品
export function deleteShopcartData(id: number) {
  window.console.log(id);
  window.console.log('deleteShopcartData');
}
