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
  }
}

export default mutations