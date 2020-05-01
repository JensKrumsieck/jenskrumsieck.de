<template>
  <div class="container is-fluid porphystruct">
    <figure class="image">
      <img src="/img/porphystruct.svg" alt="PorphyStruct" class="logo" />
      <div class="columns is-vcentered is-multiline is-desktop is-centered margin-top">
        <div class="column is-6-desktop">
          <figure class="image">
            <img src="/img/screen_porphystruct.png" alt="Screenshot" />
          </figure>
          <div class="tags">
            <b-tag type="is-danger">C#</b-tag>
            <b-tag type="is-danger">.NET</b-tag>
            <b-tag type="is-danger">WPF</b-tag>
          </div>
        </div>
        <div class="column is-5-desktop is-offset-1-desktop">
          <p class="text has-text-justified">
            <strong>PorphyStruct</strong> is one of my Ph.D. Projects as a Chemist bringing my Software Development ability to my Work as a Chemist.
            Molecular structures of porphyrinoid macrocycles can be analyzed quantitatively with this new software to gain insights to their properties and reactivity.
          </p>
          <div class="has-text-right margin-top">
            <a class="button is-danger">Explore</a>
          </div>
        </div>
        <div class="column is-5-desktop">
          <figure class="image">
            <img src="/img/screen_website.png" alt="Web Screenshot" />
          </figure>
          <div class="tags">
            <b-tag type="is-danger">HTML5</b-tag>
            <b-tag type="is-danger">Vue</b-tag>
            <b-tag type="is-danger">SCSS</b-tag>
          </div>
        </div>
      </div>
    </figure>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class PorphyStruct extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  width: 25%;
  min-width: 300px;
  margin: auto;
}
.porphystruct:after {
  content: '';
  position: absolute;
  background: url(/img/porphystructlogo.svg) no-repeat center center;
  background-size: contain;
  opacity: 0.1;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tags {
  margin-top: 1rem;
}
</style>