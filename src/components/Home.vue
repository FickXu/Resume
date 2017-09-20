/**
* @file
* @author xuwenlong
* @date 2017-05-23
*/
<template>
  <div class="container">
    <swiper :options="swiperOption" class="swiper-box" ref='hoemSwiper'>
      <swiper-slide v-for="(item, index) in getSwiperPage">
        <slideContainer :globalData='getData' :flag='item.flag'></slideContainer>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
  import slideContainer from './comonentsChild/slideContainer.vue';
  import store from '../store/index.js';
export default{
    components: {
      'slideContainer': slideContainer
    },
    data () {
      return {
        swiperIndex: 0,
        swiperOption: {
//          pagination: '.swiper-pagination', // 导航点
          direction: 'vertical',
          slidesPerView: 1,
          mousewheelControl: true,
          onSlideChangeEnd: swiper => {
            // console.log('onSildeChageEnd:', swiper.realIndex);
          }
        }
      };
    },
    computed: {
      getData () {
        return store.globalData;
      },
      getSwiper () {
        return this.$refs.hoemSwiper.swiper;
      },
      getSwiperData () {
        return this.getData.swiper;
      },
      getSwiperPage () {
        return this.getSwiperData.page;
      }
    },
    mounted () {
      this.getSwiperData.op = this.getSwiper;
      // console.log('home mounted: =============', this.getSwiperData.op.realIndex);
    }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .container {
    .swiper-container {
      height: 100%;
      .swiper-wrapper {
        .swiper-slide {
          overflow: hidden;
          > div {
            height: 100%;
          }
        }
      }
    }
  }
</style>
