/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 11:06:38
 * @modify date 2017-08-24 11:06:38
 * @desc [swiper的动态页面]
*/
<template>
  <div v-if="getFlag === 'introduction'">
    <introduction :iptData="getUser"></introduction>
  </div>
  <div v-else-if="getFlag === 'work'">
    <p>lskdfj</p>
  </div>
</template>
<script>
  import introduction from '../comonentsChild/introduction.vue';
  export default {
    props: ['globalData', 'flag'],
    components: {
      'introduction': introduction
    },
    computed: {
      // 获取全局缓存的数据
      getData: function () {
        return this.globalData;
      },
      // 获取用户信息
      getUser: function () {
        return this.getData.user;
      },
      // 获取slider标识
      getFlag: function () {
        return this.flag;
      }
    },
    mounted () {
      console.log('slide container[mounted]:', this.getFlag);
    }
  };
</script>
