<template>
  <!-- Modal -->
  <div class="modal" :class="modalOpen == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content narrow">
      <div class="card">
        <Loading :active.sync="isLoading" :can-cancel="true" color="hsl(171, 100%, 41%)" loader="bars"/>
        <div class="card-content">
          <div class="field">
            <div class="control">
              <label class="label">Tanggal Kedatangan Saat Ini</label>
              <input class="input" type="text" v-model="currentDate" readonly style="text-align:center;">
            </div>
          </div>
          <div class="flex-column">
            <span class="icon is-large centerIconArrowButton">
              <i class="fas fa-arrow-circle-down fa-2x"></i>
            </span>
          </div>
          <div class="field">
            <div class="control">
              <label class="label">Tanggal Kedatangan Baru</label>
              <DatePicker inline v-model="newDate" :language="lang" :full-month-name="true" format="dd MMMM yyyy" :use-utc="true"/>
            </div>
          </div>
          <div class="field">
            <button class="button is-link is-fullwidth" @click="updateDate">
              <span class="icon has-margin-right-5">
                <i class="fas fa-share"></i>
              </span>
              Pindahkan
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
import DatePicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
import './../../helpers/utilities'

export default {
  data: function () {
    return {
      document: {},
      currentDate: '',
      newDate: '',
      modalOpen: false,
      isLoading: false,
      // datepicker
      lang: id,
    }
  },
  watch: {
    'document.record_date': function (value) {
      if (value != '') {
        this.currentDate = this.$options.filters.indoDate(value)
      }
    },
    modalOpen: function (value) {
      if (!value) {
        this.document = {},
        this.currentDate = '',
        this.newDate = ''
      }
    }
  },
  created() {
    Event.$on('openDatePickerMoveDocument', (document) => {
      this.document = document
      this.modalOpen = true
    })
  },
  components: {
    DatePicker,
    Loading
  },
  methods: {
    modalHandler: function () {
      this.modalOpen = !this.modalOpen
    },
    updateDate: async function () {
      this.isLoading = true

      const doc = {
        document: this.document,
        date: this.newDate
      }

      try {
        const response = await axios.put('update-record-date/'+this.document.id, doc)
        if (response.status === 200) {
          this.modalOpen = false
          this.document = {}
          this.newDate = this.currentDate = ''
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
.centerIconArrowButton{
  margin: 0px auto 10px auto;
}
</style>