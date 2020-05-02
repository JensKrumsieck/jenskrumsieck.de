<template>
  <div class="columns is-mobile is-vcentered is-variable is-2">
    <div class="column is-2">
      <div class="image is-square">
        <img :src="'/img/' + image" alt class="is-rounded" />
      </div>
    </div>
    <div class="column">
      <div class="has-text-small">
        <p class="location has-text-grey-light">{{location}} - {{time}}</p>
      </div>
      <strong class="title is-size-6">{{title}}</strong> 
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CVItem extends Vue {
  @Prop(String) readonly location!: String
  @Prop(String) readonly title!: String
  @Prop(String) readonly time!: String
  @Prop(String) readonly image!: String
}
</script>

<style lang="scss" scoped>
.image > .is-rounded {
  background-color: $primary;
  border: 4px solid $green;
  object-fit: cover;
}
</style>