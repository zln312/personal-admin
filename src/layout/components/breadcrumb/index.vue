<!--
 * @Author: your name
 * @Date: 2021-02-06 22:17:00
 * @LastEditTime: 2021-04-11 19:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\components\breadcrumb\index.vue
-->
<template>
  <div class="container">
    <el-button type="warning" class="exit_btn" @click="exit">退出登陆</el-button>
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
.exit_btn{
  position: absolute;
  right: 30px;
  top:7px;
}
</style>
