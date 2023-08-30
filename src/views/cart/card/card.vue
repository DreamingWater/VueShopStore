<template>
  <section v-for="(cart, i) in cart" :key="i" class="item-section">
    <div class="image-section">
      <a href="#">
        <img :src="cart.image" :alt="cart.name" />
      </a>
    </div>
    <div class="text-section">
      <a to="`/products-details/${cart.id}`" class="item-name">
        {{cart.name}}
      </a>
      <ul>
        <li>Unit: <strong>10</strong></li>
        <li>规格 <strong>红色</strong></li>
        <li>Material: <strong>Cotton</strong></li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
// import {
//   ShoppingCartOutlined
// } from "@ant-design/icons-vue";

import { defineComponent, computed, unref } from 'vue';
import { Card, Row, CardMeta, Col } from "ant-design-vue";


export default defineComponent({
  props: {
    cart: {
      type: [Object],
      required: true,
    },
  },
});
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap');
  $font-family: 'Archivo', sans-serif;
  $font-size: 14px;
  $paragraph-color: #666666;
  $black-color: #222222;
  $white-color: #ffffff;
  $transition: .5s;
  .item-section{
    display: block;
    position: relative;

    .image-section {
      //min-width: 200px;
      margin-left: 30px;
      float: left;

      img {
        display: block;
        max-width: 100%;
      }
    }

    .text-section {
      overflow: hidden;
      text-align: left;
      //padding-left: 50px;
      //float: right;
      .item-name {
        font-size: 24px;
        color: #00001f;
        font-weight: 400;
        font-style:italic;
        //background: #ff8000;
      }

    }
  }

  @media screen and (min-width: 768px) {
    .image-section {
      width: 200px;
    }
    .text-section {
      padding-left: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    .image-section {
      width: 120px;
    }
    .text-section {
      padding-left: 2px;
    }
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
  .btn-light {
    background-color: transparent;
    color: $black-color;
    border-color: $black-color;

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
</style>
