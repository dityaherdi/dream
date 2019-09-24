import Vue from 'vue'
import Router from 'vue-router'
// import Login from './../components/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./../components/pages/Login')
      // component: Login
    },
    {
      path: '/dream',
      name: 'main',
      component: () => import('./../components/pages/MainPage'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})
