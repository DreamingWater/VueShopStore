<template>
  <Banner />
  <ShowContainer />
<!--  <Card />-->
</template>
<!--<template>-->
<!--  <ACard :span="8">-->
<!--    <template #cover>-->
<!--      <img-->
<!--        alt="example"-->
<!--        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"-->
<!--      />-->
<!--    </template>-->
<!--    <ACardMeta description="This is a card meta">-->
<!--      &lt;!&ndash; content goes here &ndash;&gt;-->
<!--    </ACardMeta>-->
<!--  </ACard>-->
<!--</template>-->


<!--<script>-->
<!--import { defineComponent, computed, unref } from 'vue';-->
<!--import { Card, Row, CardMeta, Col } from "ant-design-vue";-->
<!--export default defineComponent({-->
<!--  name: 'SalesCard',-->
<!--  components: {-->
<!--    ACard: Card,-->
<!--    ACardMeta:CardMeta,-->
<!--    ARow: Row,-->
<!--  },-->
<!--});-->
<!--</script>-->



<script lang="ts">
  import Banner from './banner/banner.vue';
  import ShowContainer from './show.vue';
  // import Card from './card-container/card/SalesCard.vue'
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Index',
    components: { Banner, ShowContainer },
    setup() {
      return {};
    },
  });
</script>
