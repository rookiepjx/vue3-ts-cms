<template>
  <div class="user">
    <div class="content">
      <custom-form v-bind="searchFormConfig" v-model="formData">
        <template v-slot:slotA>
          <div>
            插槽A<el-button type="primary" size="small" @click="slotClick"
              >A</el-button
            >
          </div>
        </template>
        <template v-slot:slotB>
          <div>
            插槽B<el-button type="primary" size="small" @click="slotClick"
              >B</el-button
            >
          </div>
        </template>
      </custom-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomForm from '@/components/custom-form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: {
    CustomForm
  },
  name: 'user',
  setup() {
    const slotClick = () => {
      console.log(123)
    }
    // 表单数据的属性双向绑定由配置文件的field属性动态来决定
    const formOriginData: any = {}
    const formItems = searchFormConfig?.formItems ?? []
    for (let item of formItems) {
      item.field && (formOriginData[item.field] = '')
    }
    const formData = ref(formOriginData)
    return { searchFormConfig, slotClick, formData }
  }
})
</script>

<style scoped></style>
