import Vue from 'vue'
// import moment from 'moment'

Vue.prototype.$filters = Vue.options.filters

// ganti parameter dengan date
// pulih month saja untuk filter
Vue.filter('monthByName', (month) => {
  switch (month) {
    case '01':
      return 'Januari'
    case '02':
      return 'Februari'
    case '03':
      return 'Maret'
    case '04':
      return 'April'
    case '05':
      return 'Mei'
    case '06':
      return 'Juni'
    case '07':
      return 'Juli'
    case '08':
      return 'Agustus'
    case '09':
      return 'September'
    case '10':
      return 'Oktober'
    case '11':
      return 'November'
    case '12':
      return 'Desember'
    default:
      break
  }
})

Vue.filter('fixedLength', (string) => {
  // return string.length // -> 60
  if (string.length > 60) {
    return string.substring(0, 57) + '...'
  } else {
    return string
  }
})