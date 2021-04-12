<!--
 * @Author: your name
 * @Date: 2021-02-05 22:21:30
 * @LastEditTime: 2021-04-12 20:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\layout.vue
-->
<template>
  <div>
    <el-row type="flex">
      <el-col :sm="4">
        <nav-menu></nav-menu>
      </el-col>
      <el-col :sm="20">
        <breadcrumb></breadcrumb>
        <tabs></tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import breadcrumb from "./components/breadcrumb/index";
import navMenu from "./components/nav_menu/index";
import tabs from "./components/tabs/index";

export default {
  name: "layout",
  components: {
    breadcrumb,
    navMenu,
    tabs
  },
};
</script>

<style></style>
