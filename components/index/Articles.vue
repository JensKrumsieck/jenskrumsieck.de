<template>
  <div class="container is-fluid">
    <h2 class="title is-4 has-bar">Latest Articles</h2>
    <div class="article-list columns is-multiline is-desktop">
      <div class="card column is-half-desktop" v-for="item in items" :key="item.title">
        <div class="card-image">
          <figure class="image is-2by1">
            <img :src="item.image" :alt="item.title" />
          </figure>
        </div>
        <div class="card-content is-overlay">
          <h4 class="title is-5 glitch" :data-text="item.title">
            <span>{{item.title}}</span>
          </h4>
          <div class="content has-text-justified is-small teaser">
            <span>{{item.teaser}}</span>
          </div>
          <div class="level">
            <div class="tags">
              <b-tag v-for="(value,index) in item.badges" :key="index" type="is-danger">{{ value }}</b-tag>
            </div>
            <p class="has-text-right has-text-grey-light small is-size-7">{{item.time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Articles extends Vue {
  data() {
    let items = [
      {
        title: 'This is my awesome title for an awesome Article',
        image: 'https://picsum.photos/id/0/1230/500',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://i.picsum.photos/id/866/1200/350.jpg',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://i.picsum.photos/id/294/1200/500.jpg',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://i.picsum.photos/id/254/1200/500.jpg',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      }
    ]
    return {
      items: items
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  margin: 2rem 0;
}
.card {
  margin-top: 2rem;
  background-color: transparent;
  .card-content {
    .title.glitch {
      &::before,
      &:after {
        padding: 0.15rem 0.25rem 0;
      }
      > span {
        position: relative;
        background-color: $red;
        display: inline;
      }
      padding: 0.15rem 0.25rem 0;
      font-weight: 200;
    }
    .teaser > span {
      background-color: transparentize($primary, 0.3);
    }
  }
  .title,
  .teaser {
    margin-bottom: 0.25rem;
    line-height: 1.4;
  }
  .card-image {
    box-shadow: 20px 20px 0px 1px $green;
    img {
      object-fit: cover;
    }
  }
  .tags {
    margin-bottom: 0 !important;
  }
}
@media (min-width: $widescreen) {
  .card {
    display: grid;
    grid-template-rows: minmax(100px, 5fr) min-content;
    grid-template-columns: 250px 2fr 2fr;
    .card-content {
      top: unset;
      grid-column: 2 / 4;
      grid-row: 2;
      min-width: 350px;
    }
    .card-image {
      grid-column: 1/3;
      grid-row: 1 / span 3;
    }
  }
}
</style>

<style lang="scss">
.carousel-slide {
  padding-right: 20px;
}
</style>