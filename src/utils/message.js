/*
 * @Author: your name
 * @Date: 2021-02-18 22:29:22
 * @LastEditTime: 2021-02-18 23:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\utils\confirm.js
 */

export default function(that,text,fun) {
  that.$confirm(`确认${text}?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "success",
  })
    .then(() => {
      fun();
      that.$message({
        type: "success",
        message: `${text}成功!`,
      });
    })
    .catch(() => {
      that.$message({
        type: "info",
        message: `${text}失败`,
      });
    });
  }