<template>
<div>
  <template v-if="$route.meta.requiresAuth">
    <top-navigation></top-navigation>
  </template>
  
  <div :class="$route.meta.requiresAuth ? 'container' : ''">
    <router-view></router-view>
  </div>

  <template v-if="$route.meta.requiresAuth">
    <bottom-footer></bottom-footer>
  </template>
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
