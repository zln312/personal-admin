<!--
 * @Author: your name
 * @Date: 2021-02-05 22:21:30
 * @LastEditTime: 2021-04-11 17:49:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\layout.vue
-->
<template>
  <div>
    <el-row>
      <el-col :span="4">
        <nav-menu @select="hanldeSelect"></nav-menu>
      </el-col>
      <el-col :span="20">
        <breadcrumb></breadcrumb>
        <tabs ref='tabs'></tabs>
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
  methods:{
    hanldeSelect(e){
    console.log(e)
    this.$refs.tabs.addTab(e)
    },
  }
};
</script>

<style></style>
