/*
 * @Author: your name
 * @Date: 2021-02-05 22:26:46
 * @LastEditTime: 2021-04-11 17:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\routes.js
 */

const layout = () => import("../layout/Layout.vue");
const edit = () => import("../views/article/index.vue");
const articleList = () => import("../views/articleList/index.vue");
const login = () => import("../views/user/UserLogin.vue")
const tag = () => import("../views/tag/index.vue")
const home = () => import("../views/home/index.vue")

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      { path: "article/:id/:type", component: edit },
      { path: "articleList", component: articleList },
      { path: "tag", component: tag },
      { path: "/", component: home },
    ],
  },
  {
    path:"login",
    component: login,
    name:'login'
  }
];

export default routes;
