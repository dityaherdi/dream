<template>
  <div>
    <div id="viewDocumentList" class="quickview has-padding-15 quickview-left-border" :class="quickviewActive ? 'is-active' : ''">
      <Loading :active.sync="isLoading" :can-cancel="true" color="hsl(171, 100%, 41%)" loader="bars"/>
      <header class="quickview-header has-margin-bottom-15">
        <p class="title">{{ year }} - {{ patient.name }}</p>
        <span class="delete" data-dismiss="quickview" @click="closeQuickview"></span>
      </header>
      <div class="field is-horizontal">
        <div class="dropdown is-hoverable has-margin-right-10">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span class="icon is-left">
                <i class="fas fa-calendar-day"></i>
              </span>
              <span> {{ selectedMonthText == '' ? 'Bulan Kedatangan' : selectedMonthText }} </span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <a href="javascript:void(0)" class="dropdown-item" v-for="month in getMonth" :key="month" @click="findDocuments(patient, year, month)">
                {{ month | monthByName}}
              </a>
            </div>
          </div>
        </div>

        <div class="control has-icons-left" style="width: 100%">
          <input class="input" type="text" placeholder="Filter" v-model.trim="filterSearch" :disabled="isMonthEmpty">
          <span class="icon is-left">
            <i class="fas fa-quote-left"></i>
          </span>
        </div>

        <span class="icon has-text-info is-medium has-margin-left-5 tooltip is-tooltip-left" data-tooltip="Gunakan tanda ':' untuk filter tanggal. Contoh :15">
          <i class="fas fa-info-circle fa-lg"></i>
        </span>
        
      </div>

      <div class="is-divider" data-content="Rekam Medis Pasien"></div>

      <div class="quickview-body">
        <template v-if="getDocuments.length < 1">
          <div class="card">
            <div class="card-content">
              <p>
                <i>Tidak Ada Bulan Yang Dipilih</i>
              </p>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="card" v-for="document in filteredList" :key="document.id">
            <div class="card-title has-text-right">
              <template v-if="document.note != null">
                <span class="icon has-text-info is-medium has-margin-left-5 tooltip is-tooltip-bottom" data-tooltip="Klik untuk melihat catatan / keterangan">
                  <a href="javascript:void(0)" @click="openNoteModal(document)">
                    <i class="fas fa-sticky-note"></i>
                  </a>
                </span>
              </template>
              <template v-else>
                <span class="icon has-text-warning is-medium has-margin-left-5 tooltip is-tooltip-bottom" data-tooltip="Catatan tidak ditemukan">
                  <a href="javascript:void(0)" @click="openNoteModal(document)">
                    <i class="fas fa-sticky-note"></i>
                  </a>
                </span>
              </template>
              <i>
                {{ document.record_date | indoDate }}
              </i>
            </div>
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <a href="javascript:void(0)" @contextmenu.prevent="$refs.menu.open($event, document)" title="Klik kanan untuk melihat menu pilihan">
                    <div class="media">
                      <div class="media-left">
                        <div class="icon is-large">
                            <i class="fas fa-file-pdf fa-3x"></i>
                        </div>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{{ document.form_number }}</p>
                        <p class="subtitle is-6">{{ document.form_name }}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    
    <!-- Context Menu -->
    <vue-context ref="menu" @close="onContextClose" @open="onContextOpen" close-on-click>
      <!-- <li>
        <a href="javascript:void(0)" @click="openDocument">
          <i class="fas fa-book-open has-margin-right-10"></i>
          Buka Dokumen
        </a>
      </li> -->
      <!-- function download document digunakan untuk request dan preview pdf menggunakan blob -->
      <li>
        <a href="javascript:void(0)" @click="downloadDocument">
          <i class="fas fa-book-open has-margin-right-10"></i>
          Buka Dokumen
        </a>
      </li>
      <!-- <li>
        <a href="javascript:void(0)" @click="downloadDocument">
          <i class="fas fa-download has-margin-right-10"></i>
          Download Dokumen
        </a>
      </li> -->
      <li>
        <a href="javascript:void(0)" @click="openDatePicker">
        <i class="fas fa-share has-margin-right-10"></i>
          Pindahkan
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="openDeleteRecordModal">
        <i class="fas fa-trash has-margin-right-10"></i>
          Hapus
        </a>
      </li>
    </vue-context>
    <!-- Context Menu -->

    <DatePickerModal />
    <NoteModal />
    <DeleteRecordModal />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { Event } from './../../helpers/event'
import { VueContext } from 'vue-context'
import { mapActions, mapGetters, mapMutations } from 'vuex';
import DatePickerModal from './../parts/DatePickerModal'
import NoteModal from './NoteModal'
import DeleteRecordModal from './DeleteRecordModal'

