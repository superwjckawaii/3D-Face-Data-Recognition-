<script setup >
import { ref } from "vue";
import { getLog, baseUrl, deleteLog } from "../api/data.js";
const logArray = ref(new Array());

getLogArray();
function getLogArray() {
  logArray.value = [];

  getLog().then((res) => {
    //console.log(res)
    for (var i = 0; i < res.data["name"].length; i++) {
      logArray.value.push({
        id: i + 1,
        name: res.data["name"][i],
        startTime: res.data["startTime"][i],
        endTime: res.data["endTime"][i],
      });
    }
  });
}
function DeleteLog(logId) {
  deleteLog(logId).then((res) => {
    setTimeout(getLogArray(),500);
  });
}
</script>

<template>
  <el-row class="home" :gutter="20" style="height: 100%; width: 100%">
    <el-col :span="24" style="margin-top: 20px; width: 100%">
      <h2>运行记录</h2>
      <el-button @click="getLogArray()">Refresh</el-button>
      <el-table
        :data="logArray"
        :default-sort="{ prop: 'id', order: 'descending' }"
        style="margin-top: 20px; width: 100%"
        height="900"
      >
        <el-table-column
          prop="id"
          label="任务序号"
          width="200px"
          sortable
        ></el-table-column>
        <el-table-column
          prop="name"
          label="文件名"
          width="300px"
          sortable
        ></el-table-column>
        <el-table-column
          prop="startTime"
          label="开始时间"
          width="400px"
          sortable
        ></el-table-column>
        <el-table-column
          prop="endTime"
          label="完成时间"
          width="400px"
          sortable
        ></el-table-column>
        <el-table-column label="操作" width="500px">
          <template v-slot="scope">
            <el-button @click="DeleteLog(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<style scoped>
</style>