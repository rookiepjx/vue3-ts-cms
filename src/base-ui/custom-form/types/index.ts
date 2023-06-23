type FormItemType =
  | 'input'
  | 'number'
  | 'select'
  | 'datepicker'
  | 'password'
  | 'slot'

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
  // 其余elementUI支持的配置属性
  otherOptions?: any
  // 是否隐藏
  isHidden?: boolean
}

// 表单项配置接口
export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
  // 其余elementUI支持的配置属性
  otherOptions?: any
}
