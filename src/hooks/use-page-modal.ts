import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = (title: string) => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.dialogTitle = title
    }
    newCb && newCb()
  }
  const handleEditData = (item: any, title: string) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.dialogTitle = title
    }
    editCb && editCb()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
