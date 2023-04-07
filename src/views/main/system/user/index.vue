<template>
  <div class="user">
    <div class="content">
      <custom-form v-bind="searchFormConfig">
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
import { defineComponent } from 'vue'
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
    return { searchFormConfig, slotClick }
  }
})
</script>

<style scoped></style>
