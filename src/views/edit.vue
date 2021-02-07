<!--
 * @Author: your name
 * @Date: 2021-02-07 20:00:16
 * @LastEditTime: 2021-02-07 23:23:54
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
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  />
  <quill-editor
    :content="content"
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
  components:{
    quillEditor
  },
  data(){
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {

      }
    }
  },
  methods:{
    onEditorBlur(quill) {
      console.log('editor blur!',quill);
    },
    onEditorFocus(quill){
      console.log('editor focus!', quill);
    },
    onEditorReady(quill){
      console.log('editor ready', quill);
    },
    onEditorChange({quill,html,text}){
      console.log('editor change!',quill,html,text);
      this.content = html
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted(){
    console.log('this is current quill instance object',this.editor);
  }

}
</script>

<style>

</style>
