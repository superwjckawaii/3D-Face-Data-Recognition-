import { createApp } from 'vue'
import App from './Container.vue'
//import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RouteIndex from './router'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './api/mock.js'
import { DemoBlock } from 'vite-plugin-markdown-vue/components'
import 'highlight.js/styles/color-brewer.css'

const store = createStore({
    state () {
      return {
        IsTab:false,
        IsUser:true,
        hasIdentity:false,
      }
    },
    mutations: {
      changeTab (state) {
        state.IsTab=!state.IsTab
      },
      notUser(state){
        state.IsUser=false
      },
      getIdentity(state){
        return state.hasIdentity
      },
      signIn(state){
        state.hasIdentity=true
      }
    }
  })

const app = createApp(App)
app.use(ElementPlus)
app.use(RouteIndex)
app.use(store)
app.use(VueAxios,axios)
app.component('demo-block', DemoBlock)

//登入校验
RouteIndex.beforeEach((to,from) => {
  //console.log(store.state.hasIdentity)
  if(store.state.hasIdentity||to.name=='Signin')
    return true
  RouteIndex.push('Signin')
  return true
})
//app.component()
app.mount('#app')

