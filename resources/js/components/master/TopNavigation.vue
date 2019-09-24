<template>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TopNavigation',
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),

    logoutUser: async function () {
      if (await this.logout()) {
        this.$router.go({ name: "login"})
      }
    }
  }
}
</script>

<style>

</style>
