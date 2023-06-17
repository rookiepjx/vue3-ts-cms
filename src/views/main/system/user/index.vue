<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user">
    <div class="content">
      <page-search
        :searchFormConfig="searchFormConfig"
        @handleResetClick="handleResetClick"
        @handleQueryClick="handleQueryClick"
      />
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

// 公用的页面搜索方法抽取到hooks
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  setup() {
    const [handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
