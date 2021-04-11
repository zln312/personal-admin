/*
 * @Author: your name
 * @Date: 2021-04-11 18:33:03
 * @LastEditTime: 2021-04-11 18:58:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new  Vuex.Store({
  state:{
    menuTitel:{
      "/":"首页",
      "/articleList":"文章列表",
      "/tag":"标签列表"
    }
  },

  mutations:{

  }
})
export default store