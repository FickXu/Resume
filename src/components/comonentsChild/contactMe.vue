/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-09-08 05:53:07
 * @modify date 2017-09-08 05:53:07
 * @desc [description]
*/
<template>
  <div class="carte-container">
    <h1>carte me</h1>
    <div class="carte-detail">
      <div class="carte-detail-left">
        <!-- <p>英文名：{{user.englishName}}</p> -->
        <p>姓名：{{user.name}}</p>
        <p>职业：{{user.job}}<span></span></p>
        <p>年限：{{user.duration}}<span></span></p>
        <p>地点：{{user.hopeAddress}}<span></span></p>
        <p>手机：<span>{{user.social.phone}}</span></p>
        <!-- <p>Q  Q：<span>{{user.social.qq.account}}</span></p> -->
        <!-- <p>微信：<span>{{user.social.wechat.account}}</span></p> -->
        <p>邮箱：<span>{{user.social.email.netEase}}</span></p>
        <!-- <p>GitHub：<span>{{user.social.github}}</span></p> -->
        <!-- <p>Segmentfault：<span>{{user.social.segmentfault}}</span></p> -->
      </div>
      <div class="carte-detail-right">
        <img :src=user.social.qq.qr alt="">
        <img :src=user.social.wechat.qr alt="">
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'n-zepto';
export default {
  props: ['user'],
  mounted () {
    $('.carte-detail-right img').on('click', function () {
      const _this = $(this);
      const _siblings = $(this).siblings('img');
      if (_this.hasClass('img-click')) {
        _this.removeClass('img-click').addClass('img-blur');
      } else {
        _this.removeClass('img-blur').addClass('img-click');
      }
      if (_siblings.hasClass('img-click')) {
        _siblings.removeClass('img-click').addClass('img-blur');
      }
    });
  }
};
</script>
<style lang="less" scoped>
.carte-container {
  height: inherit;
  &:before {
    content: '';
    background-image: url(http://ouptlygn0.bkt.clouddn.com/Robers_hd.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-filter: blur(35px);
    filter: blur(35px);
    margin: -35px;
    position: absolute;
    z-index: -1;
    top: 35px;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .carte-detail {
    border: 1px solid #eeeeee;
    background-color: hsla(0,0%,100%, .8);
    box-shadow: 0 0 5px #eeeeee;
    width: 50rem;
    margin: 5.625rem auto;
    // min-height: 60%;
    border-radius: 5px;
    padding: 2rem;
    box-sizing: border-box;
    overflow: hidden;
    min-width: 19.375rem;
    display: flex;
    p {
      margin-bottom: .4375rem;
      font-size: .875rem;
      span {
        font-size: inherit;
      }
    }
    &-left {
      flex: 1.5;
    }
    &-right {
      min-height: 14.375rem;
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      > img {
        // width: 9.375rem;
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 100%;
        margin-right: .625rem;
      }
      .img-click {
        animation: scale-big .5s ease-out;
        animation-fill-mode: forwards;
      }
      .img-blur {
        animation: scale-small .3s ease-out;
        animation-fill-mode: forwards;
      }
      @keyframes scale-big {
        0% {
          transform: scale(1) translate(0, 0);
        }
        100% {
          transform: scale(5) translate(-20px, -25px)
        }
      }
      @keyframes scale-small {
        0% {
          transform: scale(5) translate(-20px, -25px)
        }
        100% {
          transform: scale(1) translate(0, 0);
        }
      }
    }
  }
}
/* pc大屏 ，宽度大于1366px*/
@media screen 
and (min-width: 1366px) 
and (min-height: 768px) {
  .carte-container {
    .carte-detail {
      padding: 6.25rem;
      margin: 8.75rem auto;
      max-width: 59.6875rem;
    }
  }
}
/* 移动端 */
/* iphone4 及以上 */
@media screen 
and (min-device-width: 320px) 
and (max-device-width: 750px) 
and (min-device-height: 480px) 
{
  .carte-container {
    .carte-detail {
      padding: 0;
      background-color: transparent;
      border: none;
      box-shadow: none;
      margin-top: 0;
      width: inherit;
      height: calc(~"100% - 44px");
      display: flex;
      flex-flow: column wrap;
      &-left {
        width: 100%;
        flex: inherit;
        > p {
          height: 2.8125rem;
          line-height: 2.8125rem;
          text-indent: .9375rem;
          font-size: .8125rem;
          flex: 1;
          background-color: hsla(0,0%,100%, .9);
          margin-bottom: .0625rem;
        }
      }
      &-right {
        flex: 1;
        min-height: inherit;
        padding-bottom: 1rem;
        padding-right: .03125rem;
      }
    }
  }
}
/* iPhone 5及以上 */
@media screen 
and (min-device-width: 320px) 
and (min-device-height: 568px) 
{
  .carte-container {
    .carte-detail {
      // padding: 0;
      // background-color: transparent;
      // border: none;
      // box-shadow: none;
      // margin-top: 0;
      // width: inherit;
      // height: calc(~"100% - 44px");
      // display: flex;
      // flex-flow: column wrap;
      &-left {
        // width: 100%;
        // flex: inherit;
        > p {
          // height: 2.8125rem;
          // line-height: 2.8125rem;
          // text-indent: .9375rem;
          // font-size: .8125rem;
          // flex: 1;
          // background-color: hsla(0,0%,100%, .8);
          // margin-bottom: .0625rem;
        }
      }
      &-right {
        padding-right: 1.25rem;
        padding-bottom: 1.5625rem;
        > img {
          // width: 3.75rem;
          // height: 3.75rem;
        }
      }
    }
  }
}
</style>
