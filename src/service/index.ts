import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const httpRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功拦截', config)
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败拦截', error)
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截', res)
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败拦截', error)
      return error
    }
  }
})

export default httpRequest
