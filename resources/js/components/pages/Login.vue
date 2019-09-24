<template>
<div>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <h1 class="title" style="color: black;">Login E-Doc RM</h1>
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
                <button class="button is-success is-fullwidth" @click.prevent="authenticate">
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

export default {
  name: 'Login',
  data: function () {
    return {
      credential: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions([
      'login'
    ]),

    authenticate: async function () {
      if (await this.login(this.credential)) {
        this.$router.push({ name: 'main' })
      }
    }
    // login: async function () {
    //   try {
    //     const response = await axios.post('auth/login', this.credential)
    //     console.log(response.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
}
</script>

<style scoped>

</style>