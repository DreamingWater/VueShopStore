<template>
  <div class="spec-preview">
    <img src="http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAHpFuAACTenfIJWo734.jpg" />
    <!-- 绑定鼠标移动事件 -->
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="bigObj.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        bigObj: {},
      };
    },
    mounted() {
      const skuImageList: [] = [{'id': 1, 'skuId': 1, 'imgName': 'ead186426badb626.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAHpFuAACTenfIJWo734.jpg', 'spuImgId': 2, 'isDefault': '0'}, {'id': 2, 'skuId': 1, 'imgName': 'b58ab2d79b859f39.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAcbl2AAFopp2WGBQ404.jpg', 'spuImgId': 3, 'isDefault': '0'}, {'id': 3, 'skuId': 1, 'imgName': '0d93a071c839d890.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmATs5EAABriLbF9vE207.jpg', 'spuImgId': 4, 'isDefault': '0'}, {'id': 4, 'skuId': 1, 'imgName': 'a7b1125239354d0d.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAeWopAAEtpBjP1VQ788.jpg', 'spuImgId': 5, 'isDefault': '0'}, {'id': 5, 'skuId': 1, 'imgName': '6029cb2c2b2c7668.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAZJX2AAGmVo8Tz9s683.jpg', 'spuImgId': 6, 'isDefault': '0'}, {'id': 6, 'skuId': 1, 'imgName': '2ff0882c9607e57c.jpg', 'imgUrl': 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg', 'spuImgId': 1, 'isDefault': '1'}];
      this.bigObj = skuImageList[0] || {};
      window.console.log(this.bigObj);
      window.console.log("bigObj.value");
    },
    methods: {
      handler(e: any) {
        //获取蒙板
        const mask = this.$refs.mask;
        const big = this.$refs.big;
        //计算蒙板的left|top数值
        let l = e.offsetX - mask.offsetWidth / 2;
        let t = e.offsetY - mask.offsetHeight / 2;
        //约束蒙板的上下左右范围
        if (l < 0) l = 0;
        if (l > mask.offsetWidth) l = mask.offsetWidth;
        if (t < 0) t = 0;
        if (t > mask.offsetHeight) t = mask.offsetHeight;
        mask.style.left = l + "px";
        mask.style.top = t + "px";
        big.style.left = -2 * l + "px";
        big.style.top = -2 * t + 'px';
      },
    },
  };
</script>
<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>





