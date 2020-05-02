<template>
  <b-navbar type="is-transparent is-fixed-top" wrapper-class="container is-fluid">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="/img/logo.svg" alt="logo" class="logo" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/', hash: '#projects' }" v-scroll-to="'#projects'">Projects</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/', hash: '#publications' }" v-scroll-to="'#publications'">Publications</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/', hash: '#about' }" v-scroll-to="'#about'">CV</b-navbar-item>
      <b-navbar-item href="/blazor">Blog</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Navbar extends Vue{}
</script>

<style lang="scss" scoped>
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
</style>