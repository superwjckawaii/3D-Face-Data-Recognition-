<!-- ./components/demo-block.vue -->
<template>
  <div class="demo-block">
    <div class="source"><slot name="source"></slot></div>
    <div class="meta">
      <div class="description"><slot></slot></div>
      <div class="highlight"><slot name="highlight"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-block'
}   
</script>

<style lang="less" scoped>

</style>