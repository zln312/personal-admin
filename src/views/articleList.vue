<!--
 * @Author: your name
 * @Date: 2021-02-10 14:25:57
 * @LastEditTime: 2021-02-10 14:27:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\articleList.vue
-->
<template>
  <div>
    articleList
  </div>
</template>

<script>
export default {
  name:'articleList',
  created(){
    this.$http.get(this.$api.getArticleList).then(res=>{
       this.list = res.data;
       console.log(res.data);
    })
  }
  
}
</script>

<style>

</style>
