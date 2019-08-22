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
export default {
  name: 'MainPage',
  components: {
    'SearchBar': () => import('./../parts/SearchBar'),
    'UploadDocument': () => import('./../parts/UploadDocument'),
    'DocumentList': () => import('./../parts/DocumentList')
  }
}
</script>

<style scoped>

</style>