<template>
  <div class="detail" v-if="productInfo">
    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <ImageContainer :images="productInfo.images" />
          <!--放大镜效果-->
          <!--          <Zoom />-->
          <!-- 小图列表 -->
          <!--          <ImageList />-->
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">
              {{ productInfo.name }}
            </h3>
            <p class="description">
              {{ productInfo.description }}
            </p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title"> Price </div>
                <em class="price">
                  <span>USD</span>
                  <!--                  <div class="save-price">-->

                  <!--                    <span class="save"> </span>-->
                  <!--                    <span> </span>-->
                  <!--                  </div>-->
                  <i>¥</i>
                  <em class="old-price">{{ productInfo.old_price }}</em>
                  <em>{{ productInfo.unit_price }}</em>
                  <span class="save-price">
                    SAVE ¥
                    <span>
                      {{ productInfo.old_price - productInfo.unit_price }}
                    </span>
                  </span>
                </em>
              </div>
            </div>
            <div class="month_sales">
              <ShopOutlined class="shop-icon" />
              <i>月销量</i>
              <!--代表的是某一个数字的多少幂-->
              <em>{{ productInfo.monthSalesOut }}</em>
            </div>
          </div>
          <ARow
            v-for="(saleAttr, index) in productInfo.productAttrList"
            :key="saleAttr.id"
            class="choose_product_attrs"
          >
            <h4>{{ saleAttr.saleAttrName }}:</h4>
            <select
              class="select_style"
              id="saleAttr.saleAttrName"
              v-model="selectedAttrs[saleAttr.id]"
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

          <ARow class="choose">
<!--            <h4 style="margin-top: 8px"> Numbers: </h4>-->
            <div class="cartWrap">
              <div class="controls">
                <a href="javascript:" class="mins" @click="item_quantity > 1 ? item_quantity-- : 1">-</a>
                <div class="itxt">
                  <input autocomplete="off" v-model="item_quantity" @change="handler" />
                </div>
                <a href="javascript:" class="plus" @click="item_quantity++">+</a>
              </div>
            </div>
          </ARow>
          <div class="receive-time">
            <ClockCircleOutlined />
            <span>Earlier to buy, earlier to get</span>
          </div>
          <div class="addcart">
            <a @click="addOrUpdateCart" id="_addCartButton">加入购物车</a>
          </div>
          <div class="nowbuy">
            <a @click="addOrUpdateCart">立即购买</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Recommend :salescard-list="SalesCardList"> </Recommend>
</template>

<script lang="ts" setup>
  // import ImageList from '@/views/detail/ImageList/ImageList.vue';
  // import Zoom from '@/views/detail/Zoom/Zoom.vue';
  import ImageContainer from '@/views/detail/ImageContainer/index.vue';
  import { ref, reactive, onMounted } from 'vue';
  import { ClockCircleOutlined, ShopOutlined } from '@ant-design/icons-vue';
  import { add_to_cart } from '/@/utils/animation/addcart.js';
  import { Row as ARow } from 'ant-design-vue';
  import { reqDetailData } from "@/api/sys/product";
  import { ProductDetail } from "@/api/sys/model/product";
  import Recommend from "@/views/detail/recommend/recommend.vue";
  import { SalesCardList } from '@/views/dashboard/analysis/data';
  import { ShopcartDetail } from "@/api/sys/model/shopcart";
  import { postShopcartData } from "@/api/sys/shopcart";

  let item_quantity = ref(1);
  const addCartButton = ref(null);
  let productInfo = ref<ProductDetail | null>(null);

  let selectedAttrs = ref({}); // ref(Array(spuSaleAttrList.length).fill(1).map((item, index) => index))

  function changeChecked(saleAttrValue: any, arr: any) {
    window.console.log(saleAttrValue);
    //响应式数据:对象、数组
    //数组的响应式数据:变更、替换【基本类型数据、引用类型对象响应式的】
    //数组里面是基本类型数据：替换、变更    如果对象，不管你怎么玩都是相应的!!!!
    //排他操作
    //底下的代码:修改数组里面的对象【相应的式的】,数据变化视图跟这变化！！！
    arr.forEach((item) => {
      item.isChecked = '0';
    });
    saleAttrValue.isChecked = '1';
  }
  //数量的表单元素的change回调
  function handler(e: any) {
    //通过event事件对象获取用户输入内容[用户输入的内容一定是字符串类型的数据]
    let value = e.target.value * 1;
    //用户输入进来非法情况判断
    if (isNaN(value) || value < 1) {
      item_quantity.value = 1;
    } else {
      //正常情况
      item_quantity.value = parseInt(value);
    }
  }

  //加入购物车按钮
  function addOrUpdateCart() {
    //页面动作
    const buttonElement = document.getElementById('_addCartButton');
    add_to_cart(buttonElement, 1);
    sendAddCartData();

  }
  //获取 attr 的 结果
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
    let saleAttrBacked = productInfo.productAttrList;
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
  function sendAddCartData(){
    const shop_data: ShopcartDetail = {
      id: productInfo.id,
      name:productInfo.name,
      description:productInfo.description,
      unit_price:productInfo.unit_price,
      total_price:productInfo.unit_price * item_quantity.value,
      old_price:productInfo.old_price,
      cover:productInfo.cover,
      productAttrList:updateChoosedAttr(),
      quantity: item_quantity.value,
    };
    postShopcartData(shop_data);  // post 数据加入到购物车
  }
  // 为attr设置初值
  function set_initial_attr_array(){
    const saleAttrTemp = productInfo.productAttrList;
    saleAttrTemp.forEach((saleAttr) => {
      const this_list = saleAttr.saleAttrValueList;
      const targetAttr = this_list.filter((item) => item.isChecked === 1);
      if (targetAttr.length > 0) {
        window.console.log(targetAttr[0].saleAttrValueName);
        selectedAttrs.value[saleAttr.id] = targetAttr[0].saleAttrValueName;
      }
    });
  }

  // const saleAttrElelist = saleAttr.saleAttrValueList;
  //

  onMounted(() => {
    productInfo = reqDetailData(1);
    set_initial_attr_array();
  });
