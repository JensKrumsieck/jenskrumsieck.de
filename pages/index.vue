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
              <LogoAnimation />
              <p class="subheadline boxContainer">
                <span>Chemist - .NET Developer - Webdesigner - Wrestler</span>
                <span class="_box _box2" />
              </p>
            </div>
            <div class="column has-text-centered">
              <div class="heroimg">
                <figure class="image bottom">
                  <img src="img/hero/bottom.png" alt class="clip-svg" />
                </figure>
                <figure class="image">
                  <img src="img/hero/top.png" alt />
                </figure>
                <svg width="0">
                  <defs>
                    <clipPath id="myClip" clipPathUnits="objectBoundingBox">
                      <path
                        d="M0.606,0.009C0.536,-0.006 0.464,-0.006 0.394,0.009L0.4,0.111C0.364,0.12 0.329,0.135 0.297,0.154L0.23,0.077C0.169,0.116 0.118,0.168 0.079,0.228L0.155,0.295C0.136,0.328 0.122,0.362 0.113,0.399L0.011,0.392C-0.004,0.463 -0.004,0.535 0.011,0.606L0.113,0.599C0.122,0.635 0.136,0.67 0.155,0.703L0.079,0.77C0.118,0.83 0.169,0.882 0.23,0.921L0.297,0.844C0.329,0.863 0.364,0.878 0.4,0.887L0.394,0.989C0.464,1.004 0.536,1.004 0.606,0.989L0.6,0.887C0.636,0.878 0.671,0.863 0.703,0.844L0.77,0.921C0.831,0.882 0.882,0.83 0.921,0.77L0.845,0.703C0.864,0.67 0.878,0.635 0.887,0.599L0.989,0.606C1.004,0.535 1.004,0.463 0.989,0.392L0.887,0.399C0.878,0.362 0.864,0.328 0.845,0.295L0.921,0.228C0.882,0.168 0.831,0.116 0.77,0.077L0.703,0.154C0.671,0.135 0.636,0.12 0.6,0.111L0.606,0.009Z"
                        style="fill:rgb(133,203,51);"
                      >
                        <animateTransform
                          type="rotate"
                          repeatCount="indefinite"
                          attributeName="transform"
                          from="0 0.5 0.5"
                          to="360 0.5 0.5"
                          begin="0"
                          dur="10s"
                        />
                      </path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered scroll-icon">
        <b-icon icon="chevron-down" pack="fas" size="is-medium" class="bounce" />
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
      <Posters />
    </section>
    <section class="about" id="about">
      <About />
    </section>
  </div>
</template>

<script lang="ts">
import Articles from '~/components/index/Articles.vue'
import PorphyStruct from '~/components/index/PorphyStruct.vue'
import Isoporphyrins from '~/components/index/Isoporphyrins.vue'
import OtherProjects from '~/components/index/OtherProjects.vue'
import Publications from '~/components/index/Publications.vue'
import Posters from '~/components/index/Posters.vue'
import About from '~/components/index/About.vue'
import LogoAnimation from '~/components/LogoAnimation.vue'

import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Articles,
    PorphyStruct,
    Isoporphyrins,
    OtherProjects,
    Publications,
    Posters,
    About,
    LogoAnimation
  }
})
export default class Index extends Vue {}
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
  margin: auto;
  position: relative;
  display: flex;
  align-items: baseline;
}
.clip-svg {
  clip-path: url(#myClip);
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}

.projects {
  margin-top: 7rem;
}
.boxContainer {
  span:first-of-type {
    animation: fadeIn 1.5s forwards;
    animation-delay: 2.8s;
    opacity: 0;
  }
}
</style>