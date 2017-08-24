/**
* @file
* @author xuwenlong
* @date 2017-08-15
*/
<template>
  <div class="user">
    <img :src="iptData.url" alt="" class="user-photo">
    <input type="text" class="user-input" :value="iptData.name" readonly>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .container {
    .user {
      /*border: 1px solid #007aff;*/
      background: transparent;
      position: absolute;
      width: 200px;
      height: 360px;
      top: 50%;
      left: 50%;
      margin-top: -180px;
      margin-left: -98px;
      .user-photo {
        position: relative;
        width: 150px;
        border-radius: 100%;
        display: block;
        margin: 0 auto;
        box-shadow: 0 0 61px hsla(216, 18%, 16%, 0.3);
      }
      .user-input {
        border: none;
        border-bottom: 1px solid #00ADB5;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: transparent;
        display: block;
        margin: 50px auto;
        color: #393E46;
        text-align: center;
      }
    }
  }
</style>
<script>
    export default{
      props: ['iptData']
    };
</script>
