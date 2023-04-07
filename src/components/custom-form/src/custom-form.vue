<template>
  <div class="custom-form">
    <el-form v-model="formData">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.noFormItem"
              :label="item.label"
              :prop="item.field"
              :rules="item.rule"
              :style="itemLayout"
              :label-width="labelWidth"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherProps"
                  style="width: 100%"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherProps"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherProps"
                ></el-date-picker>
              </template>
              <!-- 具名插槽 -->
              <template v-else-if="item.type === 'slot'"
                ><slot :name="item.name"></slot>
              </template>
            </el-form-item>
            <!-- 具名插槽 -->
            <template v-else><slot :name="item.name"></slot> </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItems } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItems[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    const formData = {}
    return {
      formData
    }
  }
})
</script>

<style lang="scss" scoped></style>
