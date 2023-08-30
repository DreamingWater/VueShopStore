<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" :slidesPerView="3">
    <swiper-slide v-for="(slide, index) in skuInfo.skuImageList" :key="index">
      <img
        :src="slide.imgUrl"
        :class="{ active: currentIndex == index }"
        @click="handler(index)"
      />
    </swiper-slide>
    <swiper-button-next class="swiper-button-next" @click="add"></swiper-button-next>
    <swiper-button-prev class="swiper-button-prev" @click="minus"></swiper-button-prev>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      currentIndex: 0,
      skuInfo: {},
    };
  },
  // watch: {
  //   skuInfo() {
  //     //保证数据发生修改,页面结构再次渲染完毕。在初始化Swiper实例
  //     this.$nextTick(() => {
  //       //初始化Swiper类的实例
  //       var mySwiper = new Swiper('.mySwiper', {
  //         //设置轮播图防线
  //         direction: 'horizontal',
  //         loop:true,
  //         // 如果需要前进后退按钮
  //         navigation: {
  //           nextEl: '.swiper-button.vue-next',
  //             prevEl: '.swiper-button.vue-prev',
  //         },
  //         //展示区域同时展示三张图片
  //           slidesPerView: 2,
  //       });
  //     })
  //     window.console.log('watch over.')
  //   },
  // },
  mounted() {
    this.skuInfo = {'id': 1, 'spuId': 1, 'price': 5999, 'skuName': '小米10 至尊纪念版  双模5G 骁龙865  120W快充 8GB+128GB 陶瓷黑 游戏手机', 'skuDesc': '小米10 至尊纪念版 双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 12GB+256GB 陶瓷黑 游戏 手机', 'weight': '1.00', 'tmId': 1, 'category3Id': 61, 'skuDefaultImg': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg', 'isSale': 1, 'createTime': '2021-12-10 09:31:42', 'skuImageList': [{'id': 1, 'skuId': 1, 'imgName': 'ead186426badb626.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAHpFuAACTenfIJWo734.jpg', 'spuImgId': 2, 'isDefault': '0'}, {'id': 2, 'skuId': 1, 'imgName': 'b58ab2d79b859f39.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAcbl2AAFopp2WGBQ404.jpg', 'spuImgId': 3, 'isDefault': '0'}, {'id': 3, 'skuId': 1, 'imgName': '0d93a071c839d890.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmATs5EAABriLbF9vE207.jpg', 'spuImgId': 4, 'isDefault': '0'}, {'id': 4, 'skuId': 1, 'imgName': 'a7b1125239354d0d.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAeWopAAEtpBjP1VQ788.jpg', 'spuImgId': 5, 'isDefault': '0'}, {'id': 5, 'skuId': 1, 'imgName': '6029cb2c2b2c7668.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAZJX2AAGmVo8Tz9s683.jpg', 'spuImgId': 6, 'isDefault': '0'}, {'id': 6, 'skuId': 1, 'imgName': '2ff0882c9607e57c.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg', 'spuImgId': 1, 'isDefault': '1'}], 'skuAttrValueList': [{'id': 1, 'attrId': 106, 'valueId': 176, 'skuId': 1, 'attrName': '手机一级', 'valueName': '安卓手机'}, {'id': 2, 'attrId': 107, 'valueId': 177, 'skuId': 1, 'attrName': '二级手机', 'valueName': '小米'}, {'id': 3, 'attrId': 23, 'valueId': 83, 'skuId': 1, 'attrName': '运行内存', 'valueName': '8G'}, {'id': 4, 'attrId': 24, 'valueId': 82, 'skuId': 1, 'attrName': '机身内存', 'valueName': '128G'}], 'skuSaleAttrValueList': [{'id': 1, 'skuId': 1, 'spuId': 1, 'saleAttrValueId': 1, 'saleAttrId': 1, 'saleAttrName': '颜色', 'saleAttrValueName': '陶瓷黑'}, {'id': 2, 'skuId': 1, 'spuId': 1, 'saleAttrValueId': 3, 'saleAttrId': 2, 'saleAttrName': '版本', 'saleAttrValueName': '8G+128G'}]}
  },
  methods: {
      //小图的点击事件
    handler(index) {
      //修改响应式数据存储当前用户点击的索引值
      this.currentIndex = index;
      //全局事件总线，通知兄弟当前图片的索引值
      window.console.log('send_index');
      window.console.log(index);
      // this.$bus.$emit('sendIndex', index);
    },
    minus() {
      this.currentIndex--;
      if (this.currentIndex <= 0) this.currentIndex = 0;
      // this.$bus.$emit('sendIndex', this.currentIndex);
    },
    add() {
      this.currentIndex++;
      if (this.currentIndex >= this.skuInfo.skuImageList.length - 1) {
        this.currentIndex = this.skuInfo.skuImageList.length - 1;
      }
      // this.$bus.$emit('sendIndex', this.currentIndex);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
