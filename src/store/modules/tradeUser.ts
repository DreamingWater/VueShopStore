import { defineStore } from 'pinia';

import { store } from "@/store";
import { TradeUser } from "@/api/sys/model/orderModel";
import { getTradeUserInfo } from "@/api/sys/payment";
import { reqCartData } from "@/api/sys/shopcart";
import { reactive } from "vue";

//1定义并导出容器，容器ID必须唯一
export const tradeUserStore = defineStore('tradeUser', {
  state: () => ({
    tradeUserList: reactive<TradeUser>({
      username: '',
      phone: '',
      address: '',
      email: '',
      country: '',
      state: '',
    }),
  }),

  getters: {
    tradeUserInfo: (state): TradeUser => {
      return state.tradeUserList;
    },
  },

  //不能使用箭头函数定义actions,因为箭头函数绑定外部this
  actions: {
    async loadTradeUserInfo() {
      // this.cartList = (((await reqCartData()).data) as Array<CarInfoList>)
      const data: TradeUser = await getTradeUserInfo();
      this.tradeUserList = data;
    },
  },
})

export function useCarStoreWithOut() {
  return tradeUserStore(store);
}

