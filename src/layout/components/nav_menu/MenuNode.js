/*
 * @Author: your name
 * @Date: 2021-02-09 17:17:08
 * @LastEditTime: 2021-02-09 23:52:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\layout\components\nav_menu\test.js
 */

const iconNode ={
  name:'icon',
  props:['val'],
  render(){
    if(this.val){
      return (
        <i class={this.val}></i>
      )
    }else {
      return null;
    }
  }
}
export default {
  name: "MenuNode",
  props: ["item"],

  render(createElement) {
    const { item } = this;
    if (item.items.length > 0) {
      return createElement(
        "el-submenu",
        {
          attrs: {
            index: item.title.index,
          },
        },
        [
          createElement(
            "template",
            {
              slot: "title",
            },
            [
              <iconNode val={item.title.icon}></iconNode>,
              createElement("span", item.title.name),
            ]
          ),
          createElement(
            "div",
            item.items.map(function(one) {
              return <MenuNode item={one}></MenuNode>;
            }),
          ),
        ]
      );
    } else {
      return (
        <el-menu-item index={item.title.index}>
          <iconNode val={item.title.icon}></iconNode>
          <span slot="title">{item.title.name}</span>
        </el-menu-item>
      );
    }
  },
};
