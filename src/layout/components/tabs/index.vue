<!--
 * @Author: your name
 * @Date: 2021-04-11 16:27:20
 * @LastEditTime: 2021-04-12 20:26:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\components\tabs\index.vue
-->
<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="item in editableTabss"
        :key="item"
        :label="$store.state.menuTitel[item]"
        :name="item"
      >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        routList:['/'],
        editableTabs: [{
          title: '首页',
          name: '/',
        }],
        editableTabss:this.$store.state.list
      }
    },
    computed:{
      editableTabsValue:{
        get(){
          return this.$store.state.routes
        },
        set(value){
          this.$store.commit('updateRoutes',value)
        }
      }
    },
    methods: {
      removeTab(targetName) {
        if(targetName==='/') return;
        let tabs = this.$store.state.list;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab === targetName) {
              console.log('aaaaaaa');
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab;
              }
            }
          });
        }
        this.$store.commit('delRout',targetName)
        this.$router.push(activeName)
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },
      tabClick(e){
        this.$router.push(e.name)
      }
    },
  }
</script>

<style></style>
