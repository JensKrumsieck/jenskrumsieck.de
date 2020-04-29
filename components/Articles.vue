<template>
  <section class="blog-articles">
    <div class="container is-fluid">
      <h2 class="title is-4 has-bar">Latest Articles</h2>
      <div class="article-list">
        <b-carousel-list :data="items" :arrow="true" :has-drag="true">
          <template slot="item" slot-scope="props">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img :src="props.list.image" :alt="props.list.title" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-6">{{props.list.title}}</p>
                <div class="content is-small has-text-justified">{{props.list.teaser}}</div>
                <div class="small is-small columns">
                  <div class="column">
                    <div class="tags">
                      <b-tag
                        v-for="(value,index) in props.list.badges"
                        :key="index"
                        type="is-danger smaller"
                      >{{ value }}</b-tag>
                    </div>
                  </div>
                  <div class="column has-text-right has-text-grey-light">{{props.list.time}}</div>
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
    return {
      items: [
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
    }
  }
})
</script>

<style lang="scss" scoped>
.article-list{
    margin: 2rem 0;
}
.card {
    background-color: transparent;
  .small {
    font-size: 0.5rem;
  }
  .smaller {
    font-size: 0.4rem;
  }
  border: 1px solid transparentize($green, 0.5);
  .title {
    margin-bottom: 0.25rem;
  }
  .image {
    min-height: 300px;
    > img {
      object-fit: cover;
    }
  }
  .card-content {
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    background: transparentize($dark, 0.3);
    width: 100%;
  }
}
</style>

<style lang="scss">
.carousel-slide {
  margin-right: 1rem;
}
</style>