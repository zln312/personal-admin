/*
 * @Author: your name
 * @Date: 2021-02-05 22:26:46
 * @LastEditTime: 2021-02-10 14:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\routes.js
 */

import layout from "../layout/Layout.vue";
import edit from "../views/edit.vue";
import articleList from "../views/articleList.vue"
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
