<template>
<div>
  <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true" color="hsl(171, 100%, 41%)" loader="spinner"/>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <h1 class="title" style="color: black;">Login</h1>
              <div class="is-divider"></div>
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" required v-model="credential.username">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" required v-model="credential.password">
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button is-success is-fullwidth" @click.prevent="authenticate" :disabled="disabledLoginButton">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from 'vue-loading-overlay'

export default {
  name: 'Login',
  components: {
    Loading
  },
  data: function () {
    return {
      credential: {
        username: '',
        password: ''
      },
      isLoading: false,
      disabledLoginButton: true
    }
  },
  watch: {
    'credential.username': function (value) {
      if (value != '' && this.credential.password != '') {
        this.disabledLoginButton = false
      } else {
        this.disabledLoginButton = true
      }
    },
    'credential.password': function (value) {
      if (value != '' && this.credential.password != '') {
        this.disabledLoginButton = false
      } else {
        this.disabledLoginButton = true
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),

    authenticate: async function () {
      this.isLoading = true
      if (await this.login(this.credential)) {
        this.$router.push({ name: 'main' })
        this.isLoading = false
      } else {
        Vue.$toast.error('Username atau Password Salah')
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>

</style>