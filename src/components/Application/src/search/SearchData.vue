<template>
  <ARow class="searchdata-list" @click="hand_click">
    <ACol class="searchdata-list__item-icon" :span="6">
      <img :src="item.cover" class="img_class" />
    </ACol>
    <ACol class="searchdata-list__item-content" :span="16">
      <div class="name"> {{ item.name }} </div>
      <span class="description"> {{ item.description }} </span>
    </ACol>
  </ARow>
</template>
<script lang="ts">
  import { ref, defineComponent, computed, unref } from 'vue';
  import { Row, Col } from 'ant-design-vue';

  const addCartButton = ref(null);
  export default defineComponent({
    name: 'SearchData',
    components: {
      ARow: Row,
      ACol: Col,
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        addCartButton,
      };
    },

    methods: {
      hand_click(e) {
        window.console.log(this.item.name);
      },
    },
  });
</script>

<style lang="scss" scoped>
  .searchdata-list {
    margin-top: 5px;
    margin-bottom: 10px;
    position: relative;
    .searchdata-list__item-icon {
      float: left;
      .img_class {
        height: 100px;
        width: 100%;
      }
    }

  }
  .searchdata-list__item-content {
    margin-left: 8px;
    //display: flex;
    //flex-direction: column;
    float: right;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
  }

  .description {
    height: auto;
    padding-left: 3px;
    word-wrap: break-word;
    word-break: break-all;
  }
</style>
