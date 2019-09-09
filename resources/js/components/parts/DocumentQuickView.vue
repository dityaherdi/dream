<template>
  <div>
    <div id="viewDocumentList" class="quickview has-padding-15 quickview-left-border" :class="quickviewActive ? 'is-active' : ''">
      <Loading :active.sync="isLoading" :can-cancel="true" color="hsl(171, 100%, 41%)" loader="bars"/>
      <header class="quickview-header has-margin-bottom-15">
        <p class="title">{{ year }} - {{ patient.name }}</p>
        <span class="delete" data-dismiss="quickview" @click="closeQuickview"></span>
      </header>
      <div class="field is-horizontal">
        <div class="dropdown is-hoverable has-margin-right-15">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span class="icon is-left">
                <i class="fas fa-calendar-day"></i>
              </span>
              <span>Bulan Kedatangan</span>
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
        <div class="control has-icons-left">
          <input class="input" type="text" placeholder="Filter">
          <span class="icon is-left">
            <i class="fas fa-quote-left"></i>
          </span>
        </div>
      </div>

      <div class="is-divider" data-content="Rekam Medis"></div>
      <div class="quickview-body">
        <div class="card" v-for="document in getDocuments" :key="document.id">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <a href="javascript:void(0)" @contextmenu.prevent="$refs.menu.open">
                  <div class="media">
                    <div class="media-left">
                      <div class="icon is-large">
                          <i class="fas fa-file-pdf fa-3x"></i>
                      </div>
                    </div>
                    <div class="media-content">
                      <!-- <p>{{ document.id }}</p> -->
                      <p class="title is-4">{{ document.form_number }}</p>
                      <p class="subtitle is-6">{{ document.form_name }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Context Menu -->
    <vue-context ref="menu">
      <li>
        <a href="#">Option 1</a>
      </li>
      <li>
        <a href="#">Option 2</a>
      </li>
    </vue-context>
    <!-- Context Menu -->
    <!-- <button @click="log()">
      Console Log documents
    </button> -->
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { Event } from './../../helpers/event'
import { VueContext } from 'vue-context'
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    Event.$on('openQuickView', async (patient, year) => {
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
      patient: ''
    }
  },
  computed: {
    ...mapGetters([
      'getMonth', 'getDocuments'
    ])
  },
  components: {
    VueContext,
    Loading
  },
  methods: {
    ...mapActions([
      'folderMonth', 'documents'
    ]),

    closeQuickview: function () {
      this.quickviewActive = !this.quickviewActive
    },

    findDocuments: async function (patient, year, month) {
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
    // log() {
    //   console.log(JSON.stringify(this.getDocuments, null, 8))
    // }
  }
}
</script>

<style scoped>

</style>