import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/pages/Login'
import MainPage from './../components/pages/MainPage'
import NotFound from './../components/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      // Lazy load not working if using IP
      // component: () => import('./../components/pages/Login')
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('./../components/pages/Login')
      component: Login
      // redirect: { name: 'root' }
    },
    {
      path: '/dream',
      name: 'main',
      // component: () => import('./../components/pages/MainPage'),
      component: MainPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: NotFound,
      name: 'notFound'
    }
  ]
})
