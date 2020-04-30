<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/layouts/partials/Navbar.vue'
import scrollBehavior from '~/app/router.scrollBehavior'

export default Vue.extend({
  components: {
    Navbar
  },
  mounted() {
    //handles scrolling to hash when loading
    if (this.$route.hash)
      setTimeout(() => (this as any).$scrollTo(this.$route.hash), 1)

    const elements: NodeListOf<Element> = window.document.querySelectorAll(
      '[id]'
    )
    var self = this
    window.addEventListener('scroll', function() {
      self.handleURL(elements)
    })
  },
  methods: {
    handleURL: function(elements: NodeListOf<Element>) {
      var io = new IntersectionObserver(
        (entries) => {
          entries.forEach((s) => {
            if (s.target.id != '__nuxt' && s.target.id != '__layout') {
              if (history.state == null && s.isIntersecting)
                history.pushState({ hash: s.target.id }, '', '#' + s.target.id)
              else if (!s.isIntersecting && history.state != null)
                history.pushState(null, '', '/')
            }
          })
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        }
      )
      elements.forEach((s) => io.observe(s))
    }
  }
})
</script>