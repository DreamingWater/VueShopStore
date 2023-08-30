<template>
  <Classificaiton :thisClass="thisClass" />
<!--  <Classificaiton />-->
</template>

<script lang="ts" setup>
  import Classificaiton from '/@/views/classification/base/base.vue';
  import { ref, onMounted, defineProps } from "vue";
  import { RequestShowDataClassEnum } from "@/api/sys/model/product";
  const thisClass = RequestShowDataClassEnum.MALE_CUP;

</script>
