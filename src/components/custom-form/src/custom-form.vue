<template>
  <div class="custom-form">
    <el-form v-bind="otherFormConfig" v-model="formData">
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
                  v-bind="item.otherItemProps"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherItemProps"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
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
                  v-bind="item.otherItemProps"
                  v-model="formData[`${item.field}`]"
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
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItems } from '../types'
export default defineComponent({
  props: {
    otherFormConfig: {
      type: Object,
      default: () => ({})
    },
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
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>

<style lang="scss" scoped></style>
