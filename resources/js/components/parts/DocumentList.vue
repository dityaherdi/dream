<template>
  <div class="column">
    <h1 class="title">
      E-Doc Library Rekam Medis
    </h1>
    <p class="subtitle">
      <i>*Dokumen rekam medis bersifat rahasia </i>
    </p>
    <nav class="panel">
      <p class="panel-heading">
        Tahun Perekaman Rekam Medis [NRM-NAMA_PASIEN]
      </p>
      <a class="panel-block" data-show="quickview" data-target="viewDocumentList" title="Klik untuk melihat detail" @click="isDocumentClicked">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma A
      </a>
      <a class="panel-block" data-show="quickview" data-target="viewDocumentList" title="Klik untuk melihat detail" @click="isDocumentClicked">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma B
      </a>
    </nav>

    <div id="viewDocumentList" class="quickview has-padding-15 quickview-left-border">
      <Loading :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel" color="hsl(171, 100%, 41%)" loader="bars"/>
      <header class="quickview-header has-margin-bottom-15">
        <p class="title">TAHUN-NRM</p>
        <span class="delete" data-dismiss="quickview"></span>
      </header>
      <div class="field is-horizontal">
        <div class="control has-icons-left has-margin-right-15">
          <input class="input" type="text" placeholder="Filter">
          <span class="icon is-left">
            <i class="fas fa-quote-left"></i>
          </span>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span class="icon is-left">
                <i class="fas fa-calendar-day"></i>
              </span>
              <span>Bulan Perekaman</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                {{ '01' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '02' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '03' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '04' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '05' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '06' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '07' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '08' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '09' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '10' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '11' | monthByName }}
              </a>
              <a href="#" class="dropdown-item">
                {{ '12' | monthByName }}
              </a>
            </div>
          </div>
        </div>
      </div>

      

      <div class="is-divider" data-content="Rekam Medis"></div>
      <div class="quickview-body">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <a href="javascript:void(0)" @click="isDocumentClicked" @contextmenu.prevent="$refs.menu.open">
                  <div class="media">
                    <div class="media-left">
                      <div class="icon is-large">
                          <i class="fas fa-file-pdf fa-3x"></i>
                      </div>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <a href="javascript:void(0)" @click="isDocumentClicked" @contextmenu.prevent="$refs.menu.open">
                  <div class="media">
                    <div class="media-left">
                      <div class="icon is-large">
                          <i class="fas fa-file-pdf fa-3x"></i>
                      </div>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vue-context ref="menu">
      <li>
        <a href="#" @click="contextButtonClicked('Option 1')">Option 1</a>
      </li>
      <li>
        <a href="#" @click="contextButtonClicked('Option 2')">Option 2</a>
      </li>
    </vue-context>
  </div>
</template>

<script>
import { bulmaQuickview } from 'bulma-extensions/dist/js/bulma-extensions.min.js'
import Loading from 'vue-loading-overlay'
import { setTimeout } from 'timers'
import { VueContext } from 'vue-context'

export default {
  mounted() {
    bulmaQuickview.attach()
  },
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    Loading,
    VueContext
  },
  methods: {
    buttonListClicked(val) {
      alert(`button ${val} clicked...!`)
    },
    contextButtonClicked(val) {
      alert(val)
    },
    isDocumentClicked() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
      // alert('Document Clicked....!')
    },
    // listClicked() {
    //   alert('List Clicked....!')
    // }
    onCancel() {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>