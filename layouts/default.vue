<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/layouts/partials/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  },
  mounted() {
    if(window.location.hash) (this as any).$scrollTo(window.location.hash)
  }
})
</script>