<!--
 * @Author: your name
 * @Date: 2021-02-07 20:00:16
 * @LastEditTime: 2021-03-17 21:41:38
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
import {quillEditor,Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
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
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              headers: (xhr) => {
                             xhr.setRequestHeader('Accept','*/*')
                             }, 
              action: 'http://localhost:8081/file/image',
              response: (res) => {
                console.log(res);
                return res.data
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
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

<style></style>
