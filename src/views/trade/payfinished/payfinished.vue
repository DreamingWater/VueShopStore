<template>
  <template v-if="getShow">
    <div class="deliver_part">
      <img src="public/imgs/deliverytruck.svg" alt="Delivery Truck">
    </div>
    <div class="pay_success">
      <h1>
        Payment successfully
      </h1>
    </div>

    <div class="order_passage">
      <ARow class="order_index">
        <p> Your order number is<span> 234324324</span> Your order will be delivered sooner!!!</p>
      </ARow>
    </div>

  </template>
</template>

<style lang="scss">
  .deliver_part img {
    display: block;
    margin: 0 auto;
    height: 200px;
    width: 200px;
  }
  .pay_success {
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }
  .order_passage {
    margin: 20px auto;
    align-items: center;
    text-align: center;
    .order_index {
      display: inline-flex;
      align-items: flex-start;
      span{
        margin-left: 5px;
        margin-right: 5px;
        color: #ff79c6;
        font-weight: bold;
      }
    }
  }

</style>

<script setup>
  import { TradeStateEnum, useTradeState } from "@/views/trade/data";
  import { computed, unref } from "vue";
  import { Row as ARow } from 'ant-design-vue';

  const { handleBack, getTradeState } = useTradeState();
  const getShow = computed(() => unref(getTradeState) === TradeStateEnum.PAYSUCCESS);
</script>