export default {
  name: 'DocumentQuickView',
  created() {
    Event.$on('openQuickView', async (patient, year) => {
      this.RESET_DOCUMENTS_STATE()
      this.selectedMonthText = ''
      const payload = { id: patient.id, year: year }
      this.quickviewActive = true
      this.isLoading = true
      this.year = year
      this.patient = patient
      if (await this.folderMonth(payload)) {
        this.isLoading = false
      }
    }),
    Event.$on('closeQuickView', () => {
      this.quickviewActive = false
    })
  },
  data: function () {
    return {
      isLoading: false,
      quickviewActive : false,
      year: '',
      patient: '',
      selectedMonthText: '',
      filterSearch: '',
      selectedDocumentOnContext: {},
      isMonthEmpty: true
    }
  },
  watch: {
    selectedMonthText: function (value) {
      if (value != '') {
        this.isMonthEmpty = false
      }
    }
  },
  computed: {
    ...mapGetters([
      'getMonth', 'getDocuments'
    ]),
    filteredList() {
      if(this.filterSearch.charAt(0) == ':'){
        if(this.filterSearch.length > 1){
          let checkKey = this.filterSearch.substring(1)
          checkKey = checkKey.replace(/\s/g, '')
          return this.getDocuments.filter((document) => {
            return this.$options.filters.dayOnly(document.record_date).toLowerCase().includes(checkKey.toLowerCase())
          })
        }        
      }else {
        return this.getDocuments.filter((document) => {
          return document.form_name.toLowerCase().includes(this.filterSearch.toLowerCase()) || document.form_number.toLowerCase().includes(this.filterSearch.toLowerCase())
        })
      }
    }
  },
  components: {
    VueContext,
    Loading,
    // DatePickerModal: () => import('./DatePickerModal')
    DatePickerModal,
    NoteModal,
    DeleteRecordModal
  },
  methods: {
    ...mapActions([
      'folderMonth', 'documents'
    ]),

    ...mapMutations([
      'RESET_DOCUMENTS_STATE'
    ]),

    closeQuickview: function () {
      this.quickviewActive = !this.quickviewActive
    },

    onContextOpen: function (event, data) {
      this.selectedDocumentOnContext = data
    },

    onContextClose: function (event, data) {
      setTimeout(() => {
        this.selectedDocumentOnContext = {}
      }, 200)
    },

    findDocuments: async function (patient, year, month) {
      this.selectedMonthText = this.$options.filters.monthByName(month)

      const payload = {
        patient,
        year,
        month,
      }

      this.isLoading = true
      if (await this.documents(payload)) {
        this.isLoading = false
      }
    },

    // open dokumen dengan base64 (tidak disarankan)
    // openDocument: async function () {
    //   try {
    //     const response = await axios.get('open-document', { params: { id: this.selectedDocumentOnContext.id } })
    //     if (response.status == 200) {
    //       const { base64, record } = response.data
    //       this.renderDocument(base64, record)
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    // menggunakan blob
    // openDocument: async function () {
    //   this.isLoading = true
    //   try {
    //     const response = await axios.get('download-document', { params: { id: this.selectedDocumentOnContext.id }, responseType: 'blob' })
    //     const blob = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    //     // render dokumen di browser
    //     window.open(blob)
    //     this.isLoading = false

    //     // untuk di download
    //     // const link = document.createElement('a');
    //     // link.href = url;
    //     // link.setAttribute('download', 'file.pdf');
    //     // document.body.appendChild(link);
    //     // link.click();
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    // openDocument: async function () {
    //   this.isLoading = true
    //   try {
    //     const response = await axios.get('open-document', { params: { id: this.selectedDocumentOnContext.id }, responseType: 'blob' })
    //     const blob = window.URL.createObjectURL(new Blob([response.data.base64], { type: 'application/pdf' }));
    //     // render dokumen di browser
    //     window.open(blob)
    //     this.isLoading = false
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    downloadDocument: async function() {
      this.isLoading = true
      try {
        const response = await axios.get('download-document', { params: { id: this.selectedDocumentOnContext.id }, responseType: 'blob' })
        const blob = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        // render dokumen di browser
        window.open(blob)
        // this.isLoading = false

        // untuk di download
        // const link = document.createElement('a')
        // link.href = blob
        // link.setAttribute('download', 'file.pdf')
        // document.body.appendChild(link)
        // link.click()
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },

    renderDocument: function (base64, record) {
      let newWindow = window.open(base64)
      newWindow.document.write('<iframe src="data:application/pdf;base64,' + (base64) + '" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100vh" width="100%" allowfullscreen></iframe>')
      let title = record.patient.nrm + ' - ' + record.form_name
      newWindow.document.title = title
    },

    openDatePicker: function () {
      Event.$emit('openDatePickerMoveDocument', this.selectedDocumentOnContext)
    },

    openNoteModal: function (document) {
      Event.$emit('openNoteModal', document)
    },

    openDeleteRecordModal: function () {
      setTimeout(() => {
        Event.$emit('openDeleteRecordModal', this.selectedDocumentOnContext)
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>