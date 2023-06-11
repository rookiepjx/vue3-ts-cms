<template>
  <div class="nav-header">
    <el-icon v-if="isFold" class="fold-menu" @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <el-icon v-else class="fold-menu" @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import Breadcrumb from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/mapMenus'

export default defineComponent({
  components: {
    Breadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // data
    const isFold = ref(false)
    // 面包屑的数据: [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    // event
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
