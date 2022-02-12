<script setup>
import { ref } from 'vue'
import { Opportunity, StarFilled, Checked } from '@element-plus/icons-vue'
import {getHomeChartData} from '../api/data.js'

const tt = "系统功能介绍："
const info_ = "本项目旨在建立一个完整完善的系统，提供一种可准确确定三维颜面解剖标志点的功能，复现并完善用多视图堆叠沙漏神经网络（Multi-view stacked hourglass convolutional neural networks，后简称“MSH-CNN”）结合赋权普氏分析算法的方法实现三维颜面正中矢状平面的自动构建。"
const info = ref(info_)
const visit_num = ref(114)
const run_num = ref(514)
const nn=ref(14)
getHomeChartData().then(res=>{
  console.log(res.data.data.text["野兽"]);
  nn.value=res.data.data.text["野兽"]
});
</script>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js"></script>

<template>
  <el-row class="home" :gutter="20" style="height:100%; width:100%;">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover" style="height:100%;">
        <div style="text-align:center;">
          <img src="../assets/logo.png" />
        </div>
        <div class="introduction">
          <h2>{{nn}}{{ tt }}</h2>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ info }}</h3>
        </div>
      </el-card>
    </el-col>
    <el-col class="main-r" :span="16" style="margin-top: 20px;">
      <div style="height:100px;display:flex;">
        <el-card style="padding:0;width:50%;display:flex;">
          <el-icon style="background-color: rgb(104, 199, 236);" size="100px">
            <star-filled></star-filled>
          </el-icon>
          <div>
            <p>访问人数:{{ visit_num }}</p>
          </div>
        </el-card>
        <el-card style="padding:0;width:50%;margin-left:20px;display:flex;">
          <el-icon style="background-color: rgb(104, 199, 236);" size="100px">
            <checked></checked>
          </el-icon>
          <div>
            <p>运行次数:{{ run_num }}</p>
          </div>
        </el-card>
      </div>
      <div class="graph" style="margin-top: 20px;height:760px;">
        <el-card style="height:760px;">

        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="less">
.home {
  margin-bottom: auto;
}
.main-r {
  .el-card__body {
    padding: 0;
    display: flex;
    div {
      margin-left: 20px;
    }
  }
  p {
    font-size: 35px;
    line-height: 100px;
    text-align: center;
    margin: 0%;
  }
}
</style>
