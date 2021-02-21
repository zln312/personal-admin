<!--
 * @Author: your name
 * @Date: 2021-02-21 21:42:47
 * @LastEditTime: 2021-02-21 22:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\user\Login.vue
-->
<template>
  <div class="layout">
    <div class="contain">
      <el-input
        class="e_input"
        placeholder="请输入用户名"
        v-model="username"
        clearable
      >
      </el-input>
      <el-input
        class="e_input"
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      <el-button @click="login" type="primary">
        登陆
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username == "zln" && this.password == "znn714323486") {
        localStorage.setItem("isLogin", "ok");
        this.$router.replace("/");
      } else {
        console.log("用户不存在");
         this.$message.error('用户不存在');
      }
    },
  },
};
</script>

<style scoped>
.layout{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: brown;
}
.contain {
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 2px;

}
.e_input {
  margin-bottom: 20px;
}
</style>
