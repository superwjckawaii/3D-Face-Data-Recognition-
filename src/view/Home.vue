<script setup>
import { ref } from 'vue'
import { Opportunity, StarFilled, Checked } from '@element-plus/icons-vue'
import { getHomeChartData, getVisit } from '../api/data.js'
import * as echarts from 'echarts'
import { useSize } from 'element-plus'

const tt = "系统功能介绍："
const info_ = "本项目旨在建立一个完整完善的系统，提供一种可准确确定三维颜面解剖标志点的功能，复现并完善用多视图堆叠沙漏神经网络（Multi-view stacked hourglass convolutional neural networks，后简称“MSH-CNN”）结合赋权普氏分析算法的方法实现三维颜面正中矢状平面的自动构建。"
const info = ref(info_)
const visit_num = ref(0)
const run_num = ref(0)

getVisit().then(res => {
  visit_num.value = res.data.msg[1]
  run_num.value = res.data.msg[0]
})
getHomeChartData().then(res => {
  //console.log(res);
  const timeData = [];
  const ChartTime = Object.keys(res.data.data);
  ChartTime.forEach(key => {
    timeData.push(key)
  });
  const numData = [];
  const ChartNum = Object.values(res.data.data);
  ChartNum.forEach(key => {
    numData.push(key)
  });
  //Echart参数设置
  const option = {
    title: {
      text: '网站访问记录'
    },
    xAxis: {
      data: timeData
    },
    yAxis: {},//auto
    legend: {
      data: ['访问人次']
    },
    series: {
      name: '访问人次',
      type: 'line',
      label: {
        show: false,
        fontSize: '22',
        position: 'center',
        formatter: function(param) {
            return '访问人次:'+param.data;
          },
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold',
          formatter: function(param) {
            return '访问人次'+param.data;
          },
        }
      },
      itemStyle: {
        fontSize: '22',
      },
      data: numData,
      symbolSize: 10,
    }
  };

  const E = echarts.init(document.getElementById('myEcharts'));
  E.setOption(option);

  const option2 = {
    backgroundColor: '#fff',
    title: {
      left: 'center',
      text: '用户评价'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['一星', '二星', '三星', '四星', '五星'],
      fontSize: '20',
    },
    series: {
      name: '满意度',
      type: 'pie',
      avoidLabelOverlap: false,
      radius: ['40%', '70%'],     //半径
      //roseType: 'angle',
      labelLine: {
        show: false,
      },
      label: {
        show: false,
        fontSize: '22',
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold'
        }
      },
      data: [{ name: '一星', value: 180 },
      { name: '二星', value: 50 },
      { name: '三星', value: 114 },
      { name: '四星', value: 1122 },
      { name: '五星', value: 823 }
      ]
    }
  };
  const E2 = echarts.init(document.getElementById('pieChart'));
  E2.setOption(option2);
});
</script>

<template>
  <el-row class="home" :gutter="20" style="height:100%; width:100%;">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover" style="height:100%;">
        <div style="text-align:center;">
          <img src="../assets/logo2.jpeg" style="width:260px;height:260px"/>
        </div>
        <div class="introduction">
          <h2>{{ tt }}</h2>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ info }}</h3>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具体操作参看操作文档。</h2>
          <div id="pieChart" style="height: 360px;width: 400px;margin-left:70px;margin-top:10px;"></div>
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
            <p>访问人次:{{ visit_num }}</p>
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
          <div style="height: 600px;width: 1100px;margin-left: 20px;margin-top: 20px;" id="myEcharts"></div>
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
