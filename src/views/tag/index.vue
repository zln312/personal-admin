<!--
 * @Author: your name
 * @Date: 2021-02-25 22:43:37
 * @LastEditTime: 2021-02-26 19:44:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\tag\index.vue
-->
<template>
  <div>
    <el-button type="primary" @click="add">新增</el-button>
    <el-table :data="list" style="width: 100%" border>
      <el-table-column prop="id" label="id" width="50"></el-table-column>
      <el-table-column prop="name" label="name" width="200"></el-table-column>
      <el-table-column label="handle">
        <template slot-scope="scope">
          <el-button type="primary" @click="del(scope.row.id)">删除</el-button>
          <el-button type="primary" @click="update(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import message from "@/utils/message";
export default {
  name: "Tag",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.initView();
  },
  methods: {
    initView() {
      this.$http.get(this.$api.getTagList).then((res) => {
        this.list = res.data;
      });
    },
    del(e) {
      const f = () => {
        this.$http.del(this.$api.tagHandleById(e)).then((res) => {
          if (res.code === 200) {
            this.initView();
          }
        });
        console.log("aaaa");
      };
      message(this, "删除", f);
    },
    add() {
      this.$prompt("请输入标签名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$http.post(this.$api.pushTag,{"name":value}).then(res=>{
            if(res.code==200){
              this.$message({
              type: "success",
              message: `添加标签${value}成功`
            });
            this.initView()
            }else{
                 this.$message({
              type: "error",
              message: `添加标签${value}失败`
            });
            }
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    update(e){
      this.$prompt("修改标签名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue:e.name
      })
        .then(({ value }) => {
          this.$http.put(this.$api.pushTag,{"id":e.id,"name":value}).then(res=>{
            if(res.code==200){
              this.$message({
              type: "success",
              message: `修改标签成功`
            });
            this.initView()
            }else{
                 this.$message({
              type: "error",
              message: `修改标签失败`
            });
            }
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    }
  },
};
</script>

<style></style>
