<template>
  <div style="clear: both" class="card_container">
    <div class="order_card">
      <Row class="header">
        <div class="header_left">
          <span class="label_title"> 订单编号 </span>
          <p class="label_content">
            {{ oneOrder.order_number }}
          </p>
        </div>
        <div
          class="header_right"
          v-for="(state_value, state_key) in commodity_state()"
          key="state_value"
        >
          <span class="label_title">
            {{ state_key }}
          </span>
          <p class="label_content">
            {{ state_value }}
          </p>
        </div>
      </Row>
      <div class="content">
        <ChildCard :order_items="order_items" />
      </div>
      <Row class="footer">
        <Col span="8"  class="footer_item">
          <span class="value">  {{ oneOrder.username }} </span>
        </Col>
        <Col span="8"  class="footer_item">
          <span class="value">{{ oneOrder.phone }} </span>
        </Col>
        <Col span="8" class="footer_item">
          <span class="value"> {{ oneOrder.address }} </span>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { OrderDetail, OrderItem } from '/@/api/sys/model/orderModel';
  import { Card, Row, CardMeta, Col } from 'ant-design-vue';
  import ChildCard from './childcard/childcard.vue';
  import { DeleteOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    components: {
      ChildCard,
      DeleteOutlined,
      Row,
      Col,
    },
    props: {
      oneOrder: {
        type: Object as () => OrderItem,
        required: true,
      },
    },
    computed: {
      order_items() {
        return this.oneOrder.order_items || [];
      },
    },
    mounted() {
      const res = this.commodity_state();
      window.console.log(res);
    },
    methods: {
      commodity_state() {
        const this_state = this.oneOrder.shippingState;

        if (parseInt(this_state) === 0) {
          return { Waiting: 'Coming soon' };
        } else if (parseInt(this_state) === 1) {
          return { Ordercompletion: 'Delivered' };
        } else {
          return { Logisticsnumber: this_state };
        }
      },
    },
  });
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    background: #fffff2;

    .header_right,
    .header_left {
      align-items: center;
      display: inline-flex;
      .label_content {
        margin-left: 3px;
        font-weight: bold;
        margin-bottom: 0;
        color: #7984ff;
        font-size: 16px;
      }
    }
  }

  .content {
    height: 100%;
  }
  .order_card {
    margin: 5px 0px;
    //background: #ff79c6;
  }
  @media screen and (min-width: 768px) {
    .card_container {
      width: 80%;
      margin: 0 auto;
      //display: flex;
      height: auto;
      //flex-direction: column;
    }
  }
  @media screen and (max-width: 767px) {
    .card_container {
      width: 100%;
      //display: flex;
      height: auto;
      //flex-direction: column;
    }
  }

  .card_container {
    margin-top: 5px;
    background: #fffff8;
    border-radius: 2px 2px;
    margin-bottom: 15px;
  }

  .footer {
    .footer_item{
      color: #fabddf;
      justify-items: center;
      font-style: italic;
      font-size: 12px;
    }
  }
</style>
