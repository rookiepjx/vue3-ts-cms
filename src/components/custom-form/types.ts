type FormItemType = 'input' | 'number' | 'select' | 'datepicker' | 'slot'

// 表单项配置接口
export interface IFormItems {
  type: FormItemType
  label?: string
  labelWidth?: string
  field?: string
  rule?: any[]
  placeholder?: string
  options?: any[]
  // 插槽名
  name?: string
  // 插槽以非表单项的形式显示
  noFormItem?: boolean
  // 其余elementUI支持的配置属性
  otherItemProps?: any
}

// 表单项配置接口
export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  // 其余elementUI支持的配置属性
  otherFormConfig?: any
}
