<!--
 * @Author: your name
 * @Date: 2021-02-07 20:00:16
 * @LastEditTime: 2021-02-08 12:13:04
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
    onEditorChange({html}){
      this.content = html
      console.log('editor change!', html );

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
