import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MyRequestConfig, MyRequestInterceptors } from './type'
import { ElLoading } from 'element-plus/lib/components/loading/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

class MyRequest {
  instance: AxiosInstance
  interceptors?: MyRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: MyRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本配置信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 单独传入配置的请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 单独传入配置的响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 所有实例本身拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        console.log('所有的实例都有的拦截器: 请求成功拦截', config)
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截', res)
        // 将loading移除
        this.loading?.close()
        const data = res.data
        return data
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截')
        // 将loading移除
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: MyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          this.showLoading = DEFAULT_LOADING
        })
    })
  }
  get<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
