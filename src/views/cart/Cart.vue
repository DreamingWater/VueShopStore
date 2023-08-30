<template xmlns="http://www.w3.org/1999/html">
  <!-- Start Cart Area -->
<!--  <CartCard :cart="cart"> </CartCard>-->
  <template v-for="(cart, index) in shopcartData" :key="index">
<!--    <CodeCartCard :cart="shopcartData"> </CodeCartCard>-->
    <CodeCartCard :cart="cart"> </CodeCartCard>
  </template>
  <ButtonGroup></ButtonGroup>

  <!-- End Cart Area -->
</template>

<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import { Card, CardMeta, Row, Col } from "ant-design-vue";
  import CodeCartCard from "./card/codecard.vue"
  import ButtonGroup from "./button/button.vue"
  import { reqShopcartData } from "@/api/sys/shopcart";
  const shopcartData = ref([]);

  onMounted(() => {
    const result = reqShopcartData();
    shopcartData.value = result;
  })

</script>
