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
import TopNavigation from './TopNavigation'
import BottomFooter from './BottomFooter'

export default {
  components: {
    TopNavigation,
    BottomFooter
    // 'TopNavigation': () => import('./TopNavigation'),
    // 'BottomFooter': () => import('./BottomFooter'),
  }
}
</script>

<style>

</style>
