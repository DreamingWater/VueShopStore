<template>
  <article class="product">
    <header>
      <a class="remove">
        <img :src="cart.cover" :alt="cart.name" >
      </a>
    </header>

    <div class="content">
      <h1>
        <a to="`/products-details/${cart.id}`" class="item-name">
          {{ cart.name }}
        </a>
        <DeleteOutlined class="delete_icon" @click="delete_item"></DeleteOutlined>
      </h1>

      <!--      <ul>-->
      <!--        <li>Unit10</li>-->
      <!--        <li>规格红色</li>-->
      <!--        <li>Material:Cotton</li>-->
      <!--      </ul>-->

<!--      <h4>规格</h4>-->
<!--      <Row class="choose_section">-->
<!--        <ul v-for="(saleAttr, index) in spuSaleAttrList" :key="saleAttr.id" class="choose_product_attrs">-->
<!--          <li changepirce="0" :class="{ active: saleAttrValue.isChecked == 1 }"-->
<!--              v-for="(saleAttrValue, index) in saleAttr.spuSaleAttrValueList"-->
<!--              :key="saleAttrValue.id" @click="changeChecked(saleAttrValue, saleAttr.spuSaleAttrValueList)">-->
<!--            <a>-->
<!--              {{ saleAttrValue.saleAttrValueName }}-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </Row>-->
      <ARow
        v-for="(saleAttr, index) in cart.productAttrList"
        :key="saleAttr.id"
        class="choose_product_attrs"
      >
        <h4>{{ saleAttr.saleAttrName }}:</h4>
        <select
          class="select_style"
          id="saleAttr.saleAttrName"
          v-model="selectedAttrs[saleAttr.id]"
          @change="onSelectChange"
        >
          <option
            v-for="(saleAttrValue, option_index) in saleAttr.saleAttrValueList"
            :key="saleAttrValue.id"
            :value="saleAttrValue.saleAttrValueName"
          >
            {{ saleAttrValue.saleAttrValueName }}
          </option>
        </select>
      </ARow>

    </div>

    <footer class="content">
      <span class="qt-minus" @click="onDecrement">-</span>
      <span class="qt">{{ cart.quantity }}</span>
      <span class="qt-plus" @click="onIncrement">+</span>
      <h2 class="full-price">
        {{ cart.total_price}} €
      </h2>

      <h2 class="price">
        <p class="old-price">
          {{ cart.old_price}}
        </p>
        {{ cart.unit_price}}
      </h2>
    </footer>
  </article>
</template>

