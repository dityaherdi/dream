<template>
  <div class="column">
    <Loading :active.sync="isLoading" :is-full-page="true" color="hsl(171, 100%, 41%)"/>

    <h3 class="title">
      Upload File Rekam Medis
    </h3>
    <p class="subtitle">
      <i>*File yang diupload harus format .pdf</i>
    </p>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nomor Rekam Medis</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="text" placeholder="Text input" required v-model="doc.nrm">
            <span class="icon is-left">
              <i class="fas fa-address-card"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Tanggal Kedatangan</label>
            <div class="control has-icons-left">
              <DatePicker input-class="input is-rounded" :language="lang" v-model="doc.date" :full-month-name="true" format="dd MMMM yyyy" :use-utc="true"/>
              <span class="icon is-left">
                <i class="fas fa-calendar-alt"></i>
              </span>
            </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nomor Form</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="text" placeholder="Text input" required v-model="doc.formNumber">
            <span class="icon is-left">
              <i class="fas fa-sort-numeric-up"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Nama Form</label>
            <div class="control has-icons-left">
              <input class="input is-rounded" type="text" placeholder="Text input" required v-model="doc.formName">
              <span class="icon is-left">
                <i class="fas fa-spell-check"></i>
              </span>
            </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Nama Pasien</label>
      <div class="control has-icons-left">
        <input class="input is-rounded" type="text" placeholder="Text input" required v-model="doc.name">
        <span class="icon is-left">
          <i class="fas fa-font"></i>
        </span>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="file is-primary has-name is-fullwidth">
            <label class="file-label">
              <input class="file-input" type="file" multiple name="file" @change="fileToUpload">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Upload Dokumen
                </span>
              </span>
              <span class="file-name">
                {{ filenameToUpload == '' ? 'Tidak ada file' : filenameToUpload}}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <button class="button is-dark is-fullwidth" @click="clearForm">
          <span class="icon has-margin-right-5">
            <i class="fas fa-broom"></i>
          </span>
          Bersihkan Form
        </button>
      </div>
      <div class="column">
        <button class="button is-link is-fullwidth" @click="upload">
          <span class="icon has-margin-right-5">
            <i class="fas fa-save"></i>
          </span>
          Simpan
        </button>
      </div>
    </div>
  </div>  
</template>

<script>
import DatePicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'
import Loading from 'vue-loading-overlay'

export default {
  data: function () {
    return {
      doc: {
        nrm: '',
        name: '',
        date: '',
        formName: '',
        formNumber: '',
        docRm: [],
      },
      filenameToUpload: '',
      lang: id,
      isLoading: false
    }
  },

  components: {
    DatePicker,
    Loading
  },

  methods: {
    fileToUpload: function (event) {
      // Multi File
      let files = event.target.files
      for (let i = 0; i < files.length; i++) {
        if (files[i].type === 'application/pdf') {
          let reader = new FileReader()
          reader.onload = (event) => {
            this.doc.docRm.push(reader.result)
          }
          reader.readAsDataURL(files[i])
        } else {
          alert('Filenya bukan PDF masbroo!')
        }
      }
      this.filenameToUpload = files.length+' file dipilih'

      // Single File
      // let file = event.target.files[0]
      // let reader = new FileReader()
      // if (file.type === 'application/pdf') {
      //   reader.onload = (event) => {
      //     this.doc.docRm = reader.result
      //     this.filenameToUpload = file.name
      //   }
      //   reader.readAsDataURL(file)
      // } else {
      //   alert('Filenya bukan PDF masbroo!')
      // }
    },

    upload: function () {
      this.isLoading = true
      axios.post('upload', this.doc).then((response) => {
        if (response.status == 200) {
          this.isLoading = false
          Vue.$toast.success(response.data.message, { position: 'top' })
        }
      })
    },

    onCancel: function () {
      this.isLoading = false
    },

    clearForm: function () {
      this.doc.nrm = this.doc.name = this.doc.date = this.doc.formName = this.doc.formNumber = ''
      this.doc.docRm = []
    }
  }
}
</script>

<style scoped>

</style>