/*
 * @Author: your name
 * @Date: 2021-02-05 22:21:14
 * @LastEditTime: 2021-04-12 19:35:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import store from "../store/index";
Vue.use(Router);
// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new Router({
  routes,
  mode: "history",
});
router.beforeEach((to, from, next) => {
  if (to.name != "login" && localStorage.getItem("isLogin") != "ok") {
    next({ name: "login" });
  } else {
    store.commit("addRout",to.path);
    next();
  }
});
export default router;
