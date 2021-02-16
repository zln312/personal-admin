<!--
 * @Author: your name
 * @Date: 2021-02-07 20:00:16
 * @LastEditTime: 2021-02-16 22:06:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-admin\src\views\edit.vue
-->
<template>
<div>
<quill-editor
    ref="myQuillEditor"
    v-model="content"
    :options="editorOption"
    @change="onEditorChange($event)"
  />
</div>
  
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
export default {
  props:{
    data:String
  },
  components:{
    quillEditor
  },
  data(){
    return {
      content: this.data,
      editorOption: {
      }
    }
  },
  watch:{
    data(val){
      this.content = val
    }
  },
  methods:{
    onEditorChange({html}){
      this.content = html
      this.$emit('updateVal',html)
      console.log('editor change!', html );
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },


}
</script>

<style>

</style>
