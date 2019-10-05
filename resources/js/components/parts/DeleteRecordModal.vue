<template>
  <!-- Modal -->
  <div class="modal" :class="modalOpen == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content narrow">
      <div class="card">
        <Loading :active.sync="isLoading" :can-cancel="true" color="hsl(171, 100%, 41%)" loader="bars"/>
        <div class="card-content">
          <div class="flex-column">
            <div class="icon is-large centerIcon">
              <i class="fas fa-question-circle fa-2x"></i>
            </div>
            <h5 class="subtitle is-5 centerIcon">
              Anda yakin ingin menghapus Dokumen ini?
            </h5>
          </div>
          <div class="field has-margin-top-15">
            <button class="button is-danger is-fullwidth" @click="deleteRecord">
              <span class="icon has-margin-right-5">
                <i class="fas fa-trash"></i>
              </span>
              Hapus Dokumen
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="modalHandler"></button>
  </div>
  <!-- Modal -->  
</template>

<script>
import Loading from 'vue-loading-overlay'
import { Event } from '../../helpers/event'

export default {
  name: 'DeleteRecordModal',
  data: function () {
    return {
      document: {},
      modalOpen: false,
      isLoading: false
    }
  },
  created() {
    Event.$on('openDeleteRecordModal', (document) => {
      this.document = document
      this.modalOpen = true
    })
  },
  components: {
    Loading
  },
  methods: {
    modalHandler: function () {
      this.modalOpen = !this.modalOpen
    },
    deleteRecord: async function () {
      try {
        const response = await axios.post('delete-record', this.document)
        if (response.status === 200) {
          Event.$emit('closeQuickView')
          this.modalHandler()
          Vue.$toast.success(response.data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.centerIcon{
  margin: 0px auto 0px auto;
}
</style>