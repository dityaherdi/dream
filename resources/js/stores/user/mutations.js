import * as type from './types'

const mutations = {
  [type.USER_LOGIN] (state, payload) {
    state.currentUser = Object.assign({}, payload.user, { token: payload.access_token })

    localStorage.setItem('user', JSON.stringify(state.currentUser))
  },

  [type.USER_LOGOUT] (state) {
    localStorage.removeItem('user')
    state.isLoggedIn = false
    state.currentUser = {}
  }
}

export default mutations