<template>
  <div class="card has-text-centered">
    <div class="card-image">
      <figure class="image is-1by1">
        <slot name="image" />
      </figure>
      <!--insert image-->
    </div>
    <div class="card-content">
      <div class="card-title">
        <h3 class="title is-5">{{title}}</h3>
        <slot name="title" />
      </div>
      <div class="tags is-centered">
        <b-tag type="is-danger" v-for="(tag,key) in tagList" :key="key">{{tag}}</b-tag>
      </div>
      <div class="links is-size-7">
        <slot name="links" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop(String) readonly tags!: String
  @Prop(String) readonly title!: String

  data() {
    let taglist: string[] = this.$props.tags.split(',')
    return {
      tagList: taglist
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title,
.tags {
  min-height: 75px;
  min-width: 150px;
}
.card-image {
  max-width: 10rem;
  margin: auto;
}
</style>