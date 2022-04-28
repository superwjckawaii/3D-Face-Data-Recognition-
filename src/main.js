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
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const store = createStore({
    state () {
      return {
        IsTab:false,
        IsUser:true,
        hasIdentity:false,
        Identity:'用户',
      }
    },
    mutations: {
      changeTab (state) {
        state.IsTab=!state.IsTab
      },
      notUser(state){
        state.IsUser=false
        state.Identity='游客'
      },
      getIdentity(state){
        return state.hasIdentity
      },
      signIn(state){
        state.hasIdentity=true
        state.Identity='用户'
      },
      exit(state){
        state.hasIdentity=false
        state.IsUser=true
        state.Identity='用户'
      }
    }
  })

const app = createApp(App)
app.use(ElementPlus)
app.use(RouteIndex)
app.use(store)
app.use(VueAxios,axios)
app.use(VueViewer)

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

