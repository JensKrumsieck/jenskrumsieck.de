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
import navbar from '~/layouts/partials/Navbar'
export default Vue.extend({
  components:{
    navbar
  }
})
</script>