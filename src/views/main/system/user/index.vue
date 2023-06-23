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
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
      <page-modal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        pageName="users"
        :modalConfig="modalConfigRef"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

// 公用的页面搜索方法抽取到hooks
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  setup() {
    const [handleResetClick, handleQueryClick] = usePageSearch()

    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 2.动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        console.log(item)
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        console.log(item)
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfigRef,
      pageModalRef
    }
  }
})
</script>

<style scoped></style>
