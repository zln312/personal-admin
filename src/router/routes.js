/*
 * @Author: your name
 * @Date: 2021-02-05 22:26:46
 * @LastEditTime: 2021-02-07 19:59:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\router\routes.js
 */

import layout from "../layout/Layout.vue";
import edit from "../views/edit.vue";
const routes = [
  {
    path: "/",
    component: layout,
    children: [{ path: "edit", component: edit }],
  },
];

export default routes;
