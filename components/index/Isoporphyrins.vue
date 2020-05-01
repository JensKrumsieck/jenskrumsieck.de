<template>
  <div class="container is-fluid isoporphyrins margin-top">
    <div class="columns is-vcentered is-multiline is-desktop is-centered">
      <div class="column is-5-desktop">
        <h2 class="title is-3">Synthesis of Isoporphyrins</h2>
        <p class="text has-text-justified margin-top">
          Main part of my Ph.D. Studies is the Synthesis of Isoporphyrin-complexes - non-aromatic tetrapyrrolic macrocycles with
          <em>near-infrared</em> (NIR)-Absorption capabilties.
          The absorption band is located typically between 700 and 1000 nm, i.e. the area where the skin can be easily passed to trigger processes through these compounds,
          such as the destruction of malignant tissue.
        </p>
      </div>
      <div class="column is-6-desktop is-offset-1-desktop">
        <figure class="image">
          <img src="/img/oriluy.png" alt="Isoporphyrin" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Isoporphyrins extends Vue {}
</script>