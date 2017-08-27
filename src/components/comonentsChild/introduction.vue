/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-24 06:22:07
 * @modify date 2017-08-24 06:22:07
 * @desc [description]
*/
<template>
  <div class="overview" >
    <div id="left-container">
      <img :src="getUser.url" alt="" class="user-photo user-photo-small">
      <input type="text" class="user-input user-input-small" :value="getUser.name" readonly>
      <span class="job">{{getUser.job}}</span>
      <span class="duration">{{getUser.duration}}</span>
      <span class="email">{{getUser.email}}</span>
      <span class="phone">{{getUser.phone}}</span>
      <p class="about-me">
        <a href="https://github.com/FickXu" target="_blank"></a>
        <a href="https://segmentfault.com/u/sa_xwl" target="_blank"></a>
      </p>
    </div>
    <div id="right-container">
      <canvas-bg></canvas-bg>
      <div class="user">
        <img :src="getUser.url" alt="" class="user-photo user-photo-bigger breathe-active" @click="getOverView">
        <input type="text" class="user-input user-input-bigger" :value="getUser.englishName" readonly>
      </div>
      <div class="skill-info" v-if="isView">
        <ul>
          <li v-for="item in getSkill">{{item.tag}}</li>
        </ul>
      </div>
    </div>
    <span class="transition close-left" @click="closeLeftContainer"></span>
  </div>
</template>
<script>
  import CanvasBg from './canvasBg.vue';
  export default{
    props: ['getUser', 'getWork'],
    components: {
      'canvas-bg': CanvasBg
    },
    data () {
      return {
        leftContainer: null,
        rightContainer: null,
        eleUser: null,
        leftArrow: null,
        isView: false,
        debug: {
          flag: false
        }
      };
    },
    computed: {
      getSkill () {
        return this.getWork.skill;
      },
      random () {
      }
    },
    mounted () {
      // console.log('intro... mounted:', this.random);
    },
    methods: {
      getOverView () {
        /*
          1. 弹出侧边栏
          2. 隐藏头像
          3. 侧边栏显示基本信息
          4. 右侧显示技能信息
          以上同步进行
        */
        // 弹出侧边栏
        this.openLeftContainer();
        console.log('methods...');
      },
      openLeftContainer () {
        this.leftContainer = document.getElementById('left-container');
        this.rightContainer = document.getElementById('right-container');
        this.leftContainer.style.transform = 'translateX(0%)';
        this.rightContainer.style.transform = 'translateX(' + this.leftContainer.offsetWidth + 'px)';
        // 隐藏头像
        this.eleUser = document.getElementsByClassName('user')[0];
        this.eleUser.style.display = 'none';
        // 显示技能标签
        this.isView = true;
        // 左滑箭头显示
        this.leftArrow = document.getElementsByClassName('close-left')[0];
        this.leftArrow.style.display = 'block';
      },
      closeLeftContainer () {
        this.leftContainer.style.transform = 'translateX(-100%)';
        this.rightContainer.style.transform = 'translateX(0%)';
        this.eleUser.style.display = 'block';
        // 隐藏技能标签
        this.isView = false;
        // 左滑箭头隐藏
        this.leftArrow.style = 'none';
      }
    }
  };
</script>
<style lang="less" rel="stylesheet/less" scoped>
@leftClomunW: 30%; // 左侧边栏的初始宽度
@leftMaxW: 360px; // 左侧边栏的最大宽度
@leftMinW: 230px; //左侧边栏的最小宽度
@rightMinW: 755px;  // 右侧容器的最小宽度
@translateX: -100%; // 左侧边栏初始平移距离
@slideDuration: 0.5s; // 平移时长
@slideFn: 'ease-out'; // 动画
@iconFamily: 'resume-font'; // 图标的字体
@iconInitSize: 20px; // 图标的默认尺寸
  .container {
    .overview {
      width: inherit;
      height: inherit;
      position: relative;
      .transition {
        transition: all 5s;
      }
      .user-photo {
        position: relative;
        border-radius: 100%;
        display: block;
        margin: 0 auto;
      }
      .user-photo-bigger {
        width: 150px;
        box-shadow: 0 0 60px hsla(216, 18%, 16%, 0.3);
      }
      .user-photo-small {
        width: 50%;
        display: block;
        margin: 60px auto 25px;
        max-width: 40%;
      }
      .user-input {
        border: none;
        border-bottom: 1px solid #00ADB5;
        background: transparent;
        display: block;
        color: #393E46;
        text-align: center;
      }
      .user-input-bigger {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 50px auto;
      }
      .user-input-small {
        width: 50%;
        height: 30px;
        font-size: 14px;
        line-height: 24px;
        margin: auto;
      }
      #left-container {
        display: inline-block;
        position: relative;
        background: #eee;
        width: @leftClomunW;
        height: 100%;
        transform: translateX(@translateX);
        transition: all .5s ease-out;
        max-width: @leftMaxW;
        min-width: @leftMinW;
        > span {
          display: block;
          width: 65%;
          margin: 20px auto;
          font-size: 13px;
        }
        .job, .duration, .email, .phone {
          &:before {
            font-family: @iconFamily;
            font-size: @iconInitSize;
            margin-right: 10px;
          }
        }
        .job {
          margin-top: 60px;
          &:before {
            content: '\e677';
          }
        }
        .duration:before {
          content: '\e618';
        }
        .email:before {
          content: '\e612';
        }
        .phone:before {
          content: '\e737';
        }
        .about-me {
          width: 65%;
          margin: 40px auto;
          > a {
            font-family: @iconFamily;
            font-size: @iconInitSize;
            color: #8e8e8e;
          }
          > a:first-child {
            &:hover {
              color: #000;
            }
            &:before {
              content: '\e606';
            }
          }
          > a:last-child {
            &:hover {
              color: #004e31
            }
            &:before {
              content: '\e602';
            }
          }
        }
      }
      #right-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        transition: all .5s ease-out;
        .user {
          background: transparent;
          position: absolute;
          width: 200px;
          height: 360px;
          top: 50%;
          left: 50%;
          margin-top: -180px;
          margin-left: -98px;
          /* 动画提示诱导点击 */
          .breathe-active {
            animation: breathe-in .6s ease-out 3 alternate;
          }
          @keyframes breathe-in {
            0% {
              box-shadow: 0 0 0 hsla(216, 18%, 16%, 0.5);
            }
            50% {
              box-shadow: 0 0 40 hsla(216, 18%, 16%, 0.4);
            }
            100% {
              box-shadow: 0 0 61 hsla(216, 18%, 16%, 0.2);
            }
          }
        }
      }
      .close-left {
        font-family: @iconFamily;
        font-size: 40px;
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        margin-top: -30px;
        line-height: 30px;
        color: #393e46;
        opacity: .1;
        display: none;
        &:hover {
          opacity: .3;
        }
        &:before {
          content: '\e660';
        }
      }
    }
  }
</style>
