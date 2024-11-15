<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
    }
  },
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<template>
  <div>
    <!-- <AppHeader /> -->
    <RouterView />
    <!-- <AppMain /> -->
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
