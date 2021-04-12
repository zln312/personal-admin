/*
 * @Author: your name
 * @Date: 2021-04-11 18:33:03
 * @LastEditTime: 2021-04-12 20:25:23
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
    },
    list:['/'],
    routes:'/'
  },

  mutations:{
    updateRoutes(state,v){
      state.routes=v
    },
    addRout(state,r){
      state.routes=r;
      if(state.list.indexOf(r)>-1) return
      state.list.push(r)
    },
    delRout(state,r){
      state.list.forEach((e,index) => {
        if(r===e){
          state.list.splice(index,1)
        }
      });
    }

  }
})
export default store