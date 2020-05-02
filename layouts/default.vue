<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <nuxt />
    <Footer/>
  </div>
</template>

<script lang="ts">
import Navbar from '~/layouts/partials/Navbar.vue'
import Footer from '~/layouts/partials/Footer.vue'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class Default extends Vue {
  mounted() {
    //handles scrolling to hash when loading
    if (this.$route.hash)
      setTimeout(() => (this as any).$scrollTo(this.$route.hash), 1)

    const elements: NodeListOf<Element> = window.document.querySelectorAll(
      '[id]'
    )
    var self = this
    window.addEventListener('scroll', function() {
      setTimeout(() => self.handleURL(elements), 300)
    })
  }

  handleURL(elements: NodeListOf<Element>) {
    var io = new IntersectionObserver(
      (entries) => {
        let s = entries.filter((s) => s.isIntersecting).pop()
        if (s == undefined && this.$route.hash != '') {
          this.$router.replace({ hash: '' })
          return
        } else if (s != undefined && '#' + s.target.id != this.$route.hash) {
          this.$router.replace({ hash: '#' + s.target.id })
          return
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    )
    elements.forEach((s) => io.observe(s))
  }
}
</script>