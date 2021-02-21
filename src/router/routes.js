/*
 * @Author: your name
 * @Date: 2021-02-05 22:26:46
 * @LastEditTime: 2021-02-21 22:02:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\routes.js
 */

const layout = () => import("../layout/Layout.vue");
const edit = () => import("../views/article/index.vue");
const articleList = () => import("../views/articleList/index.vue");
const login = () => import("../views/user/UserLogin.vue")
const routes = [
  {
    path: "/",
    component: layout,
    children: [
      { path: "article/:id/:type", component: edit },
      { path: "articleList", component: articleList },
    ],
  },
  {
    path:"login",
    component: login,
    name:'login'
  }
];

export default routes;
