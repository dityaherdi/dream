<template>
  <!-- Modal -->
  <div class="modal" :class="modalActive == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="NRM">
              <span class="icon is-small is-left">
                <i class="fas fa-address-card"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Nama Pasien">
              <span class="icon is-small is-left">
                <i class="fas fa-font"></i>
              </span>
            </p>
          </div>
          <a href="javascript:void(0)" class="button is-primary is-fullwidth">
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
import { Event } from './../../helpers/event'

export default {
  name: 'EditPatientModal',
  data() {
    return {
      modalActive: false
    }
  },
  created() {
    Event.$on('openEditPatientModal', () => {
      this.modalActive = true
    })
  },
  methods: {
    modalHandler() {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style scoped>

</style>