<!--
 * @Author: your name
 * @Date: 2021-02-06 22:17:06
 * @LastEditTime: 2021-02-09 23:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\components\nav_menu\index.vue
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div v-for="item in data" :key="item.title.index">
      <menu-node :item="item"></menu-node>
    </div>
  </el-menu>
</template>

<script>
import MenuNode from "./MenuNode";
export default {
  components:{
    MenuNode 
  },
  data() {
    return {
      data: [
        {
          title: { name: "我的文章1", icon: "el-icon-setting", index: "1-1" },
          items: [],
        },
        {
          title: { name: "编辑文章2", icon: "el-icon-menu", index: "1-2" },
          items: [],
        },
        {
          title: { name: "编辑文章4", icon: "el-icon-menu", index: "1-3" },
          items: [
            {
              title: { name: "第二层", icon: "", index: "1-3-1" },
              items: [
                {
                  title: { name: "编辑文章2", icon: "", index: "1-3-1-1" },
                  items: [
                    {
                      title: { name: "编辑文章2", icon: "", index: "1-3-1-1" },
                      items: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    edit() {
      console.log("edit");
    },
  },
};
</script>
<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
