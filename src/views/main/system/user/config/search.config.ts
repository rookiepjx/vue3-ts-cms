import { IForm } from '@/components/custom-form/types'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 10px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'username',
      type: 'input',
      label: '用户名',

      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'favorSports',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTm',
      type: 'datepicker',
      label: '创建时间',
      otherProps: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      type: 'slot',
      name: 'slotB',
      noFormItem: true
    },
    {
      type: 'slot',
      name: 'slotA',
      noFormItem: true
    }
  ]
}
