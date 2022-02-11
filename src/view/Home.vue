<script setup>
import { ref } from 'vue'
const tt="系统功能介绍："
const info_ = "本项目旨在建立一个完整完善的系统，提供一种可准确确定三维颜面解剖标志点的功能，复现并完善用多视图堆叠沙漏神经网络（Multi-view stacked hourglass convolutional neural networks，后简称“MSH-CNN”）结合赋权普氏分析算法的方法实现三维颜面正中矢状平面的自动构建。"
const info = ref(info_)

</script>

<template>
  <el-row class="home" :gutter="20" style="height:100%; width:100%;">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover" style="height:100%;">
        <div style="text-align:center;">
          <img src="../assets/logo.png" />
        </div>
        <div class="introduction">
          <h2>{{ tt }}</h2>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ info }}</h3>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      
    </el-col>
  </el-row>
</template>

<style>
.home{
  margin-bottom: auto;
}
</style>
