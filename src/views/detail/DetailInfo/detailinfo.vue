<template>
  <div class="col-lg-6 col-md-6">
    <div class="product-details-content">
      <!--      <h3>{{name}}</h3>-->
      <h3>Tshirt</h3>

      <div class="price">
        <!--        <span class="new-price">${{price}}</span>-->
        <span class="old-price">120</span>
        <span class="new-price">100</span>
      </div>

      <div class="product-review">
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a href="#" class="rating-count">3 reviews</a>
      </div>

      <ul class="product-info">
        <li><span>Vendor:</span> <a href="#">Lereve</a></li>
        <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
        <li><span>Product Type:</span> <a href="#">T-Shirt</a></li>
      </ul>
      <div class="product-color-switch">
        <h4>Color:</h4>

        <ul>
          <li><a href="#" title="Black" class="color-black"></a></li>
          <li><a href="#" title="White" class="color-white"></a></li>
          <li class="active"><a href="#" title="Green" class="color-green"></a></li>
          <li><a href="#" title="Yellow Green" class="color-yellowgreen"></a></li>
          <li><a href="#" title="Teal" class="color-teal"></a></li>
        </ul>
      </div>

      <div class="product-size-wrapper">
        <h4>Size:</h4>
        <ul>
          <li><a href="#">XS</a></li>
          <li class="active"><a href="#">S</a></li>
          <li><a href="#">M</a></li>
          <li><a href="#">XL</a></li>
          <li><a href="#">XXL</a></li>
        </ul>
      </div>
      <div class="product-add-to-cart">
        <div class="input-counter">
          <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
          <!--            {{quantity}}-->
          10
          <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
        </div>
        <button type="submit" class="btn btn-primary" @click="addToCart()">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>

      <div class="wishlist-compare-btn">
        <a href="#" class="btn btn-light"><i class="far fa-heart"></i> Add to Wishlist</a>
        <a href="#" class="btn btn-light"><i class="fas fa-balance-scale"></i> Add to Compare</a>
      </div>

      <div class="buy-checkbox-btn">
        <div class="item">
          <input class="inp-cbx" id="cbx" type="checkbox">
          <label class="cbx" for="cbx">
            <span>
              <svg width="12px" height="10px" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"/>
              </svg>
            </span>
            <span>I agree with the terms and conditions</span>
          </label>
        </div>

        <div class="item">
          <a href="#" class="btn btn-primary">Buy it now!</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
// import { ProductInfo, ShopcartItem } from "/@/api/sys/model/product";

export default defineComponent({
  name: 'DetailInfo',
  // props: {
  //   item: {
  //     type: ProductInfo,
  //     required: true,
  //   },
  // },
  computed: {
    cart() {
      window.console.log('get cart');
      // return this.$store.getters.cart
    }
  },
  methods: {
    addToCart(){
      // const product = ref(ShopcartItem)
      window.console.log('add to cart');
    },
    increaseQuantity(){
      window.console.log('increaseQuantity');
    },
    decreaseQuantity() {
      window.console.log('decreaseQuantity');
    },
  }
});
</script>

