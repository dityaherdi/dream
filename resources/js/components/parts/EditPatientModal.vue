<template>
  <!-- Modal -->
  <div class="modal" :class="modalOpen == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
        <!-- <Loading :active.sync="isLoading" :can-cancel="true" color="hsl(171, 100%, 41%)" loader="bars"/> -->
          <div class="field">
            <div class="control has-icons-left has-icons-right" :class="isFormLoading == true ? 'is-loading' : ''">
              <input class="input" type="text" placeholder="NRM" v-model="patient.nrm" disabled>
              <span class="icon is-small is-left">
                <i class="fas fa-address-card"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left" :class="isFormLoading == true ? 'is-loading' : ''">
              <input class="input" type="text"  style="text-transform:uppercase;" placeholder="Nama Pasien" v-model="patient.name" :disabled='isFormLoading'>
              <span class="icon is-small is-left">
                <i class="fas fa-font"></i>
              </span>
            </div>
          </div>
          <a href="javascript:void(0)" class="button is-primary is-fullwidth" :class="isFormLoading == true ? 'is-loading' : ''" @click="updatePatient">
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
  name: 'EditPatientModal',
  data() {
    return {
      modalOpen: false,
      isLoading: false,
      isFormLoading: false,
      patient: {}
    }
  },
  components: {
    Loading
  },
  created() {
    Event.$on('openEditPatientModal', (patient) => {
      this.modalOpen = true
      this.patient = patient
    })
  },
  methods: {
    modalHandler: function () {
      this.modalOpen = !this.modalOpen
    },
    updatePatient: async function () {
      this.isLoading = true
      this.isFormLoading = true
      try {
        const response = await axios.put('update-patient', this.patient)
        if (response.status == 200) {
          this.isLoading = false
          this.isFormLoading = false
          Vue.$toast.success(response.data.message)
          this.modalOpen = false;
        }
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>