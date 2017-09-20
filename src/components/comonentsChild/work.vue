/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 06:21:13
 * @modify date 2017-08-24 06:21:13
 * @desc [work desc]
*/

<template>
  <div class="work-container">
    <!-- <h1>工作经历</h1> -->
    <h1>experience</h1>
    <div class="box-contaniner">
      <div class="left-nav">
        <ul class="company-tag" :class="{'tag-click' : item.id === 0}" v-for="item in getExperience" @click="selectCompany($event, item.id)">
          <li>
            <span>名称：</span><span>{{item.company}}</span><label>{{item.companyRef}}</label>
          </li>
          <li>
            <span>职位：{{item.post}}</span>
          </li>
          <li>
            <span>项目：{{item.project}}</span>
          </li>
          <!-- <li>
            <span>职责：</span><span>{{item.post}}</span>
          </li> -->
          <li>
            <span>时间：{{item.startTime}}-{{item.stopTime}}</span>
          </li>
        </ul>
      </div>
      <div class="right-main">
        <h2>工作描述：</h2>
        <p class="p-content" v-for="item in workDesc">{{item}}</p>
      </div>  
    </div>
  </div>
</template>
<script>
import $ from 'n-zepto';
export default {
  props: ['work'],
  data () {
    return {
      getTitle: null,
      workDesc: null,
      isDel: false
    };
  },
  computed: {
    getWork () {
      return this.work;
    },
    getExperience () {
      return this.getWork.experience;
    },
    getSkill () {
      return this.getWork.skill;
    }
  },
  methods: {
    selectCompany () {
      // 导航焦点
      const _target = $(arguments[0].currentTarget);
      if (!_target.hasClass('tag-click')) {
        $(arguments[0].currentTarget).addClass('tag-click')
        .siblings('ul').removeClass('tag-click');
        // 切换效果
        const _div = document.getElementsByClassName('right-main')[0];
        _div.classList.add('sad-enter-active');
        setTimeout(() => {
          _div.classList.remove('sad-enter-active');
        }, 500);
        //  切换数据
        const _id = arguments[1] || 0;
        this.workDesc = this.getExperience[_id].workDesc;
      }
    }
  },
  mounted () {
    this.workDesc = this.getExperience[1].workDesc;
  }
};
</script>
<style lang="less" rel="stylesheet/css" scoped>
  .work-container {
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
    .box-contaniner {
      padding-top: 4rem;
      display: flex;
      flex-flow: row wrap;
      height: 100%;
      box-sizing: border-box;
      padding-bottom: 8rem;
      .left-nav {
        height: inherit;
        display: flex;
        align-items: center;
        width: 30%;
        min-width: 13.125rem;
        flex-flow: column wrap;
        .company-tag {
          cursor: pointer;
          border: 1px solid #fff;
          background-color: hsla(0,0%,100%, .1);
          box-shadow: 0 0 5px #fff;
          width: 70%;
          min-height: 20%;
          min-width: 11.875rem;
          border-radius: 0.3125rem;
          &.tag-click {
            background: rgba(255, 255, 255, 0.8);
          }
          &:first-child {
            margin-bottom: 3.4375rem;
          }
          li {
            color: #393e46;
            display: flex;
            width: 85%;
            height: 70%;
            margin: .8125rem auto;
            &:first-child {
              background: #fff;
              width: 100%;
              margin-top: 0;
              border-bottom: 1px solid #eee;
              box-sizing: border-box;
              padding: 5% 7.25% 5% 7.25%;
              // justify-content: center;
              align-content: center;
              /* 默认不显示公司简称 */
              > label {
                display: none;
                float: left;
              }
            }
            span {
              font-size: .8125rem;
              &:first-child {
                width: 2.6375rem;
                white-space: nowrap;
              }
              &:last-child {
                flex: 1;
              }
            }
          }
        }
      }
      .right-main {
        border: 1px solid #fff;
        background-color: hsla(0,0%,100%, .8);
        box-shadow: 0 0 5px #fff;
        // text-transform: uppercase;
        width: 66.5%;
        overflow: hidden;
        border-radius: 5px;
        .p-content {
          font-size: .9375rem;
          color: #393e46;
          margin-bottom: .625rem;
          width: 93%;
          margin: 0 auto .625rem auto;
        }
        &.sad-enter-active {
          animation: sad-in .5s ease-in-out;
        }
        @keyframes sad-in {
          0% {
            opacity: 1;
            transform-origin: 100% 0;
            transform: translateY(0);
          }
          50% {
            opacity: 0;
            transform-origin: 100% 0;
            transform: rotate(25deg);
          }
          100% {
            opacity: 1;
            transform-origin: 100% 0;
            transform: translateY(0);
          }
        }
      }
    }
  }
/* 移动端 */
/* iphone4 及以上 */
@media screen 
and (min-width: 320px) 
and (max-width: 750px) 
and (min-height: 480px) 
{
  .work-container {
    .box-contaniner {
      flex-direction: column-reverse;
      height: calc(~"100% - 44px");
      padding-top: 0;
      box-sizing: inherit;
      .left-nav {
        width: 100%;
        height: initial;
        flex-flow: row;
        // align-items: inherit;
        .company-tag {
          flex: 1;
          min-width: initial;
          border-radius: 0;
          &:first-child {
            margin-bottom: inherit;
          }
          margin-bottom: inherit;
          li {
            height: inherit;
             &:first-child {
              > span:nth-child(1),
              > span:nth-child(2) {
                display: none;
              }
              > label{
                display: block;
                font-size: 0.875rem;
              }
            }
          }
        }
      }
      .right-main {
        width: 100%;
        border-radius: 0;
        flex: 1;
        h2 {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-bottom: .625rem;
          font-size: .9375rem;
        }
        .p-content {
          font-size: .8125rem;
        }
      }
    }
  }
}
/* iphone6 */
@media screen 
and (min-width: 375px) 
and (min-height: 667px){
  .work-container {
    .box-contaniner {
      .right-main {
        h2 {
          margin-top: 2rem;
          margin-bottom: 1.25rem;
        }
      }
    }
  }
}
</style>
