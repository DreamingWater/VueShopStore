<template>
  <!-- Start Main Banner Area -->
  <div class="main-banner item-bg1">
    <div class="container">
      <div class="main-banner-content">
        <span>Toys website</span>
        <h1>Toys made for fun!</h1>
        <p>The biggest fun for men and women</p>
        <a-button type="primary" href="/products" class="btn-primary button_-group">Shop Women's</a-button>
        <a-button href="/products" class="btn-primary">Shop Men's</a-button>
      </div>
    </div>
  </div>
  <!-- End Main Banner Area -->
</template>
<!--<template>-->
<!--  &lt;!&ndash; Start Main Banner Area &ndash;&gt;-->
<!--  <div class="main-banner item-bg1">-->
<!--    <div class="d-table">-->
<!--      <div class="d-table-cell">-->
<!--        <div class="container">-->
<!--          <div class="main-banner-content">-->
<!--            <span>New Inspiration 2019</span>-->
<!--            <h1>Clothing made for you!</h1>-->
<!--            <p>Trending from men and women style collection</p>-->

<!--            <a-button.vue type="primary" href="/products" class="btn-primary">Shop Women's</a-button.vue>-->
<!--            <a-button.vue href="/products" class="btn-primary">Shop Men's</a-button.vue>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  &lt;!&ndash; End Main Banner Area &ndash;&gt;-->
<!--</template>-->
<script>
  import { defineComponent, computed, unref } from 'vue';
  import { Col, Row } from 'ant-design-vue';

  export default defineComponent({
    name: 'Banner',
    components: {
      ARow: Row,
      ACol: Col,
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

  .main-banner {
    height: 400px;
    position: relative;
    z-index: 1;
    background: {
      size: cover;
      repeat: no-repeat;
      position: center center;

    }
    &.item-bg1 {
      background-image: url(test.jpg);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end; // 将子元素放置在父元素底部
    height: 100%;
  }
  .main-banner-content {
    margin-left: 20px;
    //display: block;
    //position: relative;
    //bottom: 0;
    max-width: 520px;
    margin-bottom: 60px;
    //padding-bottom: 100px;
    span {
      font-size: $font-size;
      color: $paragraph-color;
      display: block;
      margin: {
        bottom: 8px;
      }
    }
    h1 {
      font: {
        size: 34px;
        weight: 700;
      }
      color: mediumpurple;
      text-transform: uppercase;
      margin: {
        bottom: 15px;
      }
    }
    p {

      line-height: initial;
      font-size: 18px;
      //color: $black-color;
      margin-bottom: 30px;
    }
    .btn-primary {
      margin-right: 10px;
    }
    &.white-color {
      span {
        color: $white-color;
      }
      h1 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      .btn-primary {
        &:hover, &:focus {
          background-color: $white-color;
          color: $black-color;
          border-color: $white-color;
        }

      }
      .button_-group{
        margin-bottom: 50px;
      }
    }
  }

</style>
