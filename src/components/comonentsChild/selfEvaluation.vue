/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-09-08 04:30:10
 * @modify date 2017-09-08 04:30:10
 * @desc [description]
*/
<template>
  <div class="evalation-container">
    <h1>Self-evaluation</h1>
    <div class="evalation-box">
      
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="less" scoped>
.evalation-container {
  height: inherit;
  &:before {
    content: '';
    background-image: url(http://ouptlygn0.bkt.clouddn.com/body-bg2-1.jpg);
    background-size: 100% 100%;
    -webkit-filter: blur(35px);
    filter: blur(15px);
    margin: -35px;
    position: absolute;
    z-index: -1;
    top: 35px;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
