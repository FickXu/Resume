/**
* @file
* @author xuwenlong
* @date 2017-05-23
*/
<template>
  <div class="container">
    <swiper :options="swiperOption" class="swiper-box">
      <canvas-bg></canvas-bg>
      <swiper-slide v-for="item in getSwiper">
        <slideContainer :globalData='getData' :flag='item.flag'></slideContainer>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import slideContainer from './comonentsChild/slideContainer.vue';
  import CanvasBg from './comonentsChild/canvasBg.vue';
  import store from '../store/index.js';
export default{
    components: {
      'slideContainer': slideContainer,
      'canvas-bg': CanvasBg
    },
    data () {
      return {
        swiperOption: {
//          pagination: '.swiper-pagination', // 导航点
          direction: 'vertical',
          slidesPerView: 1,
          mousewheelControl: true,
          onSlideChangeEnd: swiper => {
            this.changePage(swiper);
          }
        }
      };
    },
    computed: {
      getData: function () {
        return store.globalData;
      },
      getSwiper: function () {
        return this.getData.swiper;
      }
    },
    mounted () {
      console.log('home[mounted]:');
    },
    methods: {
      changePage: function (e) {
        console.log('changePage:', e, e.activeIndex);
      }
    }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .container {
    .swiper-container {
      height: 100%;
      .swiper-wrapper {
        .swiper-slide {
          > div {
            height: 100%;
          }
        }
      }
    }
  }
  /*6p*/
  @media screen and (min-width: 414px ) and (min-height: 736px) {
  }
</style>
