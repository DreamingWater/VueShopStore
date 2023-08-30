<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><a to="/">Home</a></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Checkout Area -->
    <section class="checkout-area ptb-60">
      <div class="container">
        <form>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="billing-details">
                <h3 class="title">Billing Details</h3>

                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>Full Name <span class="required">*</span></label>
                      <input type="text" id="fullName" v-model="personDetails.fullName" class="form-control">
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>Address <span class="required">*</span></label>
                      <input type="text" id="address" v-model="personDetails.address" class="form-control">
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>Town / City <span class="required">*</span></label>
                      <input type="text" id="city" v-model="personDetails.city" class="form-control">
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Email Address <span class="required">*</span></label>
                      <input type="email" id="email" v-model="personDetails.email" class="form-control">
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Phone <span class="required">*</span></label>
                      <input type="text" id="phone" v-model="personDetails.phone" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="order-details">
                <h3 class="title">Your Order</h3>

                <div class="order-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Total</th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr v-for="(cart, i) in cart" :key="i">
                      <td class="product-name">
                        <a href="#">{{cart.name}}</a>
                      </td>

                      <td class="product-total">
                        <span class="subtotal-amount">${{cart.price * cart.quantity}}</span>
                      </td>
                    </tr>

                    <tr>
                      <td class="order-subtotal">
                        <span>Cart Subtotal</span>
                      </td>

                      <td class="order-subtotal-price">
                        <span class="order-subtotal-amount">${{cartTotal}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="order-shipping">
                        <span>Shipping</span>
                      </td>

                      <td class="shipping-price">
                        <span>$10.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="total-price">
                        <span>Order Total</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">${{parseFloat(cartTotal + 10).toFixed(2)}}</span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <a href="javascript:void(0)" @click="add" class="btn btn-primary order-btn">Place Order</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- End Checkout Area -->
  </div>
</template>

<script >
  import { defineComponent, computed, unref } from 'vue';
  import { Card, Row, CardMeta, Col } from "ant-design-vue";


  export default defineComponent({
    // props: {
    //   cart: {
    //   type: [Object],
    //   required: true,
    //   },
    // },
    data() {
      return {
        personDetails: {
          fullName: 'John Doe',
          address: 'Town hall, av 02',
          city: 'New York',
          email: 'john@gmail.com',
          phone: '+990198378372',
          createdAt: new Date()
        }
      }
    },
    computed: {
      cart() {
        // console.log('cart');
        // console.log(this.$store.getters.cart);
        // return this.$store.getters.cart
        const product = [{
            id: 0,
            name: 'hello world',
            price: 10,
            image: 'https://th.bing.com/th?id=OSK.1bccade414847de73e297d42c59a8ec9&w=80&h=80&c=7&o=6&dpr=1.3&pid=SANGAM',
            quantity: 3
        },
          {
            id: 1,
            name: 'hello world1',
            price: 20,
            image: 'https://th.bing.com/th?id=OSK.1bccade414847de73e297d42c59a8ec9&w=80&h=80&c=7&o=6&dpr=1.3&pid=SANGAM',
            quantity: 2
          }]
        return product

      },
      cartTotal(){
        window.console.log('cartTotal');
        // console.log(this.$store.getters.totalAmount);

        // return this.$store.getters.totalAmount
        return 100;
      }
    },
    methods: {
      add(){
        window.console.log('add');
        // const cartData = {
        //   details: this.personDetails,
        //   items: this.cart
        // }
        // const db = firebase.firestore();
        // const dbOrderRef = db.collection('orders');
        // dbOrderRef.add(cartData);
        // this.$toast.success(`Thanks for the order`, {
        //   icon: 'fas fa-cart-plus'
        // });
        // this.$store.dispatch('cartEmpty')
        // this.$router.push("/");
      }
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
  .user-actions {
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    background: $white-color;
    padding: 18px 25px 15px;
    margin-bottom: 35px;
    border-top: 3px solid $black-color;

    span {
      display: inline-block;
      font-weight: 600;
      color: $black-color;

      i {
        color: $black-color;
        margin-right: 3px;
      }
      a {
        font-weight: 500;
        display: inline-block;
        color: $paragraph-color;

        &:hover, &:focus {
          color: $black-color;
        }
      }
    }
  }
  .checkout-area {
    .title {
      font: {
        size: 18px;
      }
      margin-bottom: 25px;
    }
  }
  .billing-details {
    .form-group {
      label {
        display: block;
        color: $black-color;
        margin-bottom: 8px;
        font: {
          size: 14px;
        }
        .required {
          color: red;
        }
      }
      .select-box {
        .nice-select {
          line-height: 45px;
          float: unset;
          font-size: 13px;

          .current {
            color: $paragraph-color;
          }
          .list {
            margin: 0;
            border-radius: 0;
            border: none;
            background-color: $white-color;
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

            .option {
              line-height: 35px;
              min-height: 30px;
            }
          }
        }
      }
      .form-control {
        background: transparent;
        border: 1px solid #eeeeee;

        &:focus {
          border-color: $black-color;
        }
      }
      textarea {
        padding-top: 15px;
      }
    }
    .form-check {
      margin-bottom: 15px;

      .form-check-label {
        color: $paragraph-color;
      }
      label {
        font: {
          size: 14px;
          weight: 400;
        }
      }
    }
  }
  .order-details {
    .order-table {
      table {
        margin-bottom: 0;
        text-align: left;

        thead {
          tr {
            th {
              border-bottom-width: 0;
              vertical-align: middle;
              border-color: #eaedff;
              text-transform: uppercase;
              padding: 15px .75rem;
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
              border-color: #eaedff;
              font-size: 14px;

              &.product-name {
                a {
                  color: $paragraph-color;
                  display: inline-block;
                  font: {
                    size: 15px;
                  }
                  &:hover {
                    color: $black-color;
                  }
                }
              }
              &.order-subtotal, &.order-shipping , &.total-price {
                span {
                  color: $black-color;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
    .payment-method {
      margin-top: 40px;
      border-top: 1px solid #eaedff;
      padding-top: 35px;

      p {
        font: {
          size: 14px;
        }
        [type="radio"] {
          &:checked, &:not(:checked) {
            display: none;
          }
        }
        [type="radio"] {
          &:checked, &:not(:checked) {
            + label {
              padding-left: 27px;
              cursor: pointer;
              display: block;
              font: {
                weight: 600;
              }
              color: $black-color;
              position: relative;
              margin-bottom: 8px;

              &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 4px;
                width: 18px;
                height: 18px;
                border: 1px solid #dddddd;
                border-radius: 50%;
                background: $white-color;
              }
              &::after {
                content: '';
                width: 12px;
                height: 12px;
                background: $black-color;
                position: absolute;
                top: 7px;
                left: 3px;
                border-radius: 50%;
                transition: $transition;
              }
            }
          }
        }
        [type="radio"] {
          &:not(:checked) {
            + label {
              &::after {
                opacity: 0;
                visibility: hidden;
                transform: scale(0);
              }
            }
          }
        }
        [type="radio"] {
          &:checked {
            + label {
              &::after {
                opacity: 1;
                visibility: visible;
                transform: scale(1);
              }
            }
          }
        }
      }
    }
    .btn {
      &.order-btn {
        display: block;
        margin-top: 25px;
      }
    }
  }
  .page-title-area {
    background-color: #f8f8f8;
    padding: {
      top: 12px;
      bottom: 12px;
    }
    ul {
      padding-left: 0;
      list-style-type: none;
      margin-bottom: 0;

      li {
        display: inline-block;
        margin-right: 15px;
        position: relative;
        color: $paragraph-color;
        font-size: 13px;

        a {
          color: $paragraph-color;
          font-size: 13px;

          &:hover, &:focus {
            color: $black-color;
          }
        }
        &::before {
          content: '/';
          position: absolute;
          display: inline-block;
          left: -10px;
          top: 0;
        }
        &:first-child {
          &::before {
            display: none;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  .ptb-60 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .pb-60 {
    padding-bottom: 60px;
  }
</style>
