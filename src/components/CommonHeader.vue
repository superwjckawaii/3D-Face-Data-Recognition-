<template>
    <header>
        <div class="Header-l">
            <el-button size="small" @click="tab()">
                <el-icon>
                    <aim />
                </el-icon>
            </el-button>
            <h3 style="color:#fff">首页</h3>
        </div>
        <div class="Header-r">
            <el-dropdown>
                <span>
                    <p style="font-size:20px">{{ userName }}</p>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>用户信息</el-dropdown-item>
                        <el-dropdown-item>退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>

<script lang="ts" setup scoped>
import {
    Aim
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import {ref} from 'vue'

const store = useStore()

const userName = '用户'

function tab(){
    store.commit('changeTab')
    console.log(store.state.IsTab)
}
</script>



<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.Header-l {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 20px;
    }
}
.Header-r {
    .user {
        widows: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>