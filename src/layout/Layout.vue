<!--
 * @Author: your name
 * @Date: 2021-02-05 22:21:30
 * @LastEditTime: 2021-02-07 20:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\layout.vue
-->
<template>
  <div>
    <el-row>
      <el-col :span="4">
        <nav-menu></nav-menu>
      </el-col>
      <el-col :span="20">
        <breadcrumb></breadcrumb>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import breadcrumb from "./components/breadcrumb/index";
import navMenu from "./components/nav_menu/index";

export default {
  name: "layout",
  components: {
    breadcrumb,
    navMenu,
  },
};
</script>

<style></style>
