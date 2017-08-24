<template>
  <div class="hello">
    <transition name="circle-fall">
      <p class="circle" v-if="animationFlag" v-on:click="open">
        <span class="span-rotate">{{ hello }}</span>
        <span class="span-rotate">{{customer}}</span>
      </p>
    </transition>
  </div>
</template>

<script>
//  import APIS from '../public/js/NativeAPI';
  export default {
    data () {
      return {
        hello: 'Hello',
        customer: 'Customer',
        animationFlag: false
      };
    },
    mounted () {
      console.log('mounted');
      var self = this;
      self.setTimeout = setTimeout(function () {
        self.animationFlag = true;
      }, 100);
    },
    methods: {
      open () {
        this.$router.push('/Home');
      }
//      testAjax () {
//        APIS.ajax({
//          type: 'get',
//          url: '../../README.md'
//        });
//      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
@height: 150px;
@fontSize: 30px;
@begin-hover-duration: 0.8s;
@end-hover-duration: 0.5s;
@animation-duration: 1s;
.hello {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  .circle {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: inline-block;
    width: @height;
    height: @height;
    border-radius: 100%;
    line-height: @height;
    color: #eeeeee;
    font-size: @fontSize;
    -webkit-transform: translate(0, 160px);
    transform: translate(0, 160px);
    cursor: pointer;
    position: relative;
    -webkit-perspective: 800;
    perspective: 800;
    box-shadow: 0 0 70px -5px #fff;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 1s;
    transition: all 1s;
    .span-rotate {
      position: absolute;
      left: 0;
      width: @height;
      height: @height;
      border-radius: 100%;
      background-color: #00adb5;
      display: inline-block;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
    }
    & > span:last-child {
      -webkit-transform: rotateY(180deg) rotateZ(0);
      transform:  rotateY(180deg) rotateZ(0);
    }
    &:hover {
      -webkit-transform: rotateY(180deg) rotateZ(0) translate(0, 160px);
      transform:  rotateY(180deg) rotateZ(0) translate(0, 160px);
      box-shadow: 0 0 70px 10px #fff;
    }
    &-fall-enter-active{
      -webkit-animation: fall-in @animation-duration;
      animation: fall-in @animation-duration;
    }
    @-webkit-keyframes fall-in{
      0% {
        -webkit-transform: translate(0, -160px);
      }
      100% {
        -webkit-transform: translate(0, 160px);
      }
    }
    @keyframes fall-in{
      0% {
        transform: translate(0, -160px);
      }
      100% {
        transform: translate(0, 160px);
      }
    }
  }
}
</style>
