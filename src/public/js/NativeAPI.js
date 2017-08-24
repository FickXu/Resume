/**
 * @file
 * @author xuwenlong
 * @date 2017-05-10
 */
import Vue from 'vue';
import resource from 'vue-resource';

Vue.use(resource);

define(function (require, exports, module) {
  console.log('nativeApi:', require, exports, module);
  function ajax (param) {
    Vue.http(param).then(function (response) {
      console.log(response);
    });
  };
  var nativeApi = {
    ajax: ajax
  };
  module.exports = nativeApi;
});
