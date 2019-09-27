<template>
<div>
  <template v-if="$route.meta.requiresAuth">
    <top-navigation></top-navigation>
  </template>
  
  <div :class="$route.meta.requiresAuth ? 'container' : ''">
    <vue-page-transition name="zoom">
      <router-view></router-view>
    </vue-page-transition>
  </div>

  <template v-if="$route.meta.requiresAuth">
    <bottom-footer></bottom-footer>
  </template>
</div>
</template>

<script>
import TopNavigation from './TopNavigation'
import BottomFooter from './BottomFooter'
// import VuePageTransition from 'vue-page-transition'

export default {
  components: {
    TopNavigation,
    BottomFooter
    // VuePageTransition
    // 'TopNavigation': () => import('./TopNavigation'),
    // 'BottomFooter': () => import('./BottomFooter'),
  }
}
</script>

<style>

</style>
