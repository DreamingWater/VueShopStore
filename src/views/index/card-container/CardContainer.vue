<!--<template>-->
<!--  <ACard hoverable style="width: 300px">-->
<!--    <template #cover>-->
<!--      <img-->
<!--        alt="example"-->
<!--        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"-->
<!--      />-->
<!--    </template>-->
<!--    <template #actions>-->
<!--      <setting-outlined key="setting" />-->
<!--      <edit-outlined key="edit" />-->
<!--      <ellipsis-outlined key="ellipsis" />-->
<!--    </template>-->
<!--    <CardMETA title="Card title" description="This is the description">-->
<!--      <template #avatar>-->
<!--        <Avatar src="https://joeschmoe.io/api/v1/random" />-->
<!--      </template>-->
<!--    </CardMETA>-->
<!--  </ACard>-->
<!--</template>-->
<!--<template>-->
<!--  <div class="card_container justify-between !my-4 enter-y">-->
<!--    <template v-for="(item, index) in growCardList()" :key="item.title">-->
<!--      <ACard hoverable :span="8" :class="`${prefixCls}-action__item`">-->
<!--        <template #cover>-->
<!--          <img-->
<!--            alt="example"-->
<!--            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"-->
<!--          />-->
<!--        </template>-->
<!--        <template #actions>-->
<!--          <setting-outlined key="setting" />-->
<!--          <edit-outlined key="edit" />-->
<!--          <ellipsis-outlined key="ellipsis" />-->
<!--        </template>-->
<!--        <CardMETA title="Card title" description="This is the description">-->
<!--          <template #avatar>-->
<!--            <Avatar src="https://joeschmoe.io/api/v1/random" />-->
<!--          </template>-->
<!--        </CardMETA>-->
<!--      </ACard>-->
<!--    </template>-->
<!--    <ACard hoverable :span="8" :class="`${prefixCls}-action__item`">-->

<!--      <template #cover>-->
<!--        <img-->
<!--          alt="example"-->
<!--          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"-->
<!--        />-->
<!--      </template>-->
<!--      <template #actions>-->

<!--        <a-row class="action_container">-->
<!--            <div class="product-price">-->
<!--              &lt;!&ndash;                    <span&ndash;&gt;-->
<!--              &lt;!&ndash;                      class="old-price"&ndash;&gt;-->
<!--              &lt;!&ndash;                      v-if="product.offer"&ndash;&gt;-->
<!--              &lt;!&ndash;                    >&ndash;&gt;-->
<!--              <span class="old-price">-->
<!--                        $50-->
<!--                    </span>-->
<!--              <span class="new-price">$100</span>-->
<!--            </div>-->
<!--            <a type="default" class="add_cart"> <ShoppingCartOutlined />ADD TO CARD</a>-->
<!--        </a-row>-->

<!--&lt;!&ndash;        <setting-outlined key="setting" />&ndash;&gt;-->
<!--&lt;!&ndash;        <edit-outlined key="edit" />&ndash;&gt;-->
<!--&lt;!&ndash;        <ellipsis-outlined key="ellipsis" />&ndash;&gt;-->
<!--      </template>-->
<!--      <CardMETA  description="Mouth Oral Sex Masturbation Automatic Vibrating Heating Masturbator Cu">-->
<!--&lt;!&ndash;        <template #avatar>&ndash;&gt;-->
<!--&lt;!&ndash;          <Avatar src="https://joeschmoe.io/api/v1/random" />&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--      </CardMETA>-->
<!--    </ACard>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="card-title-section">
    <svg width="300" height="25" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>
        <path id="svg_5" d="m146,251.84644l27.08573,-11.69999l72.2286,0l27.08572,11.69999l-27.08572,11.69999l-72.2286,0l-27.08573,-11.69999z" opacity="undefined" stroke="#000" fill="none"/>
        <path stroke-dasharray="2,2" stroke="#000" id="svg_6" d="m0.13907,12.35402l64.58568,-12.39998l172.22848,0l64.58566,12.39998l-64.58566,12.39998l-172.22848,0l-64.58568,-12.39998z" fill="none"/>
        <text x="50%" y="50%" font-size="20" fill="black" text-anchor="middle" dominant-baseline="middle">{{ sectionName }}</text>
      </g>
    </svg>
  </div>
  <div class="card_container justify-between !my-4 enter-y">
    <template v-for="(item, index) in salescardList.slice(0, 4)" :key="item.id">
      <SalesCard :item="item" :loading="true"> </SalesCard>
    </template>
  </div>
  <MoreCard :items="salescardList"> </MoreCard>
</template>

<style lang="scss">
  .card-title-section{
    margin-top: 10px;
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
  import SalesCard from '@/views/index/card-container/card/SalesCard.vue';
  import MoreCard from './card/cards.vue';

  const props = defineProps({
    sectionName: {
      type: String,
      required: true,
    },
    salescardList: {
      type: [Object],
      required: true,
    },
  });
</script>


