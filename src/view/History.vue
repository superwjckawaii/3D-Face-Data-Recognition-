<script setup>
import { ref } from 'vue'
import { getHistoryData, getOriImg, getReImg, getHistoryChartData } from '../api/data.js'
import * as echarts from 'echarts'
const loading = ref(true)
const dbloading = ref(true)
const OriImgUrl = ref("")
const ReImgUrl = ref("")
const HistoryData = ref(new Array())
getHistoryData().then(res => {
    const Data = res.data.data
    //console.log(Data)
    for (var key in Data) {
        HistoryData.value.push({ id: key, name: Data[key] })
    }
    dbloading.value = false
})
function getImg(filename) {
    OriImgUrl.value = "http://localhost:8000/api/getOriImg?name=" + filename
    ReImgUrl.value = "http://localhost:8000/api/getReImg?name=" + filename
    loading.value = false
}
getHistoryChartData().then(res => {
    //console.log(res);
    const idData = [];
    const ChartId = Object.keys(res.data.data);
    ChartId.forEach(key => {
        idData.push(key)
    });
    const numData = [];
    const ChartNum = Object.values(res.data.data);
    ChartNum.forEach(key => {
        numData.push(key)
    });

    const option = {
        title: {
            text: '样例误差数值'
        },
        xAxis: {
            data: idData
        },
        yAxis: {},//auto
        legend: {
            data: ['3D坐标欧氏距离']
        },
        series: {
            name: '3D坐标欧氏距离',
            type: 'line',
            data: numData
        }
    };

    const E = echarts.init(document.getElementById('HistoryEcharts'));
    E.setOption(option);
})
</script>

<template>
    <el-row class="home" :gutter="20" style="height:100%; width:100%;">
        <el-col :span="8">
            <el-card style="height:880px;margin-top:20px;">
                <h2>History</h2>
                <el-table
                    :data="HistoryData"
                    :default-sort="{ prop: '文件名', order: 'descending' }"
                    style="width: 100%"
                    v-loading="dbloading"
                    height="770"
                >
                    <el-table-column prop="id" label="序号" width="100px"></el-table-column>
                    <el-table-column prop="name" label="文件名" sortable></el-table-column>
                    <el-table-column label="操作" width="200px">
                        <template v-slot="scope">
                            <el-button @click="getImg(scope.row.name)">显示</el-button>
                            <el-button @click="getImg(scope.row.name)">下载</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <el-card style="height:400px;margin-top:20px;">
                <el-space direction="vertical" alignment="flex-start">
                    <el-skeleton style="width: 800px" :loading="loading" animated>
                        <template #template>
                            <div style="float:left;width: 800px">
                                <div style="float:left;">
                                    <el-skeleton-item variant="text" style="width:200px;" />
                                    <el-skeleton-item
                                        variant="image"
                                        style="margin-top:20px;width: 320px; height: 320px;"
                                    />
                                </div>
                                <div style="margin-left:100px;float:left;">
                                    <el-skeleton-item variant="text" style="width:200px;" />
                                    <el-skeleton-item
                                        variant="image"
                                        style="margin-top:20px;width: 320px; height: 320px;"
                                    />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div style="float:left;width: 1600px">
                                <div style="float:left;">
                                    <h3 class="pp" style="width:200px;">原图片：</h3>
                                    <img
                                        :src="OriImgUrl"
                                        style="margin-top:20px;width: 600px; height: 320px;"
                                    />
                                </div>
                                <div style="margin-left:100px;float:left;">
                                    <h3 class="pp" style="width:200px;">标志结果：</h3>
                                    <img
                                        :src="ReImgUrl"
                                        style="margin-top:20px;width: 320px; height: 320px;"
                                    />
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </el-space>
            </el-card>
            <el-card style="height:460px;margin-top:20px;">
                <div
                    style="height: 400px;width: 1100px;margin-left: 20px;margin-top: 20px;"
                    id="HistoryEcharts"
                ></div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
.pp {
    padding: 0%;
    margin: 0;
}
</style>