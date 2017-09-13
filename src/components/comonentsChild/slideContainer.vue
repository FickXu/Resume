/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 11:06:38
 * @modify date 2017-08-24 11:06:38
 * @desc [swiper的切换页面]
*/
<template>
  <div v-if="getFlag === 'introduction'">
    <introduction :getUser="getUser" :getWork="getWork" :globalData="getData"></introduction>
  </div>
  <div v-else-if="getFlag === 'workExperience'">
    <work :work="getWork" ></work>
  </div>
  <div v-else-if="getFlag === 'projectExperience'">
    <project :work="getWork"></project>
  </div>
  <div v-else-if="getFlag === 'Self-evaluation'">
    <evaluation :work="getWork"></evaluation>
  </div>
  <div v-else-if="getFlag === 'contactMe'">
    <contactMe :user="getUser"></contactMe>
  </div>
</template>
<script>
  import introduction from '../comonentsChild/introduction.vue';
  import work from '../comonentsChild/work.vue';
  import project from '../comonentsChild/project.vue';
  import evaluation from '../comonentsChild/selfEvaluation.vue';
  import contactMe from '../comonentsChild/contactMe.vue';
  export default {
    props: ['globalData', 'flag'],
    components: {
      'introduction': introduction,
      'work': work,
      'project': project,
      'evaluation': evaluation,
      'contactMe': contactMe
    },
    computed: {
      // 获取全局缓存的数据
      getData () {
        return this.globalData;
      },
      // 获取用户信息
      getUser () {
        return this.getData.user;
      },
      // 获取slider标识
      getFlag () {
        return this.flag;
      },
      // 获取工作信息
      getWork () {
        return this.getData.work;
      }
    },
    mounted () {
      // console.log('slide container[mounted]:', this.getSwiper);
    }
  };
</script>
