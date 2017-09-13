// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue';

/* 引入swiper */
require('swiper/dist/css/swiper.css');
Vue.use(VueAwesomeSwiper);

/* 注入全局组件：Echarts
* warm: 注释了插件中的计算属性，路径：\node_modules\vue2-echarts\src\ECharts\ECharts.vue
*/
Vue.component('ECharts', ECharts);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
