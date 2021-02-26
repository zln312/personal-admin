/*
 * @Author: your name
 * @Date: 2021-02-03 23:25:18
 * @LastEditTime: 2021-02-26 19:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\api.js
 */
/*
 * @Author: your name
 * @Date: 2021-02-03 23:25:18
 * @LastEditTime: 2021-02-03 23:49:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\api.js
 */
 const getArticleList = '/article/list'
 function getArticleById(id){
    return `/article/${id}`
 }
 const getArticleByTag = '/article/tag/{id}'
 const pushArticle = '/article'

 const getTagList = '/tag'
 function tagHandleById(id){
   return `/tag/${id}`
 }
 const pushTag = "/tag"

export default {
  getArticleList,
  getArticleById,
  getArticleByTag,
  pushArticle,
  getTagList,
  tagHandleById,
  pushTag
}