<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type FormInstance from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from "vue-router"
import { isUser } from '../api/data.js'
const ruleFormRef = ref<FormInstance>()
const router = useRouter();
const store = useStore()
const formData = reactive({
    name: '',
    password: '',
    isUser: false,
})
const validateName = (rule: any, value: any, callback: any) => {
    //console.log(value)
    var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/)
    if (value === '') {
        callback(new Error('用户名不能为空！'))
    } else if (containSpecial.test(value)) {
        callback(new Error('用户名不能含特殊字符！'))
    } else {
        callback()
    }
}
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('用户名不能为空！'))
    } else {
        callback()

    }
}

const rules = reactive({
    name: [{ validator: validateName, trigger: 'blur' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
})
function Try() {
    //console.log('游客')
    store.commit('signIn')
    store.commit('notUser')
}
async function signIn(formEl: FormInstance | undefined){
    let re = await isUser(formData.name, formData.password)//等待验证反馈
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if (re.data["isUser"])
                store.commit('signIn')
            else console.warn('输入账号或密码错误！')
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<template>
    <div class="body_bg">
        <el-form ref="ruleFormRef" :model="formData" status-icon :rules="rules" label-width="80px"
            class="demo-ruleForm">
            <h2 class="tital">登入模式</h2>
            <el-form-item prop="name">
                <el-input v-model="formData.name" placeholder="输入用户名！" size="large" style="font-size:24px;" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="formData.password" type="password" placeholder="输入密码！" size="large"
                    style="font-size:24px;" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <router-link to="/Main" style="text-decoration: none;">
                    <el-button type="primary" @click="signIn(ruleFormRef)" size="large"
                        style="font-size:15px;margin-left:60px;">登入</el-button>
                </router-link>
                <router-link to="/Main" style="text-decoration: none;margin-left:20px;">
                    <el-button @click="Try()" size="large" style="font-size:15px;margin-left:120px;">游客使用</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
.body_bg {
    background-image: url("../assets/Loading.jpeg");
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.demo-ruleForm {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 600px;
    padding: 35px 35px 15px 35px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid #ffffff89;
    box-shadow: 0 0 25px #cac6c6;

    .el-input {
        width: 440px;
    }
}

.tital {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #ffd04b;
    font-size: 36px;
}

.el-form-item__label {
    font-size: 30px;
}
</style>