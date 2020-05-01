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
    <section class="blog-articles">
      <Articles />
    </section>
    <section class="projects" id="projects">
      <PorphyStruct />
      <Isoporphyrins />
      <OtherProjects />
    </section>
    <section class="publications" id="publications">
      <Publications />
    </section>
  </div>
</template>

<script lang="ts">
import Articles from '~/components/index/Articles.vue'
import PorphyStruct from '~/components/index/PorphyStruct.vue'
import Isoporphyrins from '~/components/index/Isoporphyrins.vue'
import OtherProjects from '~/components/index/OtherProjects.vue'
import Publications from '~/components/index/Publications.vue'

import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Articles,
    PorphyStruct,
    Isoporphyrins,
    OtherProjects,
    Publications
  }
})
export default class Index extends Vue{ }
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

.projects {
  margin-top: 7rem;
}
</style>