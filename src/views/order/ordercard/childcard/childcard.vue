<template>
  <div v-for="(order, index) in order_items" :key="index" style="clear: both;margin-bottom: 0;margin-top: 0">
    <article class="product">
      <header>
        <img :src="order.cover" :alt="order.name">
      </header>

      <div class="content">
        <h1>
          <a to="`/products-details/${cart.id}`" class="item-name">
            {{ order.name }}
          </a>
        </h1>
        <Row class="specifications">
          <COL class="specifications_title"> 规格:</COL>
          <div v-for="(orderAttr, key) in order.specifications" :key="key" class="specifications_item">
            <span class="key">{{ key }}</span>
            <span class="attr">{{ orderAttr }} </span>
          </div>
        </Row>
        <Row class="attr_content">
          <p class="attr_unit">
            {{ order.unit_price }}
          </p>
          <p class="multiplication">
            x
          </p>
          <p class="attr_quantity">
            {{ order.quantity }}
          </p>
          <p class="attr_payment">
            {{ order.total_price }}
          </p>
          <div style="clear: both;">
            <a-button type="link" class="btn btn-buy-more">Buy Again</a-button>
          </div>

        </Row>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Card, Row, CardMeta, Col } from "ant-design-vue";
  import { DeleteOutlined } from "@ant-design/icons-vue";
  import { OrderDetail } from "@/api/sys/model/orderModel";
  export default defineComponent({
    name: 'OrdersChildCard',
    components:{
      DeleteOutlined,
      Row,
      Col,
    },
    props: {
      order_items: {
        type: [Object] as () => [OrderDetail],
        required: true,
      },
    },
    methods: {}
  });

</script>

<style lang="css" scoped>

  .product img {
    width: 100%;
    height: 100%;
  }
  .product header{
    background-color: #fff;
    border: 1px solid #ccc;
    border-style: none none solid none;
    float: left;
  }

  .product .content h4 {
    float: left;
  }
  .product header {
    background: #000;
    margin: 0 1% 0 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    height: 100%;
  }
  .product header:hover img {
    opacity: .7;
  }
  .product .content {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 100%;
    padding: 0 20px;
    width: 75%;
  }
  .product h1 {
    color: #53b5aa;
    font-size: 16px;
    font-weight: 300;
    margin: 2px 0 2px 0;
  }
  .product h1 .shipstate {
    align-items: baseline;
    display: inline-flex;
    color: #000000;
    font-size: 12px;
    float: right;
    font-style: italic;
  }
  .product h1 .shipstate p{
    margin-left: 5px;
    color:#e30943;
    font-size: 16px;
    font-style: normal;
  }
  @media screen and (min-width: 768px) {
    .product {
      border: 1px solid #eee;
      margin: 20px 0;
      width: 100%;
      height: 100px;
      position: relative;
      -webkit-transition: margin .2s linear, opacity .2s linear;
      -moz-transition: margin .2s linear, opacity .2s linear;
      -ms-transition: margin .2s linear, opacity .2s linear;
      -o-transition: margin .2s linear, opacity .2s linear;
      transition: margin .2s linear, opacity .2s linear;
    }
    .product img {
      width: 100px;
      height: 100px;
    }

  }
  @media screen and (max-width: 767px) {
    .product {
      border: 1px solid #eee;
      margin: 0 auto;
      width: 100%;
      height: auto;
      position: relative;
      -webkit-transition: margin .2s linear, opacity .2s linear;
      -moz-transition: margin .2s linear, opacity .2s linear;
      -ms-transition: margin .2s linear, opacity .2s linear;
      -o-transition: margin .2s linear, opacity .2s linear;
      transition: margin .2s linear, opacity .2s linear;
    }
    .product header {
      background: #000;
      margin: 0 1% 0 0;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 24%;
      height: 100%;
    }
  }
</style>

<style lang="scss">
  .attr_content{
    margin-bottom: 2px;
    .attr_unit{
      color: #cc193a;
      font-size: 16px;
    }
    .multiplication{
      margin-left: 5px;
      margin-right: 5px;
      color: black;
    }
    .attr_quantity{
      color: #cc193a;
      font-size: 16px;
    }
    .attr_payment{
      margin-left: 10px;
      font-weight: bold;
      color: #cc193a;
      font-style: italic;
      font-size: 18px;
    }

  }
  .btn-buy-more {
    position: absolute;
    right: 0;
  }
  .btn {
    background: #fad5d5;
    border: 1px solid #999;
    border-style: none none solid none;
    cursor: pointer;
    color: #ff0303;
    //height: 26px;
    font-weight: bold;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -ms-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
  }

  .btn:hover {
    color: #fff;
    background: #ff0303;
  }

  .product .content .specifications {
    font-style: italic;
    align-items: center;
    .specifications_title {
      flex-flow: column;
      font-size: 12px;
    }
    .specifications_item {
      flex-flow: column;
      .key {
        margin-left: 10px;
        font-size: 12px;
        color: #6c6565;
      }
      .attr {
        margin-left: 6px !important;
        font-size: 16px;
      }
    }
  }
</style>
