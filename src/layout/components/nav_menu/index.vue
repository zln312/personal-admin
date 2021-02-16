<!--
 * @Author: your name
 * @Date: 2021-02-06 22:17:06
 * @LastEditTime: 2021-02-16 23:12:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\components\nav_menu\index.vue
-->
<template>
  <el-menu
    default-active="1-3"
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
  components: {
    MenuNode,
  },
  data() {
    return {
      data: [
        {
          title: { name: "首页", icon: "el-icon-s-home", index: "/" },
          items: [],
        },
        {
          title: { name: "文章管理", icon: "el-icon-menu", index: "edit" },
          items: [
            {
              title: { name: "文章列表", icon: "", index: "/articleList" },
              items: [],
            },
          ],
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
