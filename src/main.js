/*
 * @Author: your name
 * @Date: 2021-02-05 22:05:35
 * @LastEditTime: 2021-02-10 14:25:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import http from './utils/http'
import api from './utils/api'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = http;
Vue.prototype.$api = api;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
