import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('./../components/master/App')
    // },
    {
      path: '/',
      name: 'login',
      component: () => import('./../components/pages/Login')
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
