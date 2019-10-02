<template>
  <div class="column">
    <Loading :active.sync="isLoading" :is-full-page="true" color="hsl(171, 100%, 41%)"/>

    <h3 class="title">
      Upload File Rekam Medis
    </h3>

    <p class="subtitle">
      <i>*File yang diupload harus format .pdf</i>
    </p>
    
    <div class="is-divider" data-content="DATA PASIEN"></div>
    
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nomor Rekam Medis
            <i class="is-size-7 has-text-danger">{{ validation.nrm.required.state ? '' : validation.nrm.required.message }}</i>
          </label>
          <div class="control has-icons-left">
            <input class="input is-rounded" :class="validation.nrm.required.state ? '' : 'is-danger'" type="text" placeholder="Text input" required v-model="doc.nrm" @change="patientName">
            <span class="icon is-left">
              <i class="fas fa-address-card"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
            <label class="label">Tanggal Kedatangan
              <i class="is-size-7 has-text-danger">{{ validation.date.required.state ? '' : validation.date.required.message }}</i>
            </label>
            <div class="control has-icons-left">
              <DatePicker :input-class="validation.date.required.state ? 'input is-rounded' : 'input is-rounded is-danger'" :language="lang" v-model="doc.date" :full-month-name="true" format="dd MMMM yyyy" :use-utc="true" />
              <span class="icon is-left">
                <i class="fas fa-calendar-alt"></i>
              </span>
            </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Nama Pasien
        <i class="is-size-7 has-text-danger">{{ validation.name.required.state ? '' : validation.name.required.message }}</i>
      </label>
      <div class="control has-icons-left" :class="fieldLoading ? 'is-loading' : ''">
        <input class="input is-rounded" style="text-transform:uppercase;" :class="validation.name.required.state ? '' : 'is-danger'" type="text" placeholder="Text input" required v-model="doc.name" :disabled="isNameDisabled">
        <span class="icon is-left">
          <i class="fas fa-font"></i>
        </span>
      </div>
    </div>
    <div class="is-divider" data-content="DOKUMEN REKAM MEDIS"></div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <input type="checkbox" v-model="isChecked" id="checkbox1" class="is-checkradio has-background-color is-success" :disabled="disabledCheckbox">
          <label class="label has-margin-left-10" title="Centang apabila dokumen tidak memiliki Nomor atau Nama Formulir" for="checkbox1">Upload Tanpa Identitas Formulir Rekam Medis</label>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nomor Form
            <i class="is-size-7 has-text-danger">{{ validation.formNumber.required.state ? '' : validation.formNumber.required.message }}</i>
          </label>
          <div class="control has-icons-left">
            <v-select :options="options" label="number" :disabled="fieldIsDisabled" @search="searchFormNumber" v-model="doc.formNumber" @input="setSelected" placeholder="Ketik nomor form" :taggable="true">
              <template slot="no-options">
                <i>pilihan tidak tersedia...</i>
              </template>
            </v-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
            <label class="label">Nama Form
              <i class="is-size-7 has-text-danger">{{ validation.formName.required.state ? '' : validation.formName.required.message }}</i>
            </label>
            <div class="control has-icons-left">
              <input class="input" type="text" :class="validation.formName.required.state ? '' : 'is-danger'" placeholder="Text input" required v-model="doc.formName" :disabled="fieldIsDisabled">
              <span class="icon is-left">
                <i class="fas fa-spell-check"></i>
              </span>
            </div>
        </div>
      </div>
    </div>
    <!-- <div class="columns">
      <div class="column">
        <label class="label">Pilih Dokumen
          <i class="is-size-7 has-text-danger">{{ validation.docRm.required.state ? '' : validation.docRm.required.message }}</i>
        </label>
        <div class="field">
          <div class="file is-primary has-name is-fullwidth">
            <label class="file-label">
              <input class="file-input" type="file" multiple name="file" @change="fileToUpload" @click="clearUpload">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Upload Dokumen
                </span>
              </span>
              <span class="file-name">
                {{ filenameToUpload == '' ? 'Tidak ada file' : filenameToUpload | fixedLength }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div> -->
    <div class="columns">
      <div class="column">
        <label class="label">Pilih Dokumen
          <i class="is-size-7 has-text-danger">{{ validation.docRm.required.state ? '' : validation.docRm.required.message }}</i>
        </label>
        <div class="field">
          <div class="file is-centered is-boxed is-danger has-name is-fullwidth">
            <label class="file-label">
              <input class="file-input" type="file" name="file" @change="fileToUpload" @click="clearUpload">
              <span class="file-cta">
                <span class="file-icon is-large">
                  <i class="fas fa-upload fas fa-1x"></i>
                </span>
                <div class="file-label is-centered" style="margin-left: 95px;">
                  Upload Dokumen
                </div>
              </span>
              <span class="file-name">
                {{ filenameToUpload == '' ? 'Tidak ada file' : filenameToUpload | fixedLengthFileNameUpload }}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="column">
        <label class="label">Catatan / Keterangan</label>
        <textarea class="textarea" placeholder="Input Catatan / Keterangan" v-model="doc.note"></textarea>
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
import { async } from 'q';
import { Event } from './../../helpers/event'
import VSelect from 'vue-select'

export default {
  data: function () {
    return {
      doc: {
        nrm: '',
        name: '',
        date: '',
        formName: '',
        formNumber: '',
        note: '',
        docRm: []
      },
      // Buat Validasi sendiri tanpa package, jangan manja.....!
      validation: {
        nrm: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        name: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        date: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        formName: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        formNumber: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        docRm: {
          required: {
            state: true,
            message: '*file belum dipilih'
          }
        }
      },
      //
      filenameToUpload: '',
      lang: id,
      isLoading: false,
      fieldIsDisabled: false,
      // check tanpa identitas formulir
      isChecked: false,
      // list form number
      options: [],
      // checkbox
      disabledCheckbox: false,
      // loading nama pasien field
      fieldLoading: false,
      isNameDisabled: true
    }
  },

  created: function () {
    Event.$on('triggerClearForm', () => {
      this.clearForm()
    })
  },

  watch: {
    isChecked: function (value) {
      if (value === true) {
        this.doc.formName = this.doc.formNumber = null
        this.validation.formName.required.state = true
        this.validation.formNumber.required.state = true
      }
      this.fieldIsDisabled = !this.fieldIsDisabled
    },
    'doc.formNumber': function (value) {
      if (value == null) {
        this.doc.formName = ''
        this.disabledCheckbox = false
      } else if (value != '') {
        this.disabledCheckbox = true
      }
    }
  },

  components: {
    DatePicker,
    Loading,
    VSelect
  },

  methods: {
    fileToUpload: function (event) {
      // Multi File
      let files = event.target.files
      this.filenameToUpload = files[0].name
      for (let i = 0; i < files.length; i++) {
        if (files[i].type === 'application/pdf') {
          let reader = new FileReader()
          reader.onload = (event) => {
            this.doc.docRm.push(reader.result)
          }
          reader.readAsDataURL(files[i])
        } else {
          Vue.$toast.info(`Dokumen ${ files[i].name } harus berformat PDF!`)
          this.filenameToUpload = ''
          this.doc.docRm = []
          return
        }
      }

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
      //   Vue.$toast.info(`Dokumen ${ file.name } harus berformat PDF!`)
      //   this.filenameToUpload = ''
      //   this.doc.docRm = []
      //   return
      // }
    },

    upload: async function () {
      if (await this.validateFormUpload()) {
        this.clearFormValidation()
        this.isLoading = true
        try {
          const response = await axios.post('upload', this.doc)
          if (response.status == 200 || response.status == 201) {
            this.isLoading = false
            Event.$emit('closeQuickView')
            Vue.$toast.success(response.data.message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },

    onCancel: function () {
      this.isLoading = false
    },

    clearForm: function () {
      this.filenameToUpload = this.doc.nrm = this.doc.name = this.doc.date = this.doc.formName = this.doc.formNumber = ''
      this.isChecked = false
      this.doc.docRm = []
    },

    patientName: async function () {
      this.fieldLoading = true
      try {
        const response = await axios.get('patient-name', { params: { nrm: this.doc.nrm } })
        if (response.data.result == null) {
          this.isNameDisabled = false
        } else {
          this.isNameDisabled = true
        }
        this.doc.name = response.data.result
        this.fieldLoading = false
      } catch (error) {
        console.log(error)
      }
    },

    searchFormNumber: function (search, loading) {
      this.newFormNumber = search
      this.options.push({ number: search })
      if (search != '') {
        loading(true)
        this.getFormNumber(search, loading, this)
      }
    },

    getFormNumber: _.debounce(async (search, loading, vm) => {
      try {
        const response = await axios.get('form-number', { params: { formNumber: search } })
        if (response.status == 200) {
          loading(false)
          vm.options = response.data.result
        }
      } catch (error) {
        console.log(error)
      }
    }, 1500),

    setSelected: function (value) {
      if (typeof value == 'string' ) {
        this.doc.formNumber = value
        this.doc.formName = ''
      } else if (typeof value == 'object') {
        this.doc.formNumber = value.number
        this.doc.formName = value.name
      }
    },

    clearUpload: function () {
      this.doc.docRm = []
    },
    // Validation
    validateFormUpload() {
      let validateResult = [];

      // NRM
      if (this.doc.nrm == '') {
        this.validation.nrm.required.state = false
        validateResult.push(0)
      } else {
        validateResult.push(1)
      }
      // Date
      if (this.doc.date == '') {
        this.validation.date.required.state = false
        validateResult.push(0)
      } else {
        validateResult.push(1)
      }
      // Name
      if (this.doc.name == '') {
        this.validation.name.required.state = false
        validateResult.push(0)
      } else {
        validateResult.push(1)
      }

      if (!this.isChecked) {
        // formNumber
        if (this.doc.formNumber == '') {
          this.validation.formNumber.required.state = false
          validateResult.push(0)
        } else {
          validateResult.push(1)
        }
        // formName
        if (this.doc.formName == '') {
          this.validation.formName.required.state = false
          validateResult.push(0)
        } else {
          validateResult.push(1)
        }
      }

      // file
      if (this.doc.docRm.length == 0) {
        this.validation.docRm.required.state = false
        validateResult.push(0)
      } else {
        validateResult.push(1)
      }

      if (validateResult.includes(0)) {
        return false
      } else {
        return true
      }
    },
    // Clear Form Validation Error
    clearFormValidation() {
      this.validation.nrm.required.state = true
      this.validation.name.required.state = true
      this.validation.date.required.state = true
      this.validation.formName.required.state = true
      this.validation.formNumber.required.state = true
      this.validation.docRm.required.state = true
    }
  }
}
</script>

<style scoped>

</style>