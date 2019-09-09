import * as type from './types'
import axios from 'axios'

const actions = {
  async searchPatient({ commit }, keyword) {
    try {
      const response = await axios.get('search', { params: { keyword }})
      if (response.status == 200) {
        commit(type.SEARCH_PATIENT, response.data.result)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  },

  async folderMonth({ commit }, payload) {
    const { id, year } = payload
    try {
      const response = await axios.get('month', { params: { id, year } })
      if (response.status == 200) {
        commit(type.FOLDER_MONTH, response.data.result)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  },

  async documents({ commit }, payload) {
    const { patient, year, month } = payload
    try {
      const response = await axios.get('documents', { params: { id: patient.id, year, month } })
      if (response.status == 200) {
        commit(type.DOCUMENTS, response.data.result)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default actions