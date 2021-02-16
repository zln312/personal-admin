<!--
 * @Author: your name
 * @Date: 2021-02-15 19:12:08
 * @LastEditTime: 2021-02-15 19:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\articleList\components\pagination.vue
-->
<template>
  <el-pagination
    background
    layout="prev,pager,next,jumper"
    :total="totalSize"
    :page-size.sync="pageSize"
    :current-page="currentPage"
    @current-change="currentChange"
  ></el-pagination>
</template>

<script>
export default {
  name: "pagination",
  props:
    {
      pageSize:{
        type: Number,
        default:5
      },
      totalSize:{
        type: Number,
        default:10
      },
      currentPage:{
        type: Number,
        default:1
      }
    },
  methods:{
     currentChange(e) {
      this.$emit('page-change',e)
    },
  }
};
</script>

<style></style>
