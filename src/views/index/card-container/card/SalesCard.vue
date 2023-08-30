<template>
  <ACard >
    <template #cover>
      <img
        alt="example"
        :src="item.cover"
        style="height:200px"
      />
    </template>
    <template #actions>
      <ARow>
        <Acol :span="8">
          <div class="product-price">
            <!--                    <span-->
            <!--                      class="old-price"-->
            <!--                      v-if="product.offer"-->
            <!--                    >-->
            <span class="old-price">
                  ${{ item.old_price}}
              </span>
            <span class="new-price">${{ item.unit_price }}</span>

          </div>
        </Acol>
        <ACol :span="16">
          <a-button class="add_cart" type="link" @click="hand_click" ref="addCartButton">
            <ShoppingCartOutlined />
            <span class="add_cart_span">
              ADD TO CART
            </span>
          </a-button>
        </ACol>
      </ARow>

    </template>
<!--    <ACard>-->
    <ACardMeta :title="item.name" :description="item.description" style="height: auto">
    </ACardMeta>
<!--    </ACard>-->

  </ACard>
</template>
<script lang="ts">
  import {
    ShoppingCartOutlined
  } from "@ant-design/icons-vue";
  import { ref } from 'vue';
  // defineProps({
  //   // loading: {
  //   //   type: Boolean,
  //   // },
  //   //
  //   // item: {
  //   //   type: [Object],
  //   //   required: true,
  //   // },
  // });
  import { defineComponent, computed, unref } from 'vue';
  import { Card, Row, CardMeta, Col } from "ant-design-vue";
  import { add_to_cart } from '/@/utils/animation/addcart.js';

  const addCartButton = ref(null);
  export default defineComponent({
    name: 'SalesCard',
    components: {
      ACard: Card,
      ACardMeta: CardMeta,
      ShoppingCartOutlined,
      ARow: Row,
      ACol: Col,
    },
    props: {
      loading: {
        type: Boolean,
      },

      item: {
        type: [Object],
        required: true,
      },
    },
    data(){
      return {
        addCartButton,
      };
    },

    methods: {
      hand_click(e){
        this.$nextTick(() => {
          const buttonElement = this.$refs.addCartButton.$el;
          add_to_cart(buttonElement, 1);
        });
      }
    },


  });
</script>

<style lang="scss">
  .ant-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ant-card-body {
    padding: 3px 3px;
    .ant-card-meta-title {
      font-size: 14px;
      margin-bottom: 2px !important;
    }
    .ant-card-meta-description {
      font-size: 12px;
      padding-left: 5px;
    }
  }

  .ant-card-actions {

    position: relative;
    display: inline-flex;
    align-items: center;
    li {
      margin-top: 5px;
      margin-bottom: 5px;
      span .ant-row {
        display: inline-flex;
        align-items: center;
      }
    }
    .product-price {
      display: inline-flex;
      align-items: center;
      width: 100%;
      margin-left: 5px;
      text-decoration: line-through;

      .new-price {
        font-size: 14px;
        color: red;
      }

      .old-price {
        color: #858585;
        font-size: 12px;

      }
    }
  }
  .add_cart {
    width: 100%;
    display: inline-block;
    text-align: center;
    align-items: center;
    float: right;
    margin-left: 0;
    padding-left: 3px;
    padding-right: 3px;
    .anticon-shopping-cart{
      margin: 0 0;
    }
    svg {
      position: relative;
      bottom: -3px;
    }
    .add_cart_span{
      //background: #ff8000;
      margin: 0 0 !important;
    }

  }



</style>
