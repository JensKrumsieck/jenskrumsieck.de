<template>
  <b-navbar type="is-transparent is-fixed-top" wrapper-class="container is-fluid">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="/img/logo.svg" alt="logo" class="logo" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item
        tag="nuxt-link"
        :to="{ path: '/', hash: '#projects' }"
        v-scroll-to="'#projects'"
      >Projects</b-navbar-item>
      <b-navbar-item
        tag="nuxt-link"
        :to="{ path: '/', hash: '#publications' }"
        v-scroll-to="'#publications'"
      >Publications</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/', hash: '#about' }" v-scroll-to="'#about'">CV</b-navbar-item>
      <b-navbar-item href="/blazor">Blog</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  beforeMount() {
    window.addEventListener('scroll', this.addBorder)
  }

  addBorder() {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )

    var navbar = window.document.getElementsByClassName('navbar')[0]
    if (scrollTop > 0) {
      navbar.classList.add('has-border')
    } else {
      navbar.classList.remove('has-border')
    }
  }
}
</script>

<style lang="scss" >
.navbar-brand {
  a.navbar-item {
    .logo {
      height: 6rem;
    }
  }
}
.is-transparent .navbar-item {
  background: transparent !important;
}
.has-border {
  border-bottom: solid 1rem $green;
  box-shadow: 0 0 20px 1px $dark;
}
</style>