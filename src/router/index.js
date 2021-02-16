/*
 * @Author: your name
 * @Date: 2021-02-05 22:21:14
 * @LastEditTime: 2021-02-15 21:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router);

const router = new Router({
  routes,
  mode:'history'
})
export default router
