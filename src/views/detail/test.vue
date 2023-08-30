
<template>
  <DetailInfo />
  <!--  <Banner />-->
  <!--  <Card />-->

</template>

<script lang="ts">
import DetailInfo from './DetailInfo/detailinfo.vue';
import { defineComponent } from 'vue';
import ImageContainer from "@/views/detail/ImageContainer/index.vue";
import { ClockCircleOutlined, ShopOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: 'Index',
  components: { ClockCircleOutlined, ShopOutlined, ImageContainer, DetailInfo },
  setup() {
    return {};
  },
});
</script>

<!--.btn-light {-->
<!--background-color: transparent;-->
<!--color: $black-color;-->
<!--border-color: $black-color;-->

<!--&.disabled, &:disabled {-->
<!--background-color: transparent;-->
<!--color: $black-color;-->
<!--border-color: $black-color;-->
<!--}-->
<!--&:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active, .show>&.dropdown-toggle {-->
<!--box-shadow: unset;-->
<!--color: $white-color;-->
<!--background-color: $black-color;-->
<!--border-color: $black-color;-->
<!--}-->
<!--&:not(:disabled):not(.disabled).active:focus, &:not(:disabled):not(.disabled):active:focus, .show>&.dropdown-toggle:focus {-->
<!--box-shadow: unset;-->
<!--}-->
<!--&:hover, &:focus {-->
<!--box-shadow: unset;-->
<!--color: $white-color;-->
<!--background-color: $black-color;-->
<!--border-color: $black-color;-->
<!--}-->
<!--}-->
<!--@media screen and (max-width: 767px) {-->
<!--.unit-price {-->
<!--display: none;-->
<!--}-->
<!--}-->