<script lang="ts" setup>
  // import {
  //   ShoppingCartOutlined
  // } from "@ant-design/icons-vue";

  import { defineComponent, computed, unref, ref, onMounted, defineProps } from "vue";
  import { Card, Row as ARow, CardMeta, Col } from "ant-design-vue";
  import { DeleteOutlined } from "@ant-design/icons-vue";
  import { deleteShopcartData, postShopcartData, reqShopcartData } from "@/api/sys/shopcart";
  import { ShopcartDetail } from "@/api/sys/model/shopcart";
  import { reqDetailData } from "@/api/sys/product";
  import { OrderItem } from "@/api/sys/model/orderModel";
  import { debounce ,throttle} from 'lodash-es';
  let selectedAttrs = ref({});
  const shopcartData = ref([]);
  const item_quantity = ref(1);
  const props = defineProps({
    cart: {
      type: Object as () => ShopcartDetail,
      required: true,
    }
  });

  const onIncrement = throttle(async () => {
    props.cart.quantity++;
    try {
      //更新数据
      await dealChangedDataAttr();
      window.console.log('increment');
    } catch (error) {}
  }, 500)
  const onDecrement = throttle(async () => {
      if(props.cart.quantity >1) {
        //整理参数:至少加入购物车的数量最低1个
        props.cart.quantity --;
        //修改商品的数据
        try {
          //更新数据
          await dealChangedDataAttr();
          window.console.log('decrement');
        } catch (error) {}
      }
    }, 500)


  function onSelectChange() {
    dealChangedDataAttr(); // 处理选择的attr
  }
  function updateChoosedAttr(){
    const attr_obj = selectedAttrs.value;
    let choosed_attr = []; // 用户选择的属性
    for (const key in attr_obj) {
      if (Object.hasOwnProperty.call(attr_obj, key)) {
        const item = attr_obj[key];
        choosed_attr.push(item);
      }
    }
    // 遍历choosed_attr 生成 attr_obj
    let saleAttrBacked = props.cart.productAttrList;
    for (const attr of choosed_attr) {
      for (const productAttr of saleAttrBacked) {
        if (productAttr.saleAttrValueList.some((attrValue) => attrValue.saleAttrValueName === attr)) {
          // set isChecked to 1 for the selected attribute value
          productAttr.saleAttrValueList.forEach((attrValue) => {
            attrValue.isChecked = attrValue.saleAttrValueName === attr ? 1 : 0;
          });
          break;
        }
      }
    }
    return saleAttrBacked;
  }
  function dealChangedDataAttr(){
    const shop_data: ShopcartDetail = {
      id: props.cart.id,
      name: props.cart.name,
      description: props.cart.description,
      unit_price: props.cart.unit_price,
      total_price: props.cart.unit_price * props.cart.quantity,
      old_price: props.cart.old_price,
      cover: props.cart.cover,
      productAttrList: updateChoosedAttr(),
      quantity: props.cart.quantity,
    };
    // window.console.log( updateChoosedAttr());
    postShopcartData(shop_data);
  }
  // 为attr设置初值
  function set_initial_attr_array(){
    const saleAttrTemp = props.cart.productAttrList;
    saleAttrTemp.forEach((saleAttr) => {
      const this_list = saleAttr.saleAttrValueList;
      const targetAttr = this_list.filter((item) => item.isChecked === 1);
      if (targetAttr.length > 0) {
        // window.console.log(targetAttr[0].saleAttrValueName);
        selectedAttrs.value[saleAttr.id] = targetAttr[0].saleAttrValueName;
      }
    });
  }

  function delete_item() {
    deleteShopcartData(props.cart.id as number);
  }
  // const saleAttrElelist = saleAttr.saleAttrValueList;
  //
  onMounted(()=>{
    set_initial_attr_array();
  })

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
    height: 75%;
    padding: 0 20px;
    width: 75%;
  }

  .product h1 {
    color: #53b5aa;
    font-size: 12px;
    font-weight: 300;
    margin: 5px 0 5px 0;
  }

  .product h1 .delete_icon {
    color: #e30943;
    font-size: 16px;
    float: right;
  }

  .product footer.content {
    height: 25%;
    margin: 4px 0 0 0;
    padding: 0;
  }

  .product footer .price {
    background: #fcfcfc;
    color: #e06b6b;
    float: right;
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    //line-height: 100%;
    height: 100%;
    margin: 0;
    padding: 0 10px;
  }
  .product footer .price .old-price {
    color: #594848;
    font-size: 8px;
    font-weight: 100;
    height: 100%;
    display: inline-flex;
    align-items: center;
    //line-height: 20px;
    margin: 0;
    text-decoration: line-through;
  }

  .product footer .full-price {
    background: #53b5aa;
    color: #fff;
    display: inline-flex;
    align-items: center;
    float: right;
    font-size: 22px;
    height: 100%;
    font-weight: 300;
    //line-height: 50%;
    margin: 0;
    padding: 0 10px;

    -webkit-transition: margin .15s linear;
    -moz-transition: margin .15s linear;
    -ms-transition: margin .15s linear;
    -o-transition: margin .15s linear;
    transition: margin .15s linear;
  }

  .qt, .qt-plus, .qt-minus {
    float: left;
    display: inline-flex;
    align-items: center;
  }




  @media screen and (min-width: 768px) {
    .qt-plus, .qt-minus {

      justify-content: center;
      text-align: center;
      background: #fcfcfc;
      border: none;
      font-size: 30px;
      font-weight: 300;
      height: 100%;
      padding: 0 20px;
      -webkit-transition: background .2s linear;
      -moz-transition: background .2s linear;
      -ms-transition: background .2s linear;
      -o-transition: background .2s linear;
      transition: background .2s linear;
    }
    .qt {
      font-size: 19px;
      height: 100%;
      justify-content: center;
      width: 70px;
      text-align: center;
    }
    .product {
      border: 1px solid #eee;
      margin: 20px 0;
      width: 100%;
      height: 200px;
      position: relative;

      -webkit-transition: margin .2s linear, opacity .2s linear;
      -moz-transition: margin .2s linear, opacity .2s linear;
      -ms-transition: margin .2s linear, opacity .2s linear;
      -o-transition: margin .2s linear, opacity .2s linear;
      transition: margin .2s linear, opacity .2s linear;
    }

  }
  @media screen and (max-width: 767px) {
    .qt-plus, .qt-minus {
      width: 20px;
      justify-content: center;
      text-align: center;
      background: #fcfcfc;
      border: none;
      font-size: 28px;
      font-weight: 300;
      height: 100%;
      -webkit-transition: background .2s linear;
      -moz-transition: background .2s linear;
      -ms-transition: background .2s linear;
      -o-transition: background .2s linear;
      transition: background .2s linear;
    }
    .qt {
      font-size: 22px;
      height: 100%;
      min-width: 40px;
      justify-content: center;
      text-align: center;
    }
    .product {
      border: 1px solid #eee;
      margin: 20px 0;
      width: 100%;
      height: 150px;
      position: relative;

      -webkit-transition: margin .2s linear, opacity .2s linear;
      -moz-transition: margin .2s linear, opacity .2s linear;
      -ms-transition: margin .2s linear, opacity .2s linear;
      -o-transition: margin .2s linear, opacity .2s linear;
      transition: margin .2s linear, opacity .2s linear;
    }

  }


  .qt-plus:hover, .qt-minus:hover {
    background: #53b5aa;
    color: #fff;
    cursor: pointer;
  }




  .btn {
    background: #53b5aa;
    border: 1px solid #999;
    border-style: none none solid none;
    cursor: pointer;
    display: block;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    padding: 16px 0;
    width: 290px;
    text-align: center;

    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -ms-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
  }

  .btn:hover {
    color: #fff;
    background: #429188;
  }

  .type {
    background: #fcfcfc;
    font-size: 13px;
    padding: 10px 16px;
    left: 100%;
  }

  .type, .color {
    border: 1px solid #ccc;
    border-style: none none solid none;
    position: absolute;
  }

  .color {
    width: 40px;
    height: 40px;
    right: -40px;
  }

  .red {
    background: #cb5a5e;
  }

  .yellow {
    background: #f1c40f;
  }

  .blue {
    background: #3598dc;
  }

  .minused {
    margin: 0 50px 0 0 !important;
  }

  .added {
    margin: 0 -50px 0 0 !important;
  }


</style>
<style lang="scss">
  .choose_product_attrs {
    &:not(:first-child) {
      margin-top: 0;
    }
    margin-bottom: 0;
    margin-top: 4px;
    display: inline-flex;
    align-items: center;
    h4 {
      min-width: 70px;
      text-align: center;
      margin-bottom: 0;
    }
    .select_style {
      height: 28px;
      border-radius: 2px 2px;
      min-width: 80px;
      option {
        text-align: center;
        font-size: 20px;
      }
    }
  }

</style>

