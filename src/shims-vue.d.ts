// import { store } from '@/store'
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

export {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
