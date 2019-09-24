export function localUser() {
  const user = localStorage.getItem('user')

  if (!user) {
    return null
  }

  return JSON.parse(user)
}

export function initializeRouter(store, router) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.user.currentUser) {
      next({ name: 'login' })
    }else if (to.path == '/' && !store.state.user.currentUser) {
      next({ nama: 'login' })
    }else if (to.path == '/' && store.state.user.currentUser) {
      next({ name: 'main' })
    }else {
      next() 
    }
  })

  axios.interceptors.response.use(null, (error) => {
    if (error.response.status == 401) {
      store.commit('USER_LOGOUT')
      router.push({ name: 'login' })
    }

    return Promise.reject(error)
  })

  if (store.getters.getUser) {
    setAuthorization(store.getters.getUser.token)
  }
}

export function setAuthorization(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}