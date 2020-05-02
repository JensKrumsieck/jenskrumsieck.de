<template>
  <div class="container is-fluid posters">
    <article v-for="poster in posters" :key="poster.title" class="media">
      <figure class="media-left">
        <p class="image">
          <img :src="'/img/posters/' + poster.file" alt />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h4 class="has-text-weight-normal">
            <strong>
              <a v-if="poster.url" :href="poster.url">{{poster.title}}</a>
              <span v-else>{{poster.title}}</span>
            </strong>
            <em class="has-text-light">({{poster.type}})</em>
          </h4>

          <ul class="is-size-7">
            <li v-for="loc in poster.conferences" :key="loc.date">
              {{loc.title}}
              <span v-if="loc.location">- {{loc.location}}</span> -
              <span class="has-text-grey-light">{{loc.date}}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator'

@Component({})
export default class Posters extends Vue {
  posters: any = null

  data() {
    return {
      posters: this.posters
    }
  }

  fetch() {
    this.posters = this.$store.state.posters
  }
}
</script>

<style lang="scss" scoped>
.content ul {
  list-style: none;
  margin: 0;
}
.media + .media {
  border: none !important;
  margin-bottom: 2rem;
}
.media-left {
  max-width: 150px;
  margin-right: 3rem;
}
.posters {
  background: url(/img/presentation.svg) no-repeat right center;
  background-size: 500px;
}
</style>