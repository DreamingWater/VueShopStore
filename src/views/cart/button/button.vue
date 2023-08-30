
<template>

  <div class="cart-totals-wraper">
    <div class="cart-totals">
      <h3>Cart Totals</h3>
      <span><b>${{parseFloat(10.2 + 10).toFixed(2)}}</b></span>

      <!--    <a to="/checkout" class="btn btn-light check_btn">Proceed to Checkout</a>-->
    </div>
  </div>



  <div class="cart-button">
    <div class="button_group">
      <div class="check_btn_wrapper">
        <a to="/checkout" class="btn btn-check check_btn"><PropertySafetyOutlined />Check Out</a>
      </div>
      <div>
        <a to="/products" class="btn btn-shop shop_btn"><GiftOutlined />Continue Shopping</a>
      </div>
    </div>
  </div>

</template>

<script>
import { GiftOutlined, PropertySafetyOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
// import { Row } from "ant-design-vue";
export default defineComponent({
  name: 'CartButton',
  components: {
    PropertySafetyOutlined,
    GiftOutlined,
  }
})
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap');
  $font-family: 'Archivo', sans-serif;
  $font-size: 14px;
  $paragraph-color: #666666;
  $black-color: #222222;
  $white-color: #ffffff;
  $transition: .5s;
  .cart-totals-wraper {
    content: "";
    display: table;
    clear: both;
    width: 100%;
  }


  .cart-totals {
    margin-bottom: 10px;
    display: inline-flex;
    //justify-content: space-between;
    //text-align: center;
    float: right;
    //position: relative;
    //line-height: 32px;
    align-items: center;
    //background: $white-color;
    //padding: 20px;
    //max-width: 600px;
    //box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    //border-radius: 5px;
    //margin: 0 auto;

    h3 {
      display: inline-flex;
      //
      font-size: 19px;
      align-items: center;
      //display: inline-block;
    }

    span {
      margin-left: 5px;
      display: inline-flex;
      color: red;
      font-size: 16px;
      align-items: center;
      //display: inline-block;
    }

    //.check_btn_wrapper {
    //  text-align: center;
    //}


  }
  //.button_group {
  //  border: 1px 1px solid;
  //  border-radius: 1px 1px;
  //  background: #fffffa;
  //  .check_btn {
  //    width: 80%;
  //    background: #efbd8a;
  //    justify-content: center;
  //    //margin: 20px auto 0;
  //  }
  //  .shop_btn {
  //    justify-content: center;
  //    width: 80%;
  //    background: #f89edb;
  //    margin-top: 10px;
  //    display: inline-flex;
  //    align-items: center;
  //    text-align: center;
  //  }
  //}





  .cart-button {
    float: right;
    background: $white-color;
    padding: 10px;
    min-width: 300px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    margin: 0 auto;

    .check_btn {
      float: right;
      align-items: center;
      justify-content: center;
      width: 80%;
      background: #efbd8a;
      display: inline-flex;
      text-align: center;
      border-radius: 2px 2px;
      //margin: 20px auto 0;
    }
    .shop_btn {
      float: right;
      align-items: center;
      justify-content: center;
      width: 80%;
      background: #f89edb;
      margin-top: 10px;
      display: inline-flex;
      text-align: center;
      border-radius: 2px 2px;
    }
    ::v-deep svg {
      height: 1.5em;
      width: 1.5em;
      margin-right: 5px;
    }

    .btn {
      border: 1px solid transparent;
      padding: 11px 25px;
      line-height: initial;
      border-radius: 0;
      transition: $transition;
      text-transform: uppercase;
      font: {
        weight: 400;
        size: $font-size;
      }
      &.disabled, &:disabled {
        opacity: 1;
      }
    }
    .btn-check {
      background-color: transparent;
      color: #f89edb;
      border-color: #f89edb;

      &.disabled, &:disabled {
        background-color: transparent;
        color: $black-color;
        border-color: $black-color;
      }
      &:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active, .show>&.dropdown-toggle {
        box-shadow: unset;
        color: $white-color;
        background-color: $black-color;
        border-color: $black-color;
      }
      &:not(:disabled):not(.disabled).active:focus, &:not(:disabled):not(.disabled):active:focus, .show>&.dropdown-toggle:focus {
        box-shadow: unset;
      }
      &:hover, &:focus {
        box-shadow: unset;
        color: $white-color;
        background-color: $black-color;
        border-color: $black-color;
      }
    }
    .btn-shop {
      background-color: transparent;
      color: #efbd8a;
      border-color: #efbd8a;

      &.disabled, &:disabled {
        background-color: transparent;
        color: $black-color;
        border-color: $black-color;
      }
      &:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active, .show>&.dropdown-toggle {
        box-shadow: unset;
        color: $white-color;
        background-color: $black-color;
        border-color: $black-color;
      }
      &:not(:disabled):not(.disabled).active:focus, &:not(:disabled):not(.disabled):active:focus, .show>&.dropdown-toggle:focus {
        box-shadow: unset;
      }
      &:hover, &:focus {
        box-shadow: unset;
        color: $white-color;
        background-color: $black-color;
        border-color: $black-color;
      }
    }

  }

</style>
