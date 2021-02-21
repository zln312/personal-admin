<!--
 * @Author: your name
 * @Date: 2021-02-06 22:17:00
 * @LastEditTime: 2021-02-21 22:12:42
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
    <el-button @click="exit">退出登陆</el-button>
  </div>
</template>

<script>
export default {
  methods:{
     exit(){
      localStorage.removeItem('isLogin');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.container{
  background-color:darkgray;
  padding: 20px;
}
</style>
