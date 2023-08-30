<template>
  <ARow class="card-title-section">
    <svg width="300" height="25" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>
        <path id="svg_5" d="m146,251.84644l27.08573,-11.69999l72.2286,0l27.08572,11.69999l-27.08572,11.69999l-72.2286,0l-27.08573,-11.69999z" opacity="undefined" stroke="#000" fill="none"/>
        <path stroke-dasharray="2,2" stroke="#000" id="svg_6" d="m0.13907,12.35402l64.58568,-12.39998l172.22848,0l64.58566,12.39998l-64.58566,12.39998l-172.22848,0l-64.58568,-12.39998z" fill="none"/>
        <text x="50%" y="50%" font-size="20" fill="black" text-anchor="middle" dominant-baseline="middle">hello world</text>
      </g>
    </svg>

  </ARow>
  <div class="card_container justify-between !my-4 enter-y">
    <template v-for="(item, index) in salescardList.slice(0, 4)" :key="item.id">
      <SalesCard :item="item" :loading="true"> </SalesCard>
    </template>
  </div>
  <MoreCard :items="salescardList"> </MoreCard>
</template>

<style lang="scss">
  .card-title-section{
    width: 100%;
    background: #fffffa;
    height: 30px;
    border-radius: 1px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    @import '@/assets/css/diamond.scss'; //导入外部scss文件
  }
  // 定义每个卡片的宽度
  $card-width: 23%;
  // 定义每个卡片之间的间距
  $card-gap: 0.5%;

  .card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    //max-width: 1280px; // 可根据实际情况调整
  }

  // 根据屏幕宽度动态调整每行显示的卡片数量
  @media only screen and (max-width: 767px) {
    .card_container {
      width: 96%;
    }
    .card_container .ant-card {
      width: 48%;
      margin: 1%;
    }
  }

  @media only screen and (min-width: 768px) {
    .card_container {
      width: 96%;
    }
    .card_container .ant-card {
      width: $card-width;
      margin: 0 $card-gap;
    }
    .card_container .ant-card:nth-child(4n + 1) {
      margin-left: 0;
    }
    .card_container .ant-card:nth-child(4n) {
      margin-right: 0;
    }
  }
</style>



<script setup>
import { defineProps, defineEmits } from 'vue';
import { Row as ARow } from 'ant-design-vue'
import SalesCard from '@/views/index/card-container/card/SalesCard.vue';
import MoreCard from '@/views/index/card-container/card/cards.vue';

const props = defineProps({
  salescardList: {
    type: [Object],
    required: true,
  },
});
</script>


