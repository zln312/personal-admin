<!--
 * @Author: your name
 * @Date: 2021-02-10 14:25:57
 * @LastEditTime: 2021-02-19 00:07:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\articleList.vue
-->
<template>
  <div>
    <el-button
      type="primary"
      size="small"
      icon="el-icon-document-add"
      @click="add"
      >新建</el-button
    >
    <article-table
      :list="list"
      @show="show"
      @edit="edit"
      @del="del"
    ></article-table>
    <pagination
      @page-change="pageChange"
      :pageSize="pageSize"
      :totalSize="totalSize"
      :currentPage="currentPage"
    ></pagination>
  </div>
</template>

<script>
import articleTable from "./components/table";
import pagination from "./components/pagination";
import message from "../../utils/message";
export default {
  name: "articleList",
  components: {
    articleTable,
    pagination,
  },
  data() {
    return {
      list: [],
      pageSize: 5,
      totalSize: 10,
      currentPage: 1,
    };
  },
  created() {
    this.getArticleList(this.pageSize, 1).then((res) => {
      this.totalSize = res.totalSize;
      this.currentPage = res.pageNum;
    });
  },
  computed:{
    delCurrentPage(){
      return this.totalSize%this.pageSize==1?this.currentPage-1:this.currentPage;
    }
  },
  mounted() {},
  methods: {
    getArticleList(size, num) {
      return new Promise((resolve) => {
        this.$http
          .post(this.$api.getArticleList, { pageSize: size, pageNum: num })
          .then((res) => {
            this.list = res.data.content;
            resolve(res.data);
          });
      });
    },

    pageChange(e) {
      this.getArticleList(this.pageSize, e);
      this.currentPage=e;
    },

    show(e) {
      this.$router.push(`/article/${e}/show`);
    },
    edit(e) {
      this.$router.push(`/article/${e}/edit`);
    },
    add() {
      this.$router.push("/article/new/add");
    },
    del(e) {
      const f = () => {
        this.$http.del(this.$api.getArticleById(e)).then((res) => {
          this.getArticleList(this.pageSize,this.delCurrentPage).then((res) => {
            this.totalSize = res.totalSize;
            this.currentPage = res.pageNum;
          });
          console.log(res);
        });
      };
      message(this, "删除", f);
    },
  },
};
</script>

<style></style>
