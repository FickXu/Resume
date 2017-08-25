/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 11:06:38
 * @modify date 2017-08-24 11:06:38
 * @desc [swiper的切换页面]
*/
<template>
  <div v-if="getFlag === 'introduction'">
    <introduction :iptData="getUser"></introduction>
  </div>
  <div v-else-if="getFlag === 'work'">
    <work :work="getWork"></work>
  </div>
</template>
<script>
  import introduction from '../comonentsChild/introduction.vue';
  import work from '../comonentsChild/work.vue';
  export default {
    props: ['globalData', 'flag'],
    components: {
      'introduction': introduction,
      'work': work
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
      },
      // 获取工作信息
      getWork: function () {
        return this.getData.work;
      }
    },
    mounted () {
      console.log('slide container[mounted]:', this.getFlag);
    }
  };
</script>
