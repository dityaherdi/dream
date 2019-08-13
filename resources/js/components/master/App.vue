<template>
<div>
  <top-navigation></top-navigation>
  <div class="container">
    <router-view></router-view>
  </div>
  <bottom-footer></bottom-footer>
</div>
</template>

<script>
export default {
  components: {
    'TopNavigation': () => import('./TopNavigation'),
    'BottomFooter': () => import('./BottomFooter'),
  }
}
</script>

<style>

</style>
