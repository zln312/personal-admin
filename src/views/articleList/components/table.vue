<!--
 * @Author: your name
 * @Date: 2021-02-15 14:20:49
 * @LastEditTime: 2021-02-19 00:47:59
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
    <el-table-column  label="创建时间" width="100">
      <template slot-scope="scope">
        {{  scope.row.createTime | formatDate}}
      </template>
    </el-table-column>
    <el-table-column label="修改时间" width="100">
        <template slot-scope="scope">
        {{  scope.row.updateTime | formatDate}}
      </template>
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
// import formatDate from '../../../utils/utils'
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
  filters:{
    formatDate(val){
        const now = new Date(val),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }
  }
};
</script>

<style></style>
