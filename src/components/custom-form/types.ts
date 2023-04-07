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
  otherProps?: any
  // 插槽名
  name?: string
  // 插槽以非表单项的形式显示
  noFormItem?: boolean
}

// 表单项配置接口
export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
