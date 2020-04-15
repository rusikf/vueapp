import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import List from './components/list'
import PostForm from './components/postform'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  { path: '/', component: List, name: 'root' },
  { path: '/posts/new', component: PostForm },
  { path: '/as_blogger', component: List, name: 'blogger_root' }
]
const router = new VueRouter({
  routes
})

console.log('Store', store)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
