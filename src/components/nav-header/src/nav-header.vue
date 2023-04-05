<template>
  <div class="nav-header">
    <el-icon v-if="isFold" class="fold-menu" @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <el-icon v-else class="fold-menu" @click="handleFoldClick"
      ><Fold
    /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    width: 30px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
