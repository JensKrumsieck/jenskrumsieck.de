<template>
  <section class="blog-articles">
    <div class="container is-fluid">
      <h2 class="title is-4 has-bar">Latest Articles</h2>
      <div class="article-list">
        <b-carousel-list :data="items" :config="config">
          <template slot="item" slot-scope="props">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img :src="props.list.image" :alt="props.list.title" />
                </figure>
              </div>
              <div class="card-content is-overlay">
                <p class="title is-5">{{props.list.title}}</p>
                <div class="content has-text-justified">
                  {{props.list.teaser}}
              </div>
              <div class="columns is-mobile content is-small">
                    <div class="column">
                      <div class="tags">
                        <b-tag
                          v-for="(value,index) in props.list.badges"
                          :key="index"
                          type="is-danger"
                        >{{ value }}</b-tag>
                      </div>
                    </div>
                    <div class="column">
                      <p class="has-text-right has-text-grey-light is-small">{{props.list.time}}</p>
                    </div>
                  </div>
                </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    let items = [
      {
        title: 'slide1',
        image: 'https://picsum.photos/id/0/1230/500',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://picsum.photos/id/0/1230/500',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://picsum.photos/id/0/1230/500',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      },
      {
        title: 'slide1',
        image: 'https://picsum.photos/id/0/1230/500',
        teaser:
          'Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.',
        time: '1 day ago',
        badges: ['News', 'Sass']
      }
    ]
    return {
      items: items,
      config: {
        arrow: true,
        hasDrag: true,
        itemsToShow: 1,
        breakpoints: {
          768: {
            itemsToShow: 2
          },
          960: {
            itemsToShow: 2.5
          }
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.article-list {
  margin: 2rem 0;
}
.card {
  background-color: transparent;
  border: 1px solid transparentize($green, 0.5);
  .card-content {
    background-color: transparentize($dark, 0.4);
    top: unset;
  }
  .title {
    margin-bottom: 0.25rem;
  }
  .image {
    min-height: 300px;
    > img {
      object-fit: cover;
    }
  }
}
</style>

<style lang="scss">
.carousel-slide {
  padding: 0 10px;
}
</style>