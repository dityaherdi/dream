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
              <a href="#" class="dropdown-item" v-for="month in getMonth" :key="month" @click="findDocuments(patient, year, month)">
                {{ month | monthByName}}
              </a>
            </div>
          </div>
        </div>

        <div class="control has-icons-left" style="width: 100%">
          <input class="input" type="text" placeholder="Filter" v-model="filterSearch">
          <span class="icon is-left">
            <i class="fas fa-quote-left"></i>
          </span>
        </div>
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
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <a href="javascript:void(0)" @contextmenu.prevent="$refs.menu.open($event, document)">
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
    <!-- <vue-context ref="menu" @open="onContextOpen"> -->
    <vue-context ref="menu" @close="onContextClose" @open="onContextOpen">
      <li>
        <a href="#">
          <i class="fas fa-book-open has-margin-right-10"></i>
          Buka Dokumen
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-print has-margin-right-10"></i>
          Print
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-file-download has-margin-right-10"></i>
          Download
        </a>
      </li>
      <li>
        <a href="#">
        <i class="fas fa-share has-margin-right-10"></i>
          Pindahkan
        </a>
      </li>
    </vue-context>
    <!-- Context Menu -->
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { Event } from './../../helpers/event'
import { VueContext } from 'vue-context'
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
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
      selectedDocumentOnContext: {}
    }
  },
  computed: {
    ...mapGetters([
      'getMonth', 'getDocuments'
    ]),

    filteredList() {
      return this.getDocuments.filter((document) => {
        return document.form_name.toLowerCase().includes(this.filterSearch.toLowerCase()) || document.form_number.toLowerCase().includes(this.filterSearch.toLowerCase())
      })
    }
  },
  components: {
    VueContext,
    Loading
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
      this.selectedDocumentOnContext = {}
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
    }
  }
}
</script>

<style scoped>

</style>