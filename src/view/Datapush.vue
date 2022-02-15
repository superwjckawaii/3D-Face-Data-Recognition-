<script lang="ts" setup>
import { AddLocation } from '@element-plus/icons'
import {pushFileData} from '../api/data.js'
import { ref } from 'vue'
import type {
  UploadFile,
  ElUploadProgressEvent,
  ElFile,
} from 'element-plus/es/components/upload/src/upload.type'
interface RawFile {
  name: string
  url: string
}

const fileList = ref<RawFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
const imageUrl = ref('')
const handleAvatarSuccess = (res: ElUploadProgressEvent, file: UploadFile) => {
  imageUrl.value = URL.createObjectURL(file.raw)
  console.log("PicUrl(Blob)!")
  console.log(file)
  console.log(imageUrl.value)
  if(window.navigator.msSaveOrOpenBlob){
    window.navigator.msSaveOrOpenBlob(file,file.name)
  }else{
      var a=document.createElement("a")
      a.href=imageUrl.value;
      a.download="./"+file.name
      document.body.appendChild(a)
      a.click()
      console.log("保存成功！")
  }
  window
}
const beforeUpload = (event, file, fileList) => {
    console.log(event)
};
</script>

<template>
    <el-row class="home" :gutter="20" style="height:100%; width:100%;">
        <el-col :span="24" style="margin-top: 20px;">
            <el-upload 
            class="upload" 
            action="/Datapush/FileData"
            :before-upload="beforeUpload"
            accept="*.*" 
            :show-file-list="true" 
            multiple 
            :limit="3"
            :file-list="fileList"
            :on-success="handleAvatarSuccess"
            >
                <el-button size="large" type="primary">
                    <el-icon>
                        <add-location></add-location>
                    </el-icon>选取文件
                </el-button>
            </el-upload>
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        </el-col>
    </el-row>
</template>

<style scoped>
</style>