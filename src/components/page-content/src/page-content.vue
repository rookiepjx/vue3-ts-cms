<template>
  <div class="page-content">
    <custom-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="default">新建用户</el-button>
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
      <template #operate>
        <div class="handle-btns">
          <el-button size="small" type="primary" text
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button size="small" type="primary" text
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
  setup(props) {
    const store = useStore()
    // 每个页面的列表通过传递pageName参数去获取接口数据
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 通过pageName参数获取列表数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    return {
      dataList
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
