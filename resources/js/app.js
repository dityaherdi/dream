require('./bootstrap');

window.Vue = require('vue');
import router from './routes/router'
import store from './stores/store'

import VueToast from 'vue-toast-notification';
Vue.use(VueToast, { position: 'top', duration: 3000 })

import './helpers/filter'

Vue.component('vue-app', require('./components/master/App.vue').default)
const app = new Vue({
    el: '#app',
    router,
    store
});
