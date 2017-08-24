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
    name: 'Sa',
    url: 'http://ouptlygn0.bkt.clouddn.com/Robers1-200.jpg'
  },
  work: {
    skill: ['HMTL', 'CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vue', 'Webpack', 'Node.js', 'NPM', 'JQuery', 'Zepto.js', 'Swiper.js', 'EChart.js', 'SQLit', 'SUI', 'MUI', 'WebStorm', 'Sublime', 'Vusual Studio Code']
  },
  swiper: [{
    flag: 'introduction'
  }, {
    flag: 'work'
  }]
};
export default {
  globalData
};
