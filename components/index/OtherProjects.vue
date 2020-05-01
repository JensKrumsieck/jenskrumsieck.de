<template>
  <div class="container is-fluid others margin-top">
    <div class="columns is-variable is-8 is-multiline is-mobile">
      <div class="column chn">
        <Card :title="'CHN Calculator'" :tags="'C#,.NET,WPF,Blazor,Xamarin'">
          <template slot="image">
            <img src="/img/chn.svg" alt="CHN Tool Logo" />
          </template>
          <template slot="links">
            <ul>
              <li>
                <a class="level alvl" href="https://github.com/JensKrumsieck/CHN-Tool">
                  <b-icon icon="github" />
                  <span>Repository</span>
                </a>
              </li>
              <li>
                <a class="level alvl" href="/chn">
                  <b-icon icon="window-maximize" />
                  <span>Online Version</span>
                </a>
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <div class="column bp2">
        <Card :title="'BluEPRint2 (EPR-Viewer)'" :tags="'C#,.NET,WPF'">
          <template slot="image">
            <img src="/img/bp2.svg" alt="BluEPRint Logo" />
          </template>
          <template slot="links">
            <ul>
              <li>
                <a class="level alvl" href="https://github.com/JensKrumsieck/BluEPRint2">
                  <b-icon icon="github" />
                  <span>Repository</span>
                </a>
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <div class="column oif">
        <Card :title="'orca-input-file'" :tags="'vscode-extension'">
          <template slot="links">
            <ul>
              <li>
                <a class="level alvl" href="https://github.com/JensKrumsieck/orca-input-file">
                  <b-icon icon="github" />
                  <span>Repository</span>
                </a>
              </li>
              <li>
                <a
                  class="level alvl"
                  href="https://marketplace.visualstudio.com/items?itemName=JensKrumsieck.orca-input-file"
                >
                  <b-icon icon="microsoft-windows" />
                  <span>Marketplace</span>
                </a>
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <div class="column fcms">
        <Card :title="'Fireball CMS'" :tags="'WoltLab Suite,PHP'">
          <template slot="title">
            <p class="subtitle is-7 has-text-success is-italic has-text-centered">Discontinued</p>
          </template>
          <template slot="image">
            <img src="/img/fbcms.svg" alt="Fireball CMS Logo" />
          </template>
          <template slot="links">
            <ul>
              <li>
                <a class="level alvl" href="https://github.com/codeQuake/Fireball">
                  <b-icon icon="github" />
                  <span>Repository</span>
                </a>
              </li>
            </ul>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from '~/components/Card.vue'
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {
    Card
  }
})
export default class OtherProjects extends Vue {}
</script>
<style lang="scss" scoped>
.alvl {
  display: inline-flex;
}
.fcms {
  opacity: 0.6;
}
</style>