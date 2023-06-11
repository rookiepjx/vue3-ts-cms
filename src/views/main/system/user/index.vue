<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user">
    <div class="content">
      <page-search :searchFormConfig="searchFormConfig" />
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

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
