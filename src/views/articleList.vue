<!--
 * @Author: your name
 * @Date: 2021-02-10 14:25:57
 * @LastEditTime: 2021-02-14 22:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\articleList.vue
-->
<template>
  <el-table :data="list" style="width: 100%"  border>
    <el-table-column label="封面" width="110">
      <template slot-scope="scope">
        <img :src="scope.row.cover" alt="" width="90px">
      </template>
    </el-table-column>
    <el-table-column prop="title" label="标题" width="300"> </el-table-column>
    <el-table-column prop="tag" label="标签" width="180"> </el-table-column>
    <el-table-column prop="intro" label="简介" width="300"> </el-table-column>
    <el-table-column prop="createTime" label="创建时间" width="100"> </el-table-column>
    <el-table-column prop="updateTime" label="修改时间" width="100"> </el-table-column>

    <el-table-column label="操作" width="300">
       <template slot-scope="scope">
         <el-button @click="look(scope.row.id)" type="primary" size="small">查看</el-button>
         <el-button @click="look(scope.row.id)" type="primary" size="small">编辑</el-button>
         <el-button @click="look(scope.row.id)" type="primary" size="small">删除</el-button>
       </template>  
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "articleList",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$http.get(this.$api.getArticleList).then((res) => {
      this.list = res.data;
      console.log(res.data);
    });
  },
  methods:{
    look(e){
      console.log(e);
    }
  }
};
</script>

<style>
</style>
