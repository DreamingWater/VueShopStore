<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :initialSlide="Math.floor(items.length / 2)"
    :pagination="true"
    :modules="modules"
    class="mySwiper">
    <template v-for="(item, index) in items">
      <swiper-slide>
        <img alt="img" :src="item.img" :data-index="index" @click="handel_swiper_click(item.id)"/>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";


  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      items: {
        type: [Object],
        required: true,
      },
    },
    setup() {
      function handel_swiper_click(id) {
        window.console.log(id);
      }
      return {
        modules: [EffectCoverflow, Pagination],
        handel_swiper_click,
      };
    },
  };
</script>

<style >
  .swiper {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
</style>
