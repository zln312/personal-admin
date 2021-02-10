/*
 * @Author: your name
 * @Date: 2021-02-05 22:26:46
 * @LastEditTime: 2021-02-10 14:51:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\routes.js
 */

const layout = ()=> import("../layout/Layout.vue")
const edit = () => import("../views/edit.vue")
const articleList = () => import("../views/articleList.vue")
const routes = [
  {
    path: "/",
    component: layout,
    children: [{ path: "edit", component: edit },
  {path:'articleList',component:articleList}
  ],
  },
];

export default routes;
