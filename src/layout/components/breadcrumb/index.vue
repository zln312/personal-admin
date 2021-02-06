<!--
 * @Author: your name
 * @Date: 2021-02-06 22:17:00
 * @LastEditTime: 2021-02-06 23:37:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\components\breadcrumb\index.vue
-->
<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.container{
  background-color:darkgray;
  padding: 20px;
}
</style>
