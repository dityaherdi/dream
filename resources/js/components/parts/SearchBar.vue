<template>
  <div class="columns">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true" color="hsl(171, 100%, 41%)" loader="spinner"/>
    <div class="column">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large is-rounded" type="text" style="text-align:center;" placeholder="NRM atau Nama Pasien" v-model="keyword" @keyup.enter="search(keyword)">
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
import { async } from 'q'
import { Event } from './../../helpers/event'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Loading from 'vue-loading-overlay'

export default {
  created() {
    Event.$on('triggerSearch', (keyword) => {
      this.search(keyword)
    })
  },
  data: function () {
    return {
      keyword: '',
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions([
      'searchPatient'
    ]),

    ...mapMutations([
      'RESET_MULTIPLE_PATIENT_DATA', 'RESET_DOCUMENTS_STATE'
    ]),

    search: async function (keyword) {
      if (keyword) {
        this.isLoading = !this.isLoading
        this.RESET_MULTIPLE_PATIENT_DATA()
        this.RESET_DOCUMENTS_STATE()
        Event.$emit('closeQuickView')
        Event.$emit('sendKeyword', keyword)
        if (await this.searchPatient(keyword)) {
          this.isLoading = !this.isLoading
        }
      } else {
        Vue.$toast.error('Kolom pencarian tidak boleh kosong!')
      }
    }
  }
}
</script>

<style scoped>

</style>