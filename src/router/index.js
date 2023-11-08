import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ClientSignup from '../views/ClientSignup.vue'
import ClientLogin from '../views/ClientLogin.vue'
import RestaurantsView from '../views/RestaurantsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/client_signup',
    name: 'client_signup',
    component: ClientSignup
  },
  {
    path: '/client_login',
    name: 'client_login',
    component: ClientLogin
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router