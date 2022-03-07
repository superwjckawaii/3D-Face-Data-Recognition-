<script lang="ts" setup>
import { AddLocation } from '@element-plus/icons'
import { ref } from 'vue'
import { getImage, executeFile } from '../api/data.js'
import type {
  UploadFile,
  ElUploadProgressEvent,
  ElFile,
} from 'element-plus/es/components/upload/src/upload.type'
interface RawFile {
  name: string
  url: string
}
const fileList = ref<RawFile[]>([])
const imageUrl = ref('')
const dialogImageUrl = ref('')
const fileArray = ref(new Array());
const handleAvatarSuccess = (res: ElUploadProgressEvent, file: UploadFile) => {
  var myDate = new Date()
  fileArray.value.push({ name: file.name, time: myDate.toLocaleString() });
  //console.log(fileArray.value)
}
function executeButton(filename) {
  console.log(filename)
  executeFile(filename).then(res => {
    getImage().then(res => {
      /*const myBlob = new Blob([res.data], { type: 'image/jpeg' })
      const qrUrl = URL.createObjectURL(myBlob)*/
      imageUrl.value = "http://localhost:8000/api/imageResult"
    })
  })
}
</script>

<template>
  <el-row class="home" :gutter="20" style="height:100%; width:100%;">
    <el-col :span="24" style="margin-top: 20px;">
      <el-table
        :data="fileArray"
        :default-sort="{ prop: 'date', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="name" label="文件名"></el-table-column>
        <el-table-column prop="time" label="上传时间" sortable></el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button @click="executeButton(scope.row.name)">标志该文件</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-upload
        class="upload"
        name="upload"
        action="http://localhost:8000/api/Datapush"
        accept="*.*"
        :show-file-list="true"
        multiple
        :limit="3"
        :file-list="fileList"
        :on-success="handleAvatarSuccess"
      >
        <el-button size="large" type="primary" style="margin-top:20px;">
          <el-icon>
            <add-location></add-location>
          </el-icon>选取文件
        </el-button>
      </el-upload>
      <img v-if="imageUrl" :src="imageUrl" />
    </el-col>
  </el-row>
</template>

<style scoped>
</style>