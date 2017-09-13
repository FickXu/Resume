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
    birth: '1990-03',
    graduation: '2013-07',
    englishName: 'Sa',
    sex: 'Man',
    job: '前端工程师',
    duration: '五年',
    url: 'http://ouptlygn0.bkt.clouddn.com/Robers1-200.jpg',
    status: '即将离职',
    hopeAddress: '湖南·长沙',
    social: {
      qq: {
        account: '330596595',
        qr: 'http://ouptlygn0.bkt.clouddn.com/QR_code_qq2.jpg'
      },
      wechat: {
        account: 'Mr_xwl',
        qr: 'http://ouptlygn0.bkt.clouddn.com/QR_code_wechat1.jpg'
      },
      phone: '13537651102',
      email: {
        qq: '330596595@qq.com',
        netEase: 'xwl330596595@163.com'
      },
      github: 'https://github.com/FickXu',
      segmentfault: 'https://segmentfault.com/u/sa_xwl'
    },
    hobbies: ['美食', '桌球', '看书', '跑步', '学习']
  },
  work: {
    nav: [
      {
        name: '工作技能'
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
        name: '个人名片'
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
        'cls': 'icon-github'
      }
    ],
    experience: [
      {
        id: 0,
        startTime: '2014-10',
        stopTime: '至今',
        project: 'WebApp',
        company: '深圳市前海圆舟网络科技股份有限公司',
        companyRef: '深圳市前海圆舟',
        post: '前端开发工程师',
        workDesc: [
          '1、根据项目提供的UE,UI完成适用于移动端的页面',
          '2、实现UE提供的交互效果，实现UI呈现的效果',
          '3、前后端数据联调，组装数据，实现雷达图类的数据展示',
          '4、原生能力调用，实现拍照，录音，地图定位，签到等继续原生能力的功能',
          '5、利用本地数据库在设备中缓存部分数据，减少请求带来的流量负担',
          '6、参与需求、UE、UI评审，评估前端开发所需人天，拟订开发计划，分析项目开发中可能存在的风险'
        ]
      },
      {
        id: 1,
        startTime: '2012-05',
        stopTime: '2014-09',
        project: '.NET项目(PC)',
        company: '深圳市凯利达投资发展有限公司',
        companyRef: '深圳市凯利达',
        post: '.NTE开发工程师',
        workDesc: [
          '1、根据项目提供的psd完成适用于PC端的页面',
          '2、利用Photoshop切图，对图片进行简单的处理。如透明，压缩等',
          '3、前后端数据联调，实现业务功能',
          '4、整合ueditor富文本编辑器，实现项目中的文章发布，评论，回复等相关功能',
          '5、.NET网站部署',
          '6、负责项目bug修复，维护与功能扩展'
        ]
      }
    ],
    project: [
      /* data for pc */
      [
        [
          ['锐锋生活网', '29', 1397096869, '2012-05~2014-09', '.NET', '深圳市凯利达投资发展有限公司', 'Visual Studio 2012、SQL Server 2008、FileZilla、IE9、IE test、360浏览器、FireFox、Photoshop']
        ],
        [
          ['卓越OA', '3', 177976869, '2014-11~2015-01', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'SVN、Chrome、Sublime'],
          ['鹏电讯充', '4', 377976869, '2015-04~2015-07', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Sublime、Webstorm'],
          ['华润三九服务营销系统', '11', 777976869, '2015-09~2016-07', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、SQLite Expert Personal 3'],
          ['九牧创意APP', '6', 497976869, '2016-09~2017-02', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、微信web开发者工具'],
          ['云掌', '3', 177976869, '2017-03~2017-05', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm'],
          ['新日电动车', '至今', 2477976869, '2017-06~至今', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、Visual Studio Code']
        ]
      ],
      /* data for mobile */
      [
        [
          ['锐锋生活网', '29', 25, '2012-05~2014-09', '.NET', '深圳市凯利达投资发展有限公司', 'Visual Studio 2012、SQL Server 2008、FileZilla、IE9、IE test、360浏览器、FireFox、Photoshop']
        ],
        [
          ['卓越OA', '3', 15, '2014-11~2015-01', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'SVN、Chrome、Sublime'],
          ['鹏电讯充', '4', 20, '2015-04~2015-07', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Sublime、Webstorm'],
          ['华润三九服务营销系统', '11', 50, '2015-09~2016-07', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、SQLite Expert Personal 3'],
          ['九牧创意APP', '6', 30, '2016-09~2017-02', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、微信web开发者工具'],
          ['云掌', '3', 15, '2017-03~2017-05', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm'],
          ['新日电动车', '至今', 80, '2017-06~至今', 'WebAPP', '深圳市前海圆舟网络科技股份有限公司', 'GIT、Chrome、Webstorm、Visual Studio Code']
        ]
      ]
    ],
    projectData: [
      [
        [
          '1.主要负责web项目的开发和测试维护以及少量数据库开发和维护',
          '2.参与了项目需求分析，负责网站的第一次升级。使网站风格趋向扁平化，网站模块也更为完善',
          '3.新增了一些功能，优化。如：消息提醒、图片压缩水印',
          '4.对项目结构进行了整体分析。包括网站性能分析，页面响应速度分析，用户交互逻辑分析，页面兼容性分析等。并针对发现的问题对项目进行了进一步的优化调整',
          '5.新增微信订阅号'
        ]
      ],
      [
        [
          '1、该项目是卓越集团OA办公管理软件，包含，考勤管理，会议申请，文件发布，新闻资讯，等常用功能',
          '2、参与开发的有前端，后端，原生态，平台等多个同事。前端开发的两人，我主要负责红头文件，新闻资讯，公告模块的开发工作，及后期一些优化和bug修复工作',
          '3、上线时在现场协助客户安装并引导使用'
        ],
        [
          '1、该项目是深圳市奥特迅电力设备有限公司的移动端充电管理系统，主要包含了设备管理，预约服务，充电与泊车，账单与发票，资讯动态等模块。用户可以通过APP查询在线充电桩的状态，给自己的车辆预约充电，预约泊车，可通过手机支付结算并支付账单，管理发票信息，通过APP了解相关活动和资讯动态',
          '2、我负责开发了预约记录，泊车记录，充电记录，发票地址管理，投诉建议，常见问题，消息推送7和模块的开发工作。其中消息推送与原生对接，根据不同的通知类型打开目标页，展示推送信息',
          '3、负责后期维护和优化工作'
        ],
        [
          '1、该系统适用于其下的终端门店，经销商、分销商销售数据统计及客户数据统计，终端代表巡店管理，以及总部活动，地区活动，订单管理，拜访记录，客户数据统计，我的信息等多个一功能模块。用于规范员工的巡店行为，并在后台产生相应的积分，考核片区活动结果，后台计算积分，用于员工绩效考核的标准之一和礼品兑换。',
          '2、主导前端开发工作，参与需求评审，UE，UI评审，制定前端开发计划，接口文档',
          '3、负责开发我的终端，经销商，分销商，活动管理，签到拜访等核心模块的开发',
          '4、利用本地数据库实现暂存功能。使得终端代表可以将巡店数据保存到本地，减少在偏远地区巡店的压力。组装接口返回的数据，利用chart.js展示销售统计信息及同比数据',
          '5、分期分阶段上线，全程参与。项目开发中使用的框架和技术：echart.js，sqlit.js，sea.js，zepto.js等'
        ],
        [
          '1、该应用是九牧厨卫有限公司信息移动化转型过程中规划的项目之一，面相消费者，包含微信公众帐号和APP。主要包含创意活动，自由创意，新品试用，产品众筹，调查问卷等多个模块',
          '2、主导前端开发工作，参与需求评审，UE，UI评审，制定前端开发计划，接口文档',
          '3、负责首页，新品试用，产品重酬模块的开发，及调查问卷结果报表的气泡图和雷达图呈现',
          '4、bug修复。项目开发中使用的框架和技术：echart.js，jquery.js，md5.js，sea.js，sui.js，swiper.js，zepto.js等'
        ],
        [
          '1、该应用是九牧厨卫有限公司信息移动化转型过程中规划的项目之一，主导智能家居，对接九牧厨卫的智能设备',
          '2、对接的三个系列智能设备中，参与开发了对接智能浴缸的工作',
          '3、项目bug修复',
          '4、项目开发中使用的框架和技术：vue，webpack，node.js，mui，less等'
        ],
        [
          '1、新日共享电单车是新日股份布局共享单车的重要一环。通过和酒店，大学合作，连接共享目的地。',
          '2、参与开发了登录，注册，个人信息认证，报障，举报，我的行程等模块',
          '3、项目bug修复，优化和完善',
          '4、项目开发中使用的框架和技术：公司自有框架，less等'
        ]
      ]
    ],
    planning: {
      target: 'changsha'
    }
  },
  swiper: {
    op: null,
    allowChangePage: false,
    page: [{
      flag: 'introduction'
    }, {
      flag: 'workExperience'
    }, {
      flag: 'projectExperience'
    }, {
      flag: 'Self-evaluation'
    }, {
      flag: 'contactMe'
    }]
  }
};
export default {
  globalData
};
