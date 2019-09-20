<template>
<div>
  <SearchBar />
  <div class="columns">
    <UploadDocument />
    <DocumentList />
  </div>
</div>
</template>

<script>
import SearchBar from './../parts/SearchBar'
import UploadDocument from './../parts/UploadDocument'
import DocumentList from './../parts/DocumentList'

export default {
  name: 'MainPage',
  components: {
    // 'SearchBar': () => import('./../parts/SearchBar'),
    // 'UploadDocument': () => import('./../parts/UploadDocument'),
    // 'DocumentList': () => import('./../parts/DocumentList')
    SearchBar,
    UploadDocument,
    DocumentList
  }
}
</script>

<style scoped>

</style>