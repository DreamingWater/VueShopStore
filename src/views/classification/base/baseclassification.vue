
<template>
  <div class="card_container justify-between !my-4 enter-y">
    <template v-for="(item, index) in salescardList" :key="item.id">
      <SalesCard :item="item" :loading="true"/>
    </template>
  </div>
  <InfiniteLoading @infinite="loadData" />
</template>

<style lang="scss">

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
  import { defineProps, defineEmits, ref, onMounted } from 'vue';
  import SalesCard from '@/views/index/card-container/card/SalesCard.vue';
  import { reqShowData } from "@/api/sys/product";
  import { pageNums } from "@/hooks/setting/commerceSetting";
  import InfiniteLoading from 'v3-infinite-loading';
  const salescardList = ref([]);
  const current_page = ref(1);

  const props = defineProps({
    thisClass: {
      type: Number,
      required: true,
    },
  });
  const loadData = async () => {
    await getDataList();
  }
  const getDataList = async () => {
    let result = await reqShowData({
      class: props.thisClass,
      pageNums: pageNums,
      currentPage: current_page.value,
    });
    salescardList.value.push(...result);
  }
  onMounted(async () => {
    await getDataList();
  });
  // onMounted(() => {
  //   // 监听页面滚动
  //   window.onscroll= pageScroll;
  // })
</script>


