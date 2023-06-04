import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用样式
import 'normalize.css'
import './assets/css/index.less'

// 全局注册 例如elementUi
import { globalRegister } from '@/global'

import { setupStore } from './store'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
// 1.先注册好动态路由
setupStore()
// 2.再调用router的install方法区匹配路由。
// 二者顺序不能乱 否则刷新页面会跳转not found
app.use(router)

app.mount('#app')
