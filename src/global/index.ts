import { App } from 'vue'
import registerElement from './registerElement'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
