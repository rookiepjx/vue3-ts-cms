<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user">
    <div class="content">
      <page-search
        ref="pageContentRef"
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      />
      <page-content :contentTableConfig="contentTableConfig" pageName="users" />
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
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
