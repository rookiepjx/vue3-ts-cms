<template>
  <div class="page-content">
    <custom-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="default" @click="handleNewClick"
          >新建</el-button
        >
      </template>
      <!-- 2.table列中的插槽 -->
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'warning'"
          plain
          size="small"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <!-- table列中的操作列 -->
      <template #operate="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="primary"
            text
            @click="handleEditClick(scope.row)"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button
            size="small"
            type="primary"
            text
            @click="handleDeleteClick(scope.row)"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import CustomTable from '@/base-ui/custom-table'
export default defineComponent({
  components: {
    CustomTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const store = useStore()

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3.通过pageName参数获取列表数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'operate') return false
        return true
      }
    )

    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropSlots,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
