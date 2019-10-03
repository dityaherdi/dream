<template>
  <div class="column">
    <h1 class="title">
      E-Doc Library Rekam Medis
    </h1>
    <p class="subtitle">
      <i>*Dokumen rekam medis bersifat rahasia </i>
    </p>
    <nav class="panel">
      <template v-if="getMultiplePatientData.length != 0">
        <p class="panel-heading is-clearfix">
          Hasil Pencarian: '{{ keyword != '' ? keyword : '' }}'
        </p>
        <p class="panel-tabs">
          <a class="is-active">Ditemukan {{ getMultiplePatientData.length }} data</a>
        </p>
        <template v-for="patient in getMultiplePatientData">
          <a data-show="quickview" class="panel-block" data-target="viewDocumentList" title="Klik untuk melihat detail" :key="patient.id" @click="triggerSearch(patient.nrm)">
            <span class="panel-icon">
              <i class="fas fa-user-injured" aria-hidden="true"></i>
            </span>
            {{ patient.nrm }} - {{ patient.name }}
          </a>
        </template>
      </template>
      <template v-else>
        <p class="panel-heading is-clearfix" :title="getSearchResult.name == '' ? '' : getSearchResult.name">
          <template v-if="getSearchResult.nrm">
            {{ getSearchResult.nrm + ' - ' + getSearchResult.name | fixedLength }}
          </template>
          <template v-else>
            <i>Tidak ada pasien yang dipilih</i>
          </template>
          <a class="button is-pulled-right" title="Edit NRM dan Nama Pasien" :disabled="!Object.keys(patient).length ? true : false" @click="editPatient(patient)">
            <span class="icon">
              <i class="fas fa-pen-square"></i>
            </span>
          </a>
        </p>
        <p class="panel-tabs">
          <a class="is-active">Tahun Kedatangan Pasien</a>
        </p>
        <template v-for="year in getSearchResult.year">
          <a data-show="quickview" class="panel-block" data-target="viewDocumentList" title="Klik untuk melihat detail" @click="openQuickview(patient, year)" :key="year">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ year }}
          </a>
        </template>
      </template>
    </nav>

    <DocumentQuickView />

    <EditPatientModal />

  </div>
</template>

<script>
import { bulmaQuickview } from 'bulma-extensions/dist/js/bulma-extensions.min.js'
import DocumentQuickView from './DocumentQuickView'
// import Loading from 'vue-loading-overlay'
import { setTimeout } from 'timers'
import { VueContext } from 'vue-context'
import { Event } from './../../helpers/event'
import { mapGetters } from 'vuex'
import EditPatientModal from './EditPatientModal'

export default {
  name: 'DocumentList',
  created() {
    Event.$on('sendKeyword', (keyword) => {
      this.keyword = keyword
    })
  },
  mounted() {
    bulmaQuickview.attach()
  },
  updated() {
    this.patient = this.getSearchResult
  },
  data: function () {
    return {
      // isLoading: false,
      isModalLoading: false,
      patient: {},
      keyword: ''
    }
  },
  components: {
    // Loading,
    VueContext,
    // EditPatientModal: () => import('./EditPatientModal'),
    // DocumentQuickView: () => import('./DocumentQuickView')
    EditPatientModal,
    DocumentQuickView
  },
  computed: {
    ...mapGetters([
      'getSearchResult', 'getMultiplePatientData'
    ])
  },
  methods: {
    editPatient: function (patient) {
      Event.$emit('openEditPatientModal', patient)
    },
    openQuickview: function (patient, year) {
      Event.$emit('openQuickView', patient, year)
    },
    triggerSearch: function (keyword) {
      Event.$emit('triggerSearch', keyword)
    }
  }
}
</script>

<style scoped>

</style>