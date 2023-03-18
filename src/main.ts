import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局注册 例如elementUi
import { globalRegister } from '@/global'
// 封装axios
import httpRequest from '@/service'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')

httpRequest.request({
  url: '/forms/post',
  method: 'get'
})
