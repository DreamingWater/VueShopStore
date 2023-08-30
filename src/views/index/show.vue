<template>
  <template v-for="({ sectionName, salescardList }) in sale_items" :key="sectionName">
    <CardContainer :sectionName="sectionName" :salescardList="salescardList" />
  </template>
</template>

<script lang="ts" setup>
  import CardContainer from './card-container/CardContainer.vue';
  import { onMounted, ref } from 'vue';
  import { SalesCardList as SalesCardList2 } from '@/views/dashboard/analysis/data';
  import { SalesCardList as SalesCardList1 } from '@/views/dashboard/analysis/data';
  import { ClassShowName, RequestShowDataClassEnum } from "@/api/sys/model/product";
  import { reqShowData } from "@/api/sys/product";
  import { ClassShowNums, pageNums } from "@/hooks/setting/commerceSetting";

  const sale_items = ref([]);

  // 调用axios获取list数据
  // const reqSectionData = async (this_class: RequestShowDataClassEnum) => {
  //   const showData = await reqShowData({
  //     class: this_class,
  //     pageNums: pageNums,
  //     currentPage: 1,
  //   });
  //   return showData;
  // };

  // 获取数组前 numbers 个数据
  function getFirstNItems(list: any[], numbers: number): [] {
    return list.slice(0, numbers);
  }

  // 不能使用promise作为返回，不然回导致list存储的也是promise
  const reqSectionData = (this_class: RequestShowDataClassEnum) => {
    const showData = reqShowData({
      class: this_class,
      pageNums: pageNums,
      currentPage: 1,
    });
    return getFirstNItems(showData, ClassShowNums);
  };
  // 组合name 和 list 的obj
  const FindTargetElemnet = (this_class: RequestShowDataClassEnum) => {
    const thisSectionName = ClassShowName.find((item) => item.key === this_class)?.string;
    const thisSectionList = reqSectionData(this_class);
    sale_items.value.push({ sectionName: thisSectionName, salescardList: thisSectionList});
  }

  onMounted( ()=>{
    // 根据每个RequestShowDataClassEnum的元素来获取对应的数据
    for (const key in RequestShowDataClassEnum) {
      if (typeof RequestShowDataClassEnum[key] === 'number') {
        // class的value值，分别为 0， 1， 2， 3
        FindTargetElemnet(RequestShowDataClassEnum[key] as number);
      }
    }
  })
</script>
