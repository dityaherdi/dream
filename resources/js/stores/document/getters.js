const getters = {
  getSearchResult(state) {
    const datas = state.searchResult
    const id = [...new Set(datas.map(data => data.id))]
    const nrm = [...new Set(datas.map(data => data.nrm))]
    const name = [...new Set(datas.map(data => data.name))]
    const years = [...new Set(datas.map(data => data.year))]

    const year = years.sort((a, b) => {
      return a-b
    })

    const patient = {
      id: id[0],
      nrm: nrm[0],
      name: name[0],
      year: year.reverse()
    }

    return patient
  },

  getMonth(state) {
    const months = state.folderMonth
    const sorted = months.sort((a, b) => {
      return b-a
    })

    return sorted
  },

  getDocuments(state) {
    return state.documents
  }
}

export default getters