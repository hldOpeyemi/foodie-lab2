import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookies, { expires: '7d'})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
