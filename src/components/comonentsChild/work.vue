/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 06:21:13
 * @modify date 2017-08-24 06:21:13
 * @desc [work desc]
*/

<template>
  <div class="skill-container">
    <ul class="skill-ul">
      <li class="skill-li" v-for="itme in getSkill">
        {{itme.tag}}
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/css" scoped>
  .skill-container {
    height: 100%;
    background: -webkit-linear-gradient(top,  hsla(0, 100%, 100%, 1),  #eee);
    > ul {
      height: 100%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-around;
      .skill-li {
        display: inline-block;
        border: 1px solid #eee;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
</style>
<script>
export default {
  props: ['work'],
  computed: {
    getSkill: function () {
      return this.work.skill;
    }
  },
  created () {

  },
  mounted () {
    console.log('work vue: ', this.getWork);
  }
};
</script>
