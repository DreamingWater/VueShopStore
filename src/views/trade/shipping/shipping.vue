<template>
  <template v-if="getShow">
  <div class="connect">
    <div class="connnect_container">
      <div class="connect_title">
        用户
      </div>
      <div class="info">
        无极
      </div>
    </div>
    <div class="connnect_container">
      <div class="connect_title">
        联系方式
      </div>
      <div class="info">
        sfsdfsd@qq.com
      </div>
      <div class="info">
        23432423432
      </div>
    </div>
    <div class="connnect_container">
      <div class="connect_title">
        地址
      </div>
      <div class="info">
        美国 加州 富加街道二十号235
      </div>
    </div>
  </div>
  <div class="price_container">
    <Row>
      <div class="price_title">
        金额
      </div>
      <div class="connect_price">
        100
      </div>
    </Row>

  </div>

  <div class="transport">
    <div class="transport_title">
      物流
    </div>
    <div class="transport-content">
      <div class="transport_way"> 亚马逊物流 </div>
      <div class="transport_price"> 10</div>
    </div>
  </div>
  </template>
</template>

<script setup>
  import { Row } from 'ant-design-vue';
  import { TradeStateEnum, useTradeState } from "@/views/trade/data";
  import { computed, unref } from "vue";
  const { handleBack, getTradeState } = useTradeState();
  const getShow = computed(() => unref(getTradeState) === TradeStateEnum.SHIPPING);
</script>

<style lang="scss">
.connect{
  margin-top: 10px;
}
.connnect_container {
    position: relative;
    margin: 0 auto; /* Add this line to center the element horizontally */
    display: flex; /* Add this line to center the element vertically */
    flex-direction: column; /* Add this line to center the element vertically */
    height: 80px;
    max-width: 80%;
    background: #fffffa;
    border-radius: 2px 2px;
    &:first-child {
      height: 60px;
      background: #f8f8f8;
    }
    &:last-child {
      //height: 50px;
      background: #f8f8f8;
    }
    .connect_title {
      margin-left: 20px;
      font-size: 16px;
      color: #484242;
      margin-bottom: 3px;
      font-weight: bold;
    }

    .info {
      margin-left: 20px;
      font-size: 16px;
      color: #000000;
    }
  }


.price_container {
  max-width: 80%;
  flex-direction: row-reverse;
  display: flex;
  text-align: center;
  line-height: 32px;
  background: #fafad2;
  border-radius: 2px 2px;
  margin: 0 auto; /* Add this line to center the element horizontally */
  .price_title{
    float: right;
    color: black;
    font-size: 18px;
    font-style: italic;
  }
  .connect_price{
    margin-left: 10px;
    float: right;
    color: #ec2247;
    font-size: 20px;

  }
}
.transport{
  margin-top: 10px;
  height: 60px;
  .transport_title{
    max-width: 80%;
    font-size: 20px;
    margin: 0 auto; /* Add this line to center the element horizontally */
  }
  .transport-content{
    max-width: 80%;
    margin: 0 auto; /* Add this line to center the element horizontally */
    .transport_way{
      float: left;
    }
    .transport_price{
      float: right;
      font-weight: 400;
    }

  }
}
</style>

