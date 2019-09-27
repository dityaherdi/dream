import axios from 'axios'
import * as type from './types'
import * as typeDoc from './../document/types'
import { setAuthorization } from './../../helpers/auth'
// import { Event } from './../../helpers/event'

const actions = {
  async login({ commit }, payload) {
    try {
      const response = await axios.post('auth/login', payload)
      if (response.status === 401) {
        return false
      } else if (response.status === 200) {
        commit(type.USER_LOGIN, response.data)
        setAuthorization(response.data.access_token)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  },

  async logout({ commit }, payload) {
    try {
      const response = await axios.post('auth/logout')
      if (response.status == 200) {
        commit(type.USER_LOGOUT)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default actions