<template xmlns="http://www.w3.org/1999/html">
  <!-- Start Cart Area -->

  <div class="cart-table table-responsive">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody v-if="cart.length > 0">
      <tr v-for="(cart, i) in cart" :key="i">
        <td class="product-thumbnail">
          <a href="#">
            <img :src="cart.image" :alt="cart.name" />
          </a>
        </td>
        <td class="product-name">
          <a :to="`/products-details/${cart.id}`">
            {{cart.name}}
          </a>
          <ul>
            <li>Unit: <strong>10</strong></li>
            <li>规格 <strong>红色</strong></li>
            <li>Material: <strong>Cotton</strong></li>
          </ul>
        </td>

      </tr>

      </tbody>
    </table>
  </div>
  <div class="cart-buttons">
    <div class="row">
      <div class="col-lg-7 col-md-7">
        <div class="continue-shopping-box">
          <a to="/products" class="btn btn-light">Continue Shopping</a>
        </div>
      </div>

      <div class="col-lg-5 col-md-5 text-right">
        <div class="cart-totals">
          <h3>Cart Totals</h3>

          <ul>
            <li>Subtotal <span>100</span></li>
            <li>Shipping <span>$10.00</span></li>
            <li>Total <span><b>${{parseFloat(10.2 + 10).toFixed(2)}}</b></span></li>
          </ul>
          <a to="/checkout" class="btn btn-light">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Cart Area -->
</template>

<script>
import { defineComponent } from "vue";
import { Card, CardMeta, Row,Col } from "ant-design-vue";
import { ShoppingCartOutlined,DeleteOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: 'SalesCard',
  components:{
    DeleteOutlined,
    Row,
    Col,
  },
  computed: {
    cart(){
      return [{
        id: 1,
        quantity: 1,
        price: 10,
        name: 'helo',
        image:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      }]
      // return this.$store.getters.cart
    },
    // cartTotal(){
    //   return this.$store.getters.totalAmount
    // }
  },
  methods: {
    removeItemFromCart(id){
      window.console.log('remove'+id.toLocaleString());
      // this.$store.dispatch('deleteCart', id)
    },
    onIncrement(id){
      window.console.log('increment'+id.toLocaleString());
      // this.$store.dispatch('updateCart', {
      //   id,
      //   unit: 1,
      //   cart: this.cart
      // })
    },
    onDecrement(id, quantity){
      window.console.log('decrement'+id.toLocaleString());
      // if (quantity > 1) {
      //   this.$store.dispatch('updateCart', {
      //     id,
      //     unit: -1,
      //     cart: this.cart
      //   })
      // } else {
      //   this.removeItemFromCart(id);
      //   this.$toast.warning("Item deleted!");
      // }
    },
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap');
$font-family: 'Archivo', sans-serif;
$font-size: 14px;
$paragraph-color: #666666;
$black-color: #222222;
$white-color: #ffffff;
$transition: .5s;
.cart-table {
  table {
    margin-bottom: 0;

    thead {
      tr {
        th {
          border-bottom-width: 0px;
          vertical-align: middle;
          padding: 15px 0;
          text-transform: uppercase;
          border: none;
          font: {
            weight: 600;
            size: 15px;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          color: $paragraph-color;
          padding: {
            left: 0;
            right: 0;
          }
          border: {
            color: #eaedff;
            left: none;
            right: none;
          }
          &.product-thumbnail {
            a {
              display: block;

              img {
                width: 100px;
              }
            }
          }
          &.product-name {
            a {
              color: $paragraph-color;
              font-weight: 600;
              display: inline-block;
              font-size: 15px;

              &:hover {
                color: $black-color;
              }
            }
            ul {
              padding-left: 0;
              margin-top: 10px;
              margin-bottom: 0;
              list-style-type: none;

              li {
                color: #858585;
                font-size: 12px;
                margin-bottom: 5px;

                &:last-child {
                  margin-bottom: 0;
                }
                strong {
                  font-weight: 600;
                }
              }
            }
          }
          &.product-price {
            span {
              font-weight: 600;
            }
          }
          &.product-subtotal {
            .remove {
              color: red;
              float: right;
              position: relative;
              top: -1px;
            }
          }
          &.product-quantity {
            .input-counter {
              max-width: 130px;
              min-width: 130px;
              text-align: center;
              display: inline-block;
              position: relative;
              border: 1px solid #eeeeee;
              padding-top: 11px;
              padding-bottom: 10px;
              top: -1px;

              span {
                position: absolute;
                top: 0;
                background-color: transparent;
                cursor: pointer;
                color: #d0d0d0;
                width: 40px;
                height: 100%;
                line-height: 48px;
                display: block;
                transition: $transition;

                &.minus-btn {
                  left: 0;
                }
                &.plus-btn {
                  right: 0;
                }
                &:hover {
                  color: $black-color;
                }
              }
              input {
                height: 45px;
                color: $black-color;
                outline: 0;
                display: block;
                border: none;
                background-color: #f8f8f8;
                text-align: center;
                width: 100%;
                font: {
                  size: 17px;
                  weight: 600;
                }
                &::placeholder {
                  color: $black-color;
                }
              }
            }
          }
          &.product-subtotal {
            overflow: hidden;

            span {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
.cart-buttons {
  margin-top: 30px;
}
.cart-totals {
  text-align: left;
  background: $white-color;
  padding: 40px;
  max-width: 600px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin: 0 auto;

  h3 {
    margin-bottom: 20px;
    font: {
      size: 19px;
    }
  }
  ul {
    padding: 0;
    margin: 0 0 25px;
    list-style-type: none;

    li {
      border: 1px solid #eaedff;
      padding: 10px 15px;
      color: $black-color;
      font-weight: 600;
      overflow: hidden;

      &:first-child {
        border: {
          bottom: none;
        }
      }
      &:last-child {
        border: {
          top: none;
        }
      }
      span {
        float: right;
        color: $paragraph-color;
        font-weight: normal;

        b {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
