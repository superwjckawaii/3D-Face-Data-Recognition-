import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RouteIndex from './router'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        IsTab:false
      }
    },
    mutations: {
      changeTab (state) {
        state.IsTab=!state.IsTab
      }
    }
  })

const app = createApp(App)
app.use(ElementPlus)
app.use(RouteIndex)
app.use(store)
//app.component()
app.mount('#app')

