<template>
  <div class="chn section">
    <client-only>
      <app v-pre>
        <div class="container">
          <p class="has-text-danger">Loading .NET Blazor...please wait</p>
        </div>
      </app>
      <script src="/_framework/blazor.webassembly.js"></script>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class CHN extends Vue {}
</script>

<style lang="scss">
.chn {
  .input,
  .label,
  p,
  li,
  .button {
    font-size: 0.85rem;
  }
  .is-3 {
    font-size: 1.25rem;
    font-weight: 200;
  }
  .is-4 {
    font-size: 1rem;
    font-weight: 200;
  }
}
@media (min-width: $desktop) {
  .chn p:last-of-type {
    width: 50%;
    margin: auto;
  }
}
</style>