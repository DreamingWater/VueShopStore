<template>
  <OrderCard :cart="cart"></OrderCard>
</template>

<script lang="ts">

import { defineComponent, computed, unref } from 'vue';
import OrderCard from './ordercard.vue'
import { Card, Row, CardMeta, Col } from "ant-design-vue";
export default defineComponent({
    name: 'OrdersCard',
  components:{
    OrderCard,
    Row,
    Col,
  },
  props: {
    cart: {
      type: [Object],
      required: true,
    },
  },
  computed: {
    orders(){
      return [{
        id: 1,
        quantity: 1,
        price: 10,
        name: 'helo',
        image:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications:{'color':'red','size':'big'},
        shippingState:0,
      }]
      // return this.$store.getters.cart
    },
    // eslint-disable-next-line vue/return-in-computed-property
    // cartTotal(){
    //   return this.$store.getters.totalAmount
    // }
  },
  methods: {
    removeItemFromCart(id){
      window.console.log('remove'+id.toLocaleString());
      // this.$store.dispatch('deleteCart', id)
    },
    changeChecked(saleAttrValue: any, arr: any) {
      window.console.log(saleAttrValue);
      //响应式数据:对象、数组
      //数组的响应式数据:变更、替换【基本类型数据、引用类型对象响应式的】
      //数组里面是基本类型数据：替换、变更    如果对象，不管你怎么玩都是相应的!!!!
      //排他操作
      //底下的代码:修改数组里面的对象【相应的式的】,数据变化视图跟这变化！！！
      arr.forEach((item) => {
        item.isChecked = "0";
      });
      saleAttrValue.isChecked = "1";
    },
    commodity_state(this_index){
      const this_commodity= this.orders[this_index];
      if (this_commodity){
        const this_state = this_commodity.shippingState;
        if(parseInt(this_state) === 0){
          return {'Waiting':"Coming soon"}
        }else if( parseInt(this_state) === 1){
          return {'Ordercompletion':'Delivered'}
        } else{
          return {'Logisticsnumber':this_state}
        }
      }
    }
  }
});

</script>

<style lang="css" scoped>

a {
  color: #000;
  text-decoration: none;

  -webkit-transition: color .2s linear;
  -moz-transition: color .2s linear;
  -ms-transition: color .2s linear;
  -o-transition: color .2s linear;
  transition: color .2s linear;
}

a:hover {
  color: #53b5aa;
}

.product img {
  width: 100%;
  height: 100%;
}

.product header, .product .content {
  background-color: #fff;
  border: 1px solid #ccc;
  border-style: none none solid none;
  float: left;
}
.product .content .specifications{
  font-style: italic;
}
.product .content .specifications span{
  margin-left: 10px;
}

.product .content  h4 {
  float: left;
}

.product header {
  background: #000;
  margin: 0 1% 20px 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 24%;
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
  font-size: 20px;
  font-weight: 300;
  margin: 5px 0 5px 0;
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
    width: 70%;
    height: 100px;
    position: relative;
    -webkit-transition: margin .2s linear, opacity .2s linear;
    -moz-transition: margin .2s linear, opacity .2s linear;
    -ms-transition: margin .2s linear, opacity .2s linear;
    -o-transition: margin .2s linear, opacity .2s linear;
    transition: margin .2s linear, opacity .2s linear;
  }

}
@media screen and (max-width: 767px) {

  .product {
    border: 1px solid #eee;
    margin: 0 auto;

    width: 80%;
    height: 75px;
    position: relative;
    -webkit-transition: margin .2s linear, opacity .2s linear;
    -moz-transition: margin .2s linear, opacity .2s linear;
    -ms-transition: margin .2s linear, opacity .2s linear;
    -o-transition: margin .2s linear, opacity .2s linear;
    transition: margin .2s linear, opacity .2s linear;
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

</style>
