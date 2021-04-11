<!--
 * @Author: your name
 * @Date: 2021-04-11 16:27:20
 * @LastEditTime: 2021-04-11 19:22:21
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
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
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
        editableTabsValue: '/',
        routList:['/'],
        editableTabs: [{
          title: '首页',
          name: '/',
        }],
      }
    },
    methods: {
      addTab(e) {
        console.log("editableTabs:",this.editableTabs);
        console.log("tabs:",this.routList);

        if(this.routList.indexOf(e)>-1){
          this.editableTabsValue=e;
          console.log('标签已经存在',e);
          return;
        }
        this.routList.push(e);
        this.editableTabs.push({
          title: this.$store.state.menuTitel[e],
          name: e,
        });
        this.editableTabsValue = e;
      },
      removeTab(targetName) {
        if(targetName==='/') return;
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        tabs.forEach((tab,index)=>{
          if(tab.name===targetName){
              this.routList.splice(index,1)
          }
        })
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.$router.push(activeName)
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },
      tabClick(e){
        console.log(e.name);
        this.$router.push(e.name)
      }
    },
  }
</script>

<style></style>
