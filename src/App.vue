<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CommonAsideVue from './components/CommonAside.vue';
import CommonHeader from './components/CommonHeader.vue';
import { useRouter } from 'vue-router'
import { getDjangoTest } from './api/data.js'

const router = useRouter();
router.push("Home");
getDjangoTest()
</script>

<template>
  <el-container style="height:100%">
    <el-aside width="auto">
      <common-aside-vue></common-aside-vue>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
#app {
  height: 100vh;
}
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
