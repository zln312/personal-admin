<!--
 * @Author: your name
 * @Date: 2021-02-15 21:09:07
 * @LastEditTime: 2021-02-27 23:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\edit\index.vue
-->
<template>
  <div>
    <div>
      标题：
      <el-input type="text" size="medium" v-model="data.title"></el-input>
    </div>
    <div>
      分类：
      <el-checkbox-group v-model="checkboxGroup1" size="small" @change="checkChange">
        <span v-for="item in tags" :key="item.id">
          <el-checkbox  :label="item.id" border>{{item.name}}</el-checkbox>
        </span>
      </el-checkbox-group>
    </div>
    <div>
      简介：
      <el-input type="text" size="medium" v-model="data.intro"></el-input>
    </div>
    <div>
      封面：
    </div>
    <img :src="data.cover" alt="" width="100px" />
    <div>
      正文：
      <edit :data="data.content" @updateVal="updateVal"></edit>
    </div>
    <el-button v-if="type != 'show'" type="primary" @click="open"
      >提交</el-button
    >
  </div>
</template>

<script>
import edit from "./components/edit";
export default {
  name: "Varticle",
  components: {
    edit,
  },
  data() {
    return {
      type: "",
      content: "",
      input: "",
      checkboxGroup1: [],
      tags: [],
      data: {
        cover: "",
        content: "",
        title: "",
        intro: "",
        tagIds: [],
      },
    };
  },
  created() {
    this.$http.get(this.$api.getTagList).then((res) => {
      this.tags = res.data;
      console.log(res.data);
    });
  },
  mounted() {
    const id = this.$route.params.id;
    const type = this.$route.params.type;
    this.type = type;
    console.log(typeof id);
    if (id === "new") {
      return;
    }

    this.$http.get(this.$api.getArticleById(id)).then((res) => {
      console.log(res.data);
      this.data = res.data;
      if(res.data.tagIds){
      this.checkboxGroup1 = res.data.tagIds
      }
    });
  },

  methods: {
    updateVal(e) {
      this.data.content = e;
    },
    open() {
      this.$confirm("确定提交?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success",
      })
        .then(() => {
          this.submit();
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
    submit() {
      console.log(this.data);
      if (this.type === "edit") {
        console.log("提交的参数",this.data);
        this.$http.put(this.$api.pushArticle, this.data).then((res) => {
          console.log(res);
          this.$router.push("/articleList");
        });
      } else {
        this.$http.post(this.$api.pushArticle, this.data).then((res) => {
          console.log(res);
          this.$router.push("/articleList");
        });
      }
    },
    checkChange(e){
      console.log(e);
      this.data.tagIds=e;
    }
  },
};
</script>

<style></style>