</script>

<style lang="less" scoped>
  @section-title-color: black;
  @black-color: black;
  h4 {
    text-transform: uppercase;
    color: @section-title-color;
    font-style: italic;
    font-size: 16px;
    margin-bottom: 8px;
  }
  .detail {
    .con {
      width: 95%;
      margin: 10px 10px;
      .mainCon {
        // 根据屏幕宽度动态调整每行显示的卡片数量
        @media only screen and (max-width: 767px) {
          .previewWrap {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }
          .InfoWrap {
            width: 100%;
          }
        }
        @media only screen and (min-width: 768px) {
          .previewWrap {
            float: left;
            width: 50%;
            position: relative;

            &::after {
              content: '';
              display: block;
              padding-bottom: 30px;
            }
          }

          .InfoWrap {
            float: right;
            width: 45%;
            height: 100%;
          }
        }
        .InfoWrap {
          .InfoName {
            font-size: 22px;
            line-height: 32px;
            margin-top: 10px;
          }

          .description {
            padding-left: 10px;
            color: #e12228;
            margin-top: 15px;
            background: #dcdad1;
            border-radius: 1px 1px;
          }

          .priceArea {
            padding: 7px;
            margin: 10px 0;

            .priceArea1 {
              overflow: hidden;
              line-height: 28px;
              margin: 0 0;

              .title {
                float: left;
                margin-right: 15px;
              }

              .price {
                float: left;
                color: #c81623;

                i {
                  font-size: 16px;
                }

                em {
                  font-size: 24px;

                  //font-weight: 700;
                }
                .old-price {
                  color: #858585;
                  font-size: 15px;
                  text-decoration: line-through;
                }
                .save-price {
                  display: inline-flex;
                  margin-left: 20px;
                  border-radius: 2px 2px;
                  background: #f6979e;
                  padding-left: 10px;
                  color: white;
                  align-content: center;
                  text-align: center;
                  font-style: italic;
                  font-size: 12px;

                  span {
                    font-weight: bold;
                    width: 60px;
                    color: red;
                    align-content: center;
                    font-size: 20px;

                  }
                  //padding: 3px;
                  //span{
                  //  font-size: 10px !important;
                  //  color: white;
                  //  align-content: center;
                  //}
                }
              }
            }

            .priceArea2 {
              overflow: hidden;
              line-height: 28px;
              margin-top: 10px;

              .title {
                margin-right: 15px;
                float: left;
              }
            }
          }
          .month_sales {
            background: #f8f0bb;
            border-radius: 1px 1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            .shop-icon {
              margin-left: 10px;
              font-size: 26px;
            }
            i {
              font-style: normal;
              margin-left: 10px;
            }
            em {
              margin-left: 10px;
              font-style: normal;
            }
          }

          .choose_product_attrs {
            margin-bottom: 0;
            margin-top: 10px;
            display: inline-flex;
            width: 80%;
            h4 {
              min-width: 70px;
              text-align: center;
            }
            .select_style {
              height: 30px;
              border-radius: 2px 2px;
              min-width: 100px;
              option {
                text-align: center;
                font-size: 20px;
              }
            }
          }
          .choose {
            display: inline-flex;
            float: right;
            height: 35px;
            h4 {
              font-size: 16px;
            }
            .chooseArea {
              overflow: hidden;
            }
            .cartWrap {
              display: flex;
              align-items: center;
              .controls {

                //margin-top: 10px;
                //margin-bottom: 10px;
                border: 1px solid #ddd;
                display: flex;
                justify-content: space-between;
                height: 100%;
                .itxt {
                  align-items: center;
                  width: 60px;
                  //border: 1px solid #ddd;
                  color: #555;
                  text-align: center;
                  //font-size: 30px;
                  input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;

                  }
                }
                .plus,
                .mins {
                  width: 30px;
                  height: 100%;
                  color: #666;
                  cursor: pointer;
                  display: flex;
                  font-size: 24px;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                }
              }
            }
          }
          .receive-time {
            width: 100%;
            margin-top: 10px;
            background: #fcf3d2;
            border-radius: 1px 1px;
            font-size: 18px;
            font-style: italic;
            text-align: center;
            //align-items: center;
            line-height: 18px;
            display: inline-flex;
            span {
              margin-left: 20px;
            }
          }
          .addcart {
            margin: 20px 20px;
            text-align: center;

            a {
              background-color: #e1251b;
              padding: 0 25px;
              font-size: 16px;
              color: #fff;
              height: 36px;
              line-height: 36px;
              display: block;
            }
          }
          .nowbuy {
            margin: 20px 20px;
            text-align: center;

            a {
              background-color: #e36c66;
              padding: 0 25px;
              font-size: 16px;
              color: #fff;
              height: 36px;
              line-height: 36px;
              display: block;
            }
          }
        }
      }
    }
  }
</style>
