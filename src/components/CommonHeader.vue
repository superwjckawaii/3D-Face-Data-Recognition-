<template>
    <header>
        <div class="Header-l">
            <el-button size="small" @click="tab()">
                <el-icon>
                    <aim />
                </el-icon>
            </el-button>
        </div>
        <div class="Header-r">
            <el-dropdown>
                <span>
                    <p style="font-size:20px">{{ store.state.Identity }}</p>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="Exit()">退出</el-dropdown-item>
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
import { ref,watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const store = useStore()

function tab() {
    store.commit('changeTab')
    //console.log(store.state.IsTab)
}
function Exit(){
    store.commit('exit')
    router.push('Signin')
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
    p{
        color: rgb(179, 186, 79);
    }
}
</style>