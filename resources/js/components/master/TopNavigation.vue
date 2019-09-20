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
          <a class="button is-primary" @click="testDataSanata('00.00.01')">
            <strong>Logout</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'TopNavigation',
  methods: {
    testDataSanata: async function (nrm) {
      try {
        const response = await axios.get('sanata', { params: { nrm } })
        console.log(response)
      } catch (error) {
        console.log(response)
      }
    }
  }
}
</script>

<style>

</style>
