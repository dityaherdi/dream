<template>
  <div class="columns">
    <div class="column">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large is-rounded" type="text" placeholder="Cari NRM" v-model="keyword" @keyup="search">
        <span class="icon is-medium is-left">
          <i class="fas fa-file-pdf"></i>
        </span>
        <span class="icon is-medium is-right">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { async } from 'q';
export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  methods: {
    search: _.debounce(function () {
      if (this.keyword) {
        axios.get('search', { params: { keyword: this.keyword }}).then((response) => {
          console.log(response)
        })
      }
    }, 1000)
  }
}
</script>

<style scoped>

</style>