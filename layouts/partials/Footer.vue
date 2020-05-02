<template>
  <footer class="footer margin-top-large">
    <div class="container is-fluid">
      <div class="columns is-mobile is-variable is-8">
        <div class="column has-text-centered">
          <ul class="icons">
            <li>
              <a href="https://orcid.org/0000-0001-6242-5846">
                <b-icon pack="fab" icon="orcid" />
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/Jens_Krumsieck">
                <b-icon pack="fab" icon="researchgate" />
              </a>
            </li>
            <li>
              <a href="https://scholar.google.de/citations?user=_hJ9h1YAAAAJ">
                <b-icon pack="fab" icon="google" />
              </a>
            </li>
            <li>
              <a href="https://github.com/JensKrumsieck">
                <b-icon pack="fab" icon="github" />
              </a>
            </li>
            <li>
              <a href="https://www.xing.com/profile/Jens_Krumsieck/">
                <b-icon pack="fab" icon="xing" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jens_ation">
                <b-icon pack="fab" icon="twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jens.ation">
                <b-icon pack="fab" icon="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jens.krumsieck">
                <b-icon pack="fab" icon="facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column is-4">
          <strong>Jens Krumsieck, M.Sc.</strong>
          <br />Celler Str. 108
          <br />38114 Braunschweig
          <br />j.krumsieck[at]tu-braunschweig.de
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 0.05rem solid $green;
}
.icons {
  width: 25%;
  column-count: 4;
  column-gap: 0;
  li {
    padding-top: 1rem;
  }
}
</style>