<template>
    <el-menu
        default-active="Home"
        class="el-menu-vertical-demo"
        :collapse="store.state.IsTab"
        :router="true"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="rgba(42,45,46)"
    >
        <h2>{{store.state.IsTab?'系统':'3D面部标志系统'}}</h2>
        <el-menu-item index="Home">
            <template #title>
                <el-icon>
                    <search />
                </el-icon>
                <span>首页</span>
            </template>
        </el-menu-item>
        <el-sub-menu index="">
            <template #title>
                <el-icon>
                    <icon-menu />
                </el-icon>
                <span>功能分支</span>
            </template>
            <el-menu-item index="Datapush">数据提交</el-menu-item>
            <el-menu-item index="History" :disabled="!store.state.IsUser">历史结果</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="Setting" :disabled="!store.state.IsUser" key>
            <el-icon>
                <setting />
            </el-icon>
            <template #title>设置和记录</template>
        </el-menu-item>
        <el-menu-item index="API" key>
            <el-icon>
                <document />
            </el-icon>
            <template #title>API及相关</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
    Search
} from '@element-plus/icons-vue'
const default_page=ref("Home")

const store = useStore()


</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    height: 100%;
    border: none;
    overflow: hidden;
    h2 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>