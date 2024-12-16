
import { createApp } from 'vue'
import App from './App.vue'
import VElement from '@yichu0131/z-element'
import '@yichu0131/z-element/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

createApp(App)
.use(VElement)
.mount('#app')
