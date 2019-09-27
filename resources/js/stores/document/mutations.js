import * as type from './types'

const mutations = {
  [type.SEARCH_PATIENT] (state, payload) {
    state.searchResult = payload
  },
  [type.FOLDER_MONTH] (state, payload) {
    state.folderMonth = payload
  },
  [type.DOCUMENTS] (state, payload) {
    state.documents = payload
  },
  [type.RESET_DOCUMENTS_STATE] (state) {
    state.documents = []
  },
  [type.RESET_MULTIPLE_PATIENT_DATA] (state) {
    state.multiplePatientData = []
  },
  [type.RESET_SEARCH_RESULT_DATA] (state) {
    state.searchResult = []
  },
  [type.MULTIPLE_PATIENT_DATA] (state, payload) {
    state.multiplePatientData = payload
  }
}

export default mutations