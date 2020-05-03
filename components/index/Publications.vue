

<template>
  <div class="publication-container">
    <div class="has-dividers">
      <span class="is-divider" />
      <h2 class="title is-3 has-text-centered has-divider">Featured Publications</h2>
      <span class="is-divider" />
    </div>

    <div class="container is-fluid">
      <ul>
        <li v-for="pub in publications" :key="pub.doi">
          <article class="media">
            <div class="media-content">
              <h3 class="title is-5">
                <a
                  :href="'https://dx.doi.org/' + pub.doi"
                  target="_blank"
                  class="has-text-white"
                >{{pub.title}}</a>
              </h3>
              <p class="has-text-justified">{{pub.abstract}}</p>
              <br />
              <small>
                {{pub.authors.join(', ')}}
                <em>{{pub.journal.abbreviation}}</em>
                <strong>{{pub.journal.year}}</strong>,
                <em>{{pub.journal.volume}}</em>
                , {{pub.journal.pages}}.
              </small>
              <br />
              <small>
                DOI:
                <a :href="'https://dx.doi.org/' + pub.doi" target="_blank">{{pub.doi}}</a>
              </small>
            </div>
          </article>
        </li>
      </ul>
    </div>
    <div class="is-divider" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator'

@Component({})
export default class Publications extends Vue {
  publications: any = null

  data() {
    return {
      publications: this.publications
    }
  }

  fetch() {
    this.publications = this.$store.state.publications
  }
}
</script>

<style lang="scss" scoped>
.publication-container {
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.1;
    height: 100%;
    width: 50%;
  }
  &:after {
    background: url('/img/flask.svg') no-repeat right center;
    right: 0;
    transform: rotate(15deg);
    background-size: 25rem;
  }
  &:before {
    left: 0;
    transform: rotate(-10deg);
    background: url('/img/isopor.svg') no-repeat left center;
    background-size: 25rem;
  }
}
@media (max-width: $tablet) {
  .is-3 {
    font-size: 1.5rem;
  }
}
</style>