<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(slide, index) in images" :key="index">
      <img :src="slide" @click="handler(index)" />
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper';
  import { string } from 'vue-types';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      images: {
        type: [],
        required: true,
      },
    },
    data() {
      return {
        modules: [Pagination],
        skuInfo: {},
      };
    },
    mounted() {
      window.console.log(this.images);
    }
  };
</script>

<style lang="css" scoped>
  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100%;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    .mySwiper {
      height: 450px;
      width: 450px;
    }
  }
</style>




