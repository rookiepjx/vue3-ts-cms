<template>
  <div>
    <el-tag type="danger" size="normal" effect="dark">{{
      $store.state.homeMsg
    }}</el-tag>
  </div>
</template>

<script setup lang="ts">
console.log(process.env.VUE_APP_SITE)
</script>

<style scoped></style>
