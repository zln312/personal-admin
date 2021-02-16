<!--
 * @Author: your name
 * @Date: 2021-02-15 14:20:49
 * @LastEditTime: 2021-02-16 23:07:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\articleList\table.vue
-->
<template>
  <el-table :data="list" style="width: 100%" border>
    <el-table-column label="封面" width="110">
      <template slot-scope="scope">
        <img :src="scope.row.cover" alt="" width="90px" />
      </template>
    </el-table-column>
    <el-table-column prop="title" label="标题" width="300"> </el-table-column>
    <el-table-column prop="tag" label="标签" width="180"> </el-table-column>
    <el-table-column prop="intro" label="简介" width="300"> </el-table-column>
    <el-table-column prop="createTime" label="创建时间" width="100">
    </el-table-column>
    <el-table-column prop="updateTime" label="修改时间" width="100">
    </el-table-column>

    <el-table-column label="操作" width="300">
      <template slot-scope="scope">
        <el-button @click="show(scope.row.id)" type="primary" size="small" icon="el-icon-view"
          >查看</el-button
        >
        <el-button @click="edit(scope.row.id)" type="primary" size="small" icon="el-icon-edit"
          >编辑</el-button
        >
        <el-button @click="del(scope.row.id)" type="primary" size="small"  icon="el-icon-delete"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "articleTable",
  props: ["list"],
  methods: {
    show(e) {
      this.$emit("show", e);
    },
    edit(e) {
      this.$emit("edit", e);
    },
    del(e){
      this.$emit("del",e)
    }
  },
};
</script>

<style></style>
