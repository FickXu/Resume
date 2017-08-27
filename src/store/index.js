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
    skill: [
      {
        'tag': 'HMTL',
        'time': '36 months',
        'type': 'native'
      },
      {
        'tag': 'CSS',
        'time': '36 months',
        'type': 'native'
      },
      {
        'tag': 'JavaScript',
        'time': '36 months',
        'type': 'native'
      },
      {
        'tag': 'HTML5',
        'time': '30 months',
        'type': 'native'
      },
      {
        'tag': 'CSS3',
        'time': '30 months',
        'type': 'native'
      },
      {
        'tag': 'Vue',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'Less',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'Webpack',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'Node.js',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'JQuery',
        'time': '18 months',
        'type': 'frame'
      },
      {
        'tag': 'Zepto.js',
        'time': '18 months',
        'type': 'frame'
      },
      {
        'tag': 'Swiper.js',
        'time': '9 months',
        'type': 'plugin'
      },
      {
        'tag': 'EChart.js',
        'time': '9 months',
        'type': 'plugin'
      },
      {
        'tag': 'SQLit',
        'time': '6 months',
        'type': 'plugin'
      },
      {
        'tag': 'SUI',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'MUI',
        'time': '6 months',
        'type': 'frame'
      },
      {
        'tag': 'WebStorm',
        'time': '35 months',
        'type': 'tool'
      },
      {
        'tag': 'Sublime',
        'time': '12 months',
        'type': 'tool'
      },
      {
        'tag': 'Vusual Studio Code',
        'time': '3 months',
        'type': 'tool'
      },
      {
        'tag': 'GitHub',
        'time': '3 months',
        'type': 'community'
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
