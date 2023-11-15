import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ClientSignup from '../views/ClientSignup.vue'
import ClientLogin from '../views/ClientLogin.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import RestaurantSignup from '../views/RestaurantSignup.vue'
import RestaurantView from '../views/RestaurantView.vue'
import ClientDashboard from '../views/ClientDashboard.vue'
import RestaurantDashboard from '../views/RestaurantDashboard.vue'
import Cart from '../views/Cart.vue'
import RestaurantLogin from '../views/RestaurantLogin.vue'

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
  },
  {
    path: '/restaurant_signup',
    name: 'restaurant_signup',
    component: RestaurantSignup
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: RestaurantView
  },
  {
    path: '/client_dashboard',
    name: 'client_dashboard',
    component: ClientDashboard
  },
  {
    path: '/restaurant_dashboard',
    name: 'restaurant_dashboard',
    component: RestaurantDashboard
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/restaurant_login',
    name: 'restaurant_login',
    component: RestaurantLogin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

