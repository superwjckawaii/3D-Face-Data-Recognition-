<script setup>
import ApiMd from './API.md'
import { Mode } from 'vite-plugin-markdown'
console.log(Mode.VUE)
</script>

<template>
    <div class="container">
        <h1>3D面部标志系统API</h1>
        <api-md></api-md>
    </div>
</template>

<style lang="less" scoped>
.container{
    h1{
        font-size: 36px;
    }
}
</style>