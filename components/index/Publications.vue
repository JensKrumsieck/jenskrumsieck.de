

<template>
  <div class="publication-container">
    <div class="has-dividers">
      <span class="is-divider" />
      <h2 class="title is-3 has-text-centered has-divider">Featured Publications</h2>
      <span class="is-divider" />
    </div>

    <div class="container is-fluid">
      <ul>
        <li v-for="pub in publications" :key="pub.id">
          <article>
            <div class="media">
              <div class="media-content">
                <h3 class="title is-5">
                  <a
                    :href="'https://dx.doi.org/' + pub.doi"
                    target="_blank"
                    class="has-text-white"
                  >{{pub.title}}</a>
                </h3>
                <p class="has-text-justified">{{pub.abstractText}}</p>
                <br />
                <small>
                  {{pub.authorString}}
                  <em>{{pub.journalInfo.journal.isoabbreviation}}</em>
                  <strong>{{pub.pubYear}}</strong>,
                  <em>{{pub.journalInfo.volume}}</em>
                  , {{pub.pageInfo}}.
                </small>
                <br />
                <small>
                  DOI:
                  <a :href="'https://dx.doi.org/' + pub.doi" target="_blank">{{pub.doi}}</a>
                </small>
              </div>
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
import { AxiosResponse } from 'axios'

interface PMCResult {
  resultList: Result[]
}
interface Result
{
  result: []
}

@Component({})
export default class Publications extends Vue {
  publications: any = null

  data() {
    return {
      publications: this.publications
    }
  }

  async fetch() {
  }
}
</script>