<template>
  <!-- Modal -->
  <div class="modal" :class="modalOpen == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content">
      <Loading :active.sync="isLoading" color="hsl(171, 100%, 41%)" loader="bars"/>
      <div class="card">
        <div class="card-content">
          <div class="field">
            <div class="control has-icons-left">
              <textarea class="textarea" v-model="document.note"></textarea>
            </div>
          </div>
          <a href="javascript:void(0)" @click="updateNote" class="button is-primary is-fullwidth">
            Perbarui
          </a>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="modalHandler"></button>
  </div>
  <!-- Modal -->
</template>

<script>
import Loading from 'vue-loading-overlay'
import { Event } from './../../helpers/event'

export default {
  name: 'NoteModal',
  data() {
    return {
      modalOpen: false,
      isLoading: false,
      document: {}
    }
  },
  components: {
    Loading
  },
  created() {
    Event.$on('openNoteModal', (document) => {
      this.document = document
      this.modalOpen = true
    })
  },
  methods: {
    modalHandler: function () {
      this.modalOpen = !this.modalOpen
    },
    updateNote: async function () {
      this.isLoading = true
      try {
        const response = await axios.put('update-note', this.document)
        if (response.status == 200) {
          this.modalOpen = false
          this.document = {}
          this.isLoading = false
          Event.$emit('closeQuickView')
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

</style>