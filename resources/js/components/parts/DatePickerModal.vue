<template>
  <!-- Modal -->
  <div class="modal" :class="modalOpen == true ? 'is-active' : ''">
    <div class="modal-background" @click="modalHandler"></div>
    <div class="modal-content narrow">
      <div class="card">
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
    <!-- <div class="modal-content wider">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <h4 class="title is-4">Tahun Kedatangan Saat Ini:</h4>
              <DatePicker inline :disabled-dates="datePickerConfigCurrentDate.disabledDates" :highlighted="datePickerConfigCurrentDate.highlighted" :language="lang" :full-month-name="true" format="dd MMMM yyyy" :use-utc="true"/>
            </div>
            <div class="flex-column justify-center">
              <span class="icon is-large">
                <i class="fas fa-arrow-circle-right fa-3x"></i>
              </span>
            </div>
            <div class="column">
              <h4 class="title is-4">Pindahkan ke:</h4>
              <DatePicker inline v-model="newDate" :language="lang" :full-month-name="true" format="dd MMMM yyyy" :use-utc="true"/>
            </div>
          </div>
          <div class="columns">
            <button class="button is-link is-fullwidth" @click="updateDate">
              <span class="icon has-margin-right-5">
                <i class="fas fa-share"></i>
              </span>
              Pindahkan
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <button class="modal-close is-large" aria-label="close" @click="modalHandler"></button>
  </div>
  <!-- Modal -->  
</template>

<script>
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

      // datepicker
      lang: id,
      // datePickerConfigCurrentDate: {
      //   disabledDates: {
      //     to: '',
      //     from: '',
      //   },
      //   highlighted: {
      //     dates: []
      //   },
      //   includeDisabled: true
      // }
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
        // this.datePickerConfigCurrentDate.disabledDates.to = '',
        // this.datePickerConfigCurrentDate.disabledDates.from = ''
        // this.datePickerConfigCurrentDate.highlighted.dates = []
      }
    }
  },
  created() {
    Event.$on('openDatePickerMoveDocument', (document) => {
      // this.datePickerConfigCurrentDate.disabledDates.to = new Date(document.record_date)
      // this.datePickerConfigCurrentDate.disabledDates.from = new Date(document.record_date).addDays(1)
      // this.datePickerConfigCurrentDate.highlighted.dates[0] = new Date(document.record_date)

      this.document = document
      this.modalOpen = true
    })
  },
  components: {
    DatePicker
  },
  methods: {
    modalHandler: function () {
      this.modalOpen = !this.modalOpen
    },
    updateDate: async function () {
      const doc = {
        document: this.document,
        date: this.newDate
      }

      try {
        const response = await axios.put('update-record-date/'+this.document.id, doc)
        if (response.status === 200) {
          
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