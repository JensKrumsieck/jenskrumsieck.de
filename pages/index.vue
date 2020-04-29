<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns is-vcentered is-desktop">
            <div class="column has-text-centered">
              <h1 class="title is-1">
                Let's
                <span class="has-text-link">dissolve</span> Problems!
              </h1>
              <div class="is-divider" />
              <img src="/img/logo.svg" alt="logo" class="logo" />
              <p class="subheadline">Chemist - .NET Developer - Webdesigner - Wrestler</p>
            </div>
            <div class="column has-text-centered">
              <img src="/img/heroimage.png" alt="jens krumsieck" class="heroimg" />
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered scroll-icon">
        <b-icon icon="chevron-down" size="is-large" class="bounce" />
      </div>
    </div>
    <Articles />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Articles from '~/components/Articles'

export default Vue.extend({
  components: {
    Articles
  }
})
</script>

<style lang="scss" scoped>
h1.title {
  font-style: italic;
  font-size: 4rem;
}
.logo {
  height: 2.5rem;
}

.heroimg {
  max-width: 50%;
}
</style>