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
      <div class="field">
        <div class="control has-icons-left">
          <input class="input is-fullwidth" type="text" placeholder="Filter" required>
          <span class="icon is-left">
            <i class="fas fa-address-card"></i>
          </span>
        </div>
      </div>
      <div class="is-divider" data-content="Rekam Medis"></div>
      <div class="quickview-body">
        <div class="card">
          <div class="card-content">
            <a href="javascript:void(0)" @click="isDocumentClicked">
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
</template>

<script>
import { bulmaQuickview } from 'bulma-extensions/dist/js/bulma-extensions.min.js'
import Loading from 'vue-loading-overlay'
import { setTimeout } from 'timers';

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
    Loading
  },
  methods: {
    isDocumentClicked() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000);
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