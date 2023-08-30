<!--<template>-->
<!--  <div class="card-more-section"><div class="card-more">Show more...</div></div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--  import { defineComponent, computed, unref } from 'vue';-->

<!--  export default defineComponent({-->
<!--    name: 'SalesCard',-->
<!--    components: {},-->
<!--    props: {-->
<!--      loading: {-->
<!--        type: Boolean,-->
<!--      },-->
<!--      item: {-->
<!--        type: [Object],-->
<!--        required: true,-->
<!--      },-->
<!--    },-->
<!--    data() {-->
<!--      return {};-->
<!--    },-->
<!--    methods: {},-->
<!--  });-->
<!--</script>-->

<!--<style lang="scss">-->
<!--  .card-more-section{-->
<!--    position: relative;-->
<!--    .card-more {-->
<!--      float: right;-->
<!--      min-width: 100px;-->
<!--      border: 1px solid #000000;-->
<!--      border-radius: 1px 1px;-->
<!--      margin-right: 20px;-->
<!--      font-weight: bold;-->
<!--      color:red;-->
<!--      text-align: center;-->
<!--    }-->
<!--  }-->
<!--</style>-->


<template>
  <ACard>
    <template #cover>
      <img
        alt="img"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <!--    <ACard>-->
    <ACardMeta description="Click to open the treasure trove" title="More..." style="height: auto">
    </ACardMeta>
    <!--    </ACard>-->

  </ACard>
</template>
<script lang="ts">
import {
  ShoppingCartOutlined
} from "@ant-design/icons-vue";
import { ref } from 'vue';
import { defineComponent, computed, unref } from 'vue';
import { Card, Row, CardMeta, Col } from "ant-design-vue";
import {add_cart_animation, Parabola} from '/@/utils/animation/addcart.js';

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
        const target_shop_icon = document.getElementById('this-shop-icon');
        // add_cart_animation(buttonElement, target_shop_icon);
        let parabola = new Parabola({
          origin: buttonElement,
          target: target_shop_icon,
          element: buttonElement,
          callback: this.change_shop_icon_num,
        });
        parabola.move();
      });
    },
    change_shop_icon_num(){
      let shop_num_str = document.getElementById('shop_icon_number');
      const add_num = parseInt(shop_num_str.innerText) + 1
      shop_num_str.innerText = add_num.toString() ;
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
.ant-card-actions {

  position: relative;

  .product-price {
    display: inline-block;
    align-items: center;
    width: 100%;
    margin-left: 5px;

    span {
      font-size: 17px;
      display: inline-block;
      color: red;
    }

    .old-price {
      color: #858585;
      font-size: 15px;
      text-decoration: line-through;
    }
  }
}
.add_cart {
  width: 100%;
  display: inline-block;
  text-align: center;
  align-items: center;
  float: right;
  margin-left: 0px;
  .anticon-shopping-cart{
    margin: 0 0;
  }
  svg {
    position: relative;
    bottom: -3px;
  }
  .add_cart_span{
    //background: #ff8000;
    margin: 0 0;
  }

}



</style>
