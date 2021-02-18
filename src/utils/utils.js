/*
 * @Author: your name
 * @Date: 2021-02-19 00:17:22
 * @LastEditTime: 2021-02-19 00:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\utils\utils.js
 */
export function formatDate(time) {
  console.log(time);
  const now = new Date(time),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}