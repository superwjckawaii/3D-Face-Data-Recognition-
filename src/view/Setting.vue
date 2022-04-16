<script setup >
import { ref } from 'vue'

function D(fname){
    window.location.href = "http://localhost:8000/api/getObj?name="+fname
}
</script>

<template>
    <div id="container">
        <el-button @click="D('47tru.obj')">Download</el-button>
    </div>
</template>

<style scoped>
</style>