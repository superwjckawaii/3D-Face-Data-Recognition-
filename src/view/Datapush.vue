<script lang="ts" setup>
import { AddLocation } from '@element-plus/icons'
import { ref, getCurrentInstance } from 'vue'
import { getImage, executeFile, baseUrl, FindFile, DeleteFile } from '../api/data.js'
import type {
  UploadFile,
  ElUploadProgressEvent,
  ElFile,
} from 'element-plus/es/components/upload/src/upload.type'
interface RawFile {
  name: string
  url: string
}
const info_ = ref("支持相关的三维数据格式的面部数据文件上传（obj格式）,右方展示图片：")
const fileList = ref<RawFile[]>([])
const imageUrl = ref('')
const upUrl = baseUrl + "Datapush"
const dialogImageUrl = ref('')
const fileArray = ref(new Array())
const loading = ref(false)
const PictureData = ref(new Array())
const PicVersion = ref(0)
RefreshFileArray()
function RefreshFileArray() {
  FindFile().then(res => {
    //console.log(res.data.data)
    PictureData.value = []
    fileArray.value = []
    for (var i = 0; i < res.data.data['obj'].length; i++) {
      if (res.data.data['hasMtl'])
        fileArray.value.push({ name: res.data.data['obj'][i], time: res.data.data['objTime'][i], hasMtl: true, hasRe: false, url: baseUrl + "pushMtl?name=" + res.data.data['obj'][i] })
      else fileArray.value.push({ name: res.data.data['obj'][i], time: res.data.data['objTime'][i], hasMtl: false, hasRe: false, url: baseUrl + "pushMtl?name=" + res.data.data['obj'][i] });

    }

    res.data.data['other'].forEach(key => {
      PictureData.value.push({ name: key })
    })
    fileArray.value.push()
  })
}
function DeletePic(Picname) {
  DeleteFile(Picname).then(res => {
    var index;
    for (var i = 0; i < PictureData.value.length; i++) {
      if (PictureData.value[i]['name'] == Picname) {
        index = i
        break
      }
    }
    PictureData.value.splice(index, 1)
  })
}
const handleAvatarSuccess = (res: ElUploadProgressEvent, file: UploadFile) => {
  /*var myDate = new Date()
  fileArray.value.push({ name: file.name, time: myDate.toLocaleString(), hasMtl: false, hasRe: false, url: baseUrl + "pushMtl?name=" + file.name })
  console.log(fileArray.value)*/
  RefreshFileArray()
}
function executeButton(filename) {
  //console.log(filename)
  PicVersion.value += 1
  loading.value = true
  imageUrl.value = ""
  executeFile(filename).then(res => {
    imageUrl.value = baseUrl + "imageResult?name=" + filename + '?t=' + new Date().getTime()
    console.log(imageUrl.value)
    loading.value = false
    fileArray.value.forEach((item, index, array) => {
      if (item['name'] == filename) {
        item['hasRe'] = true
        return
      }
    })
  })
}
function mtlSuccess(fname) {
  /*fileArray.value.forEach((item, index, array) => {
    if (item['name'] == fname) {
      item['hasMtl'] = true
      return
    }
  })*/
  RefreshFileArray()
}
function downLoad(fname) {
  window.location.href = baseUrl + "getObj?name=" + fname
}
function downLoadtxt(fname) {
  window.location.href = baseUrl + "getTxt?name=" + fname
}
function DeleteModel(fname) {
  DeleteFile(fname).then(res => {
    var index
    for (var i = 0; i < fileArray.value.length; i++) {
      if (fileArray.value[i]['name'] == fname) {
        index = i
        break
      }
    }
    fileArray.value.splice(index, 1)
  })
  DeleteFile(fname.slice(0, -4) + '.mtl')
  DeleteFile(fname.slice(0, -4) + '_landmarks.txt')
  DeleteFile(fname.slice(0, -4) + '_landmarks.vtk')
}
</script>

<template>
  <el-row class="home" :gutter="20" style="height:100%; width:100%;">
    <el-col :span="24" style="margin-top: 20px;">
      <el-table :data="fileArray" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%"
        v-loading="loading" height="360">
        <el-table-column prop="name" label="文件名" width="300px"></el-table-column>
        <el-table-column prop="time" label="上传时间" width="400px" sortable></el-table-column>
        <el-table-column label="材质上传" width="300px">
          <template v-slot="scope">
            <el-upload class="upload2" name="upload2" :action="scope.row.url" accept=".mtl" :limit="30"
              :on-success="(res, file) => { mtlSuccess(scope.row.name) }" :show-file-list="false">
              <el-button>上传对应mtl文件</el-button>
            </el-upload>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button @click="executeButton(scope.row.name)" :disabled="!scope.row.hasMtl">标志该文件</el-button>
            <el-button @click="downLoad(scope.row.name)" :disabled="!scope.row.hasRe">下载模型</el-button>
            <el-button @click="downLoadtxt(scope.row.name)" :disabled="!scope.row.hasRe">下载标志点</el-button>
            <el-button @click="DeleteModel(scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-card style="margin-top: 20px;">
        <el-col :span="8">
          <h2>图片文件</h2>
          <el-upload class="upload2" name="upload2" :action="upUrl" accept=".png,.jpg,.jpeg" :limit="30"
            :on-success="handleAvatarSuccess" :show-file-list="false">
            <el-button>上传图片文件</el-button>
          </el-upload>
          <el-table :data="PictureData" :default-sort="{ prop: '文件名', order: 'descending' }" style="width: 100%"
            height="770">
            <el-table-column prop="name" label="文件名" width="200px" sortable></el-table-column>
            <el-table-column label="操作" width="200px">
              <template v-slot="scope">
                <el-button @click="DeletePic(scope.row.name)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <h3>{{ info_ }}</h3>
          <el-upload class="upload" name="upload" :action="upUrl" accept=".obj" :show-file-list="false" multiple
            :limit="30" :file-list="fileList" :on-success="handleAvatarSuccess" style="margin-bottom:20px;">
            <el-button size="large" type="primary">
              <el-icon>
                <add-location></add-location>
              </el-icon>选取obj模型文件
            </el-button>
          </el-upload>
          <el-button size="large" type="primary" @click="RefreshFileArray()">本地文件刷新</el-button>
        </el-col>
        <el-col :span="10">
          <viewer :images="imageUrl">
            <img v-if="imageUrl" :src="imageUrl" :key="PicVersion"
              style="width:400px;height:400px; margin-top: 20px;margin-bottom:20px;" />
          </viewer>
          <h3 v-if="imageUrl">若显示结果有误，检查模型、材质、图片文件是否匹配！</h3>
        </el-col>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
</style>