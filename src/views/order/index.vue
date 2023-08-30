<template>
  <template v-for="(order, index) in orderData" :key="index">
    <OrderCard :oneOrder="order" />
  </template>
</template>

<script lang="ts" setup>
  import { Row, Col } from 'ant-design-vue';
  import OrderCard from './ordercard/ordercard.vue';
  import { ref, onMounted} from "vue";
  import { reqOrderData } from "@/api/sys/product";

  const orderData = ref([]); //订单数据

  onMounted(() => {
    console.log('onmounted');
    const result = reqOrderData();
    orderData.value = result;
    console.log(result);
  })
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap');
  $font-family: 'Archivo', sans-serif;
  $font-size: 14px;
  $paragraph-color: #666666;
  $black-color: #222222;
  $white-color: #ffffff;
  $transition: .5s;

</style>
