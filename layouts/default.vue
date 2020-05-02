<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <nuxt />
    <Footer />
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
      'section[id]'
    )
    var self = this
    window.addEventListener('scroll', function() {
      setTimeout(() => self.handleURL(elements), 300)
    })
  }

  handleURL(elements: NodeListOf<Element>) {
    if (!elements || elements.length == 0) return

    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const offset =
      window.document.getElementsByClassName('navbar')[0].clientHeight + 10

    const first = elements[0] as HTMLElement
    if (scrollTop < first.offsetTop - offset && this.$route.hash != '') {
      //obviously haven't reached first item
      this.$router.replace({
        hash: '',
        params: {
          temp: 'noreload'
        }
      })
    }

    for (var i = 0; i < elements.length; i++) {
      let anchor = elements[i] as HTMLElement
      let nextAnchor = elements[i + 1] as HTMLElement
      if (
        scrollTop >= anchor.offsetTop - offset &&
        (!nextAnchor || scrollTop <= nextAnchor.offsetTop - offset)
      ) {
        if ('#' + anchor.id != this.$route.hash) {
          this.$router.replace({
            hash: '#' + anchor.id,
            params: {
              temp: 'noreload'
            }
          })
          return
        }
      }
    }
  }
}
</script>