<style lang="scss">
$font-family: 'Archivo', sans-serif;
$font-size: 14px;
$paragraph-color: #666666;
$black-color: #222222;
$white-color: #ffffff;
$transition: .5s;
.product-details-content {
  h3 {
    font-size: 22px;
    margin-bottom: 8px;

    a {
      color: $black-color;

      &:hover {
        color: $black-color;
      }
    }
  }

  p {
    margin-bottom: 0;
  }

  .price {
    margin-bottom: 5px;

    span {
      display: inline-block;
      font-size: 18px;
      color: $black-color;
    }
    .old-price {
      color: #858585;
      font-size: 15px;
      text-decoration: line-through;
    }
  }

  .product-review {
    margin-bottom: 12px;

    .rating {
      display: inline-block;
      padding-right: 5px;

      i {
        color: #ffba0a;
      }
    }

    .rating-count {
      display: inline-block;
      color: $black-color;
      border-bottom: 1px solid $black-color;
      line-height: initial;
    }
  }

  .product-info {
    list-style-type: none;
    padding: 0;
    margin: {
      top: 15px;
      bottom: 0;
    }

    li {
      font-size: 16px;
      color: $black-color;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      span {
        color: $paragraph-color;
      }

      a {
        display: inline-block;
        font-weight: 500;
        color: $black-color;

        &:hover {
          color: $black-color;
        }
      }
    }
  }

  .wishlist-compare-btn {
    margin-top: 20px;

    .btn {
      i {
        margin-right: 3px;
      }

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  .product-color-switch {
    margin-top: 8px;

    h4 {
      font-size: 16px;
      color: $paragraph-color;
      margin-bottom: 6px;
    }

    ul {
      list-style-type: none;
      margin: {
        bottom: 0;
        top: -4px;
        left: -4px;
      }
      padding: {
        left: 0;
      }

      li {
        display: inline-block;
        margin: {
          left: 4px;
          top: 4px;
        }

        a {
          display: inline-block;
          position: relative;
          border: 1px solid transparent;
          width: 25px;
          height: 25px;
          border-radius: 50%;

          &::before {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #eeeeee;
            border-radius: 50%;
            margin: 2px;
            transition: $transition;
          }

          &:hover, &:focus {
            border-color: $black-color;
          }

          &.color-white {
            &::before {
              background: $white-color;
              border: 1px solid #eeeeee;
            }
          }

          &.color-black {
            &::before {
              background: $black-color;
            }
          }

          &.color-red {
            &::before {
              background: red;
            }
          }

          &.color-blue {
            &::before {
              background: blue;
            }
          }

          &.color-green {
            &::before {
              background: green;
            }
          }

          &.color-yellow {
            &::before {
              background: yellow;
            }
          }

          &.color-yellowgreen {
            &::before {
              background: yellowgreen;
            }
          }

          &.color-pink {
            &::before {
              background: pink;
            }
          }

          &.color-violet {
            &::before {
              background: violet;
            }
          }

          &.color-teal {
            &::before {
              background: teal;
            }
          }

          &.color-plum {
            &::before {
              background: plum;
            }
          }

          &.color-lime {
            &::before {
              background: lime;
            }
          }

          &.color-blueviolet {
            &::before {
              background: blueviolet;
            }
          }
        }

        &.active {
          a {
            border-color: $black-color;
          }
        }
      }
    }
  }

  .product-size-wrapper {
    margin: {
      top: 8px;
      bottom: 25px;
    }

    h4 {
      font-size: 16px;
      color: $paragraph-color;
      margin-bottom: 8px;
    }

    ul {
      list-style-type: none;
      margin: {
        bottom: 0;
        top: -8px;
        left: -8px;
      }
      padding: {
        left: 0;
      }

      li {
        display: inline-block;
        margin: {
          left: 8px;
          top: 8px;
        }

        a {
          width: 40px;
          height: 35px;
          display: inline-block;
          line-height: 35px;
          border: 1px solid #eeeeee;
          color: #858585;
          text-align: center;

          &:hover, &:focus {
            border-color: $black-color;
            color: $black-color;
          }
        }

        &.active {
          a {
            border-color: $black-color;
            color: $black-color;
          }
        }
      }
    }
  }

  .product-add-to-cart {
    .input-counter {
      max-width: 130px;
      min-width: 130px;
      margin-right: 10px;
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

    .btn {
      height: 45px;
      top: -2px;
      position: relative;

      i {
        margin-right: 2px;
      }
    }
  }

  .product-info-btn {
    margin-bottom: 25px;

    a {
      color: $paragraph-color;
      text-transform: uppercase;
      font-weight: 600;
      display: inline-block;
      position: relative;
      line-height: initial;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 1.5px;
        background: $black-color;
        transition: $transition;
      }

      i {
        color: $black-color;
        margin-right: 3px;
        font-size: 15px;
      }

      &:hover {
        color: $black-color;

        &::before {
          width: 100%;
        }
      }

      &:not(:first-child) {
        margin-left: 15px;
      }
    }
  }

  .buy-checkbox-btn {
    margin-top: 25px;

    input {
      display: none;
    }

    .cbx {
      margin: auto;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;

      span {
        display: inline-block;
        vertical-align: middle;
        transform: translate3d(0, 0, 0);

        &:first-child {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 3px;
          transform: scale(1);
          vertical-align: middle;
          border: 1px solid #ebebeb;
          transition: all 0.2s ease;
          transition: $transition;

          svg {
            position: absolute;
            top: 3px;
            left: 2px;
            fill: none;
            stroke: $white-color;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 16px;
            stroke-dashoffset: 16px;
            transition: all 0.3s ease;
            transition-delay: 0.1s;
            transform: translate3d(0, 0, 0);
            transition: $transition;
          }

          &:before {
            content: "";
            width: 100%;
            height: 100%;
            background: $black-color;
            display: block;
            transform: scale(0);
            opacity: 1;
            border-radius: 50%;
            transition: $transition;
          }
        }

        &:last-child {
          padding-left: 4px;
          color: $paragraph-color;
        }
      }

      &:hover {
        span {
          &:first-child {
            border-color: $black-color;
          }
        }
      }
    }

    .inp-cbx:checked + .cbx span:first-child {
      background: $black-color;
      border-color: $black-color;
      animation: wave 0.4s ease;
    }

    .inp-cbx:checked + .cbx span:first-child svg {
      stroke-dashoffset: 0;
    }

    .inp-cbx:checked + .cbx span:first-child:before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }

    .item {
      &:not(:first-child) {
        margin-top: 15px;
      }
    }

    .btn {
      display: block;
    }
  }

  .custom-payment-options {
    margin-top: 20px;

    span {
      display: block;
      color: $paragraph-color;
      margin-bottom: 5px;
    }

    .payment-methods {
      a {
        display: inline-block;

        img {
          width: 40px;
        }
      }
    }
  }
}
</style>
