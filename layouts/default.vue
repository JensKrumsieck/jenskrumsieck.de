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
import scrollBehavior from '~/app/router.scrollBehavior' 

export default Vue.extend({
  components: {
    Navbar
  },
  mounted(){
    //handles scrolling to hash when loading
    setTimeout(() => (this as any).$scrollTo(this.$route.hash),1);
  }
})
</script>