// vuex.d.ts

// Vuex 没有为 this.$store 属性提供开箱即用的类型声明。
// 如果你要使用 TypeScript，首先需要声明自定义的模块补充(module augmentation)。
// https://vuex.vuejs.org/zh/guide/typescript-support.html#vue-%E7%BB%84%E4%BB%B6%E4%B8%AD-store-%E5%B1%9E%E6%80%A7%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number,
  // }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store
  }
}
