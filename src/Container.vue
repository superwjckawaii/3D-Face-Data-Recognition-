<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRouter } from 'vue-router'

const router = useRouter();
router.push("Main");
</script>

<template>
    <router-view></router-view>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>

<style lang="less" scoped>
.el-header {
    background-color: rgb(17, 17, 17);
}
.el-main {
    padding-top: 0;
    //overflow: hidden;
}
</style>