<template>
<div>
  <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true" color="hsl(171, 100%, 41%)" loader="spinner"/>
  <nav class="navbar is-spaced has-margin-bottom-25" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h2 class="title">DREAM - Dokumen Elektronik Rekam Medis</h2>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-primary" @click="logoutUser">
              <strong>Logout</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import router from './../../routes/router'
// import { Event } from './../../helpers/event'

export default {
  name: 'TopNavigation',
  components: {
    Loading
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  data: function () {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),

    logoutUser: async function () {
      this.isLoading = true
      if (await this.logout()) {
        this.$router.push('/login')
        this.isLoading = false
      }
      this.isLoading = false
    }
  }
}
</script>

<style>

</style>
