/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-08-23 06:41:27
 * @modify date 2017-08-23 06:41:27
 * @desc [全局缓存数据]
*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const globalData = {
  user: {
    name: '许文龙',
    englishName: 'Sa',
    sex: 'Man',
    job: '前端工程师',
    duration: '三年',
    phone: '13537651102',
    url: 'http://ouptlygn0.bkt.clouddn.com/Robers1-200.jpg',
    email: 'xwl330596595@163.com',
    birth: '1990-03-12',
    graduation: '2013-07',
    hobbies: ['美食', '桌球', '看书', '跑步', '学习']
  },
  work: {
    nav: [
      {
        name: '技能'
      },
      {
        name: '工作经历'
      },
      {
        name: '项目经验'
      },
      {
        name: '自我评价'
      },
      {
        name: '规划'
      }
    ],
    skill: [
      {
        'tag': 'HMTL',
        'time': '36 months',
        'type': 'native',
        'bgColor': 'rgba(255, 57, 65, 0.9)',
        'color': '#ff751e',
        'cls': 'icon-html'
      },
      {
        'tag': 'CSS',
        'time': '36 months',
        'type': 'native',
        'color': '#1266a3',
        'cls': 'icon-css'
      },
      {
        'tag': 'JavaScript',
        'time': '36 months',
        'type': 'native',
        'color': '#9cd4df',
        'cls': 'icon-js'
      },
      {
        'tag': 'HTML5',
        'time': '30 months',
        'type': 'native',
        'color': '#e44d26',
        'cls': 'icon-h5'
      },
      {
        'tag': 'CSS3',
        'time': '30 months',
        'type': 'native',
        'color': '#bd2d30',
        'cls': 'icon-css3'
      },
      {
        'tag': 'Vue',
        'time': '6 months',
        'type': 'frame',
        'color': '#41b883',
        'gradientColor': '#35495e',
        'cls': 'icon-vue'
      },
      {
        'tag': 'Less',
        'time': '6 months',
        'type': 'frame',
        'color': '#1d365d',
        'cls': 'icon-less'
      },
      {
        'tag': 'Webpack',
        'time': '6 months',
        'type': 'frame',
        'color': '#1e72b3',
        'gradientColor': '#84c6e8',
        'cls': 'icon-webpack'
      },
      {
        'tag': 'Node.js',
        'time': '6 months',
        'type': 'frame',
        'color': '#6ea660',
        'gradientColor': '#3d8836',
        'cls': 'icon-node'
      },
      {
        'tag': 'JQuery',
        'time': '18 months',
        'type': 'frame',
        'color': '#78cff5',
        'cls': 'icon-jq'
      },
      {
        'tag': 'Zepto.js',
        'time': '18 months',
        'type': 'frame',
        'color': '#c23cff',
        'gradientColor': '#875dff',
        'cls': 'icon-zepto'
      },
      {
        'tag': 'Swiper.js',
        'time': '9 months',
        'type': 'plugin',
        'color': '#004edd',
        'cls': 'icon-swiper'
      },
      {
        'tag': 'EChart.js',
        'time': '9 months',
        'type': 'plugin',
        'color': '#aa314d',
        'cls': 'icon-echart'
      },
      {
        'tag': 'SQLit',
        'time': '6 months',
        'type': 'plugin',
        'color': '#0482c4',
        'gradientColor': '#0482c4',
        'cls': 'icon-sqlit'
      },
      {
        'tag': 'SUI',
        'time': '6 months',
        'type': 'frame',
        'color': '#591c95',
        'gradientColor': '#e409ce',
        'cls': 'icon-sui'
      },
      {
        'tag': 'MUI',
        'time': '6 months',
        'type': 'frame',
        'color': '#d74b28',
        'cls': 'icon-mui'
      },
      {
        'tag': 'WebStorm',
        'time': '35 months',
        'type': 'tool',
        'color': '#2194dc',
        'gradientColor': '#0adde2',
        'endColor': '#d9eb5b',
        'cls': 'icon-webstorm'
      },
      {
        'tag': 'Sublime',
        'time': '12 months',
        'type': 'tool',
        'color': '#444444',
        'cls': 'icon-sublime'
      },
      {
        'tag': 'Vusual Studio Code',
        'time': '3 months',
        'type': 'tool',
        'color': '#373277',
        'cls': 'icon-vs-code'
      },
      {
        'tag': 'GitHub',
        'time': '3 months',
        'type': 'community',
        'color': '#24292e',
        'cls': 'icon-github;'
      }
    ],
    experience: [
      {
        startTime: '2012-05',
        stopTime: '2014-09',
        company: '深圳市凯利达投资发展有限公司',
        workDesc: 'sldkjflksdla;kdjlaksjdflasdkfalkalksdjfl'
      },
      {
        startTime: '2014-10',
        stopTime: 'Now',
        company: '深圳市前海圆舟网络科技股份有限公司',
        workDesc: '1、根据项目提供的UE,UI完成适用于移动端的页面2、实现UE提供的交互效果，实现UI呈现的效果3、前后端数据联调，组装数据，实现雷达图类的数据展示4、原生能力调用，实现拍照，录音，地图定位，签到等继续原生能力的功能5、利用本地数据库在设备中缓存部分数据，减少请求带来的流量负担6、参与需求、UE、UI评审，评估前端开发所需人天，拟订开发计划，分析项目开发中可能存在的风险'
      }
    ],
    project: [
      {
        startTime: '2012-05',
        stopTime: '2014-09',
        name: '锐锋生活网'
      },
      {
        startTime: '2014-11',
        stopTime: '2015-01',
        name: '卓越OA'
      },
      {
        startTime: '2015-04',
        stopTime: '2015-07',
        name: '鹏电讯充'
      },
      {
        startTime: '2015-09',
        stopTime: '2016-07',
        name: '华润三九服务营销系统'
      },
      {
        startTime: '2016-09',
        stopTime: '2017-02',
        name: '九牧创意APP'
      },
      {
        startTime: '2017-03',
        stopTime: '2017-05',
        name: '华润三九服务营销系统'
      },
      {
        startTime: '2017-06',
        stopTime: 'Now',
        name: '新日电动车'
      }
    ],
    planning: {
      target: 'changsha'
    }
  },
  swiper: {
    allowChangePage: false,
    page: [{
      flag: 'introduction'
    }, {
      flag: 'work'
    }]
  }
};
export default {
  globalData
};
