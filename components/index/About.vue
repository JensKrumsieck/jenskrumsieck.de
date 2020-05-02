<template>
  <div class="container is-fluid margin-top-large">
    <h2 class="title is-4 has-bar">About Jens Krumsieck</h2>
    <div class="columns is-variable is-8 margin-top">
      <div class="column">
        <div class="mosaic">
          <div class="mosaic-item image">
            <img src="/img/pictures/imring.jpg" alt />
            <p class="is-overlay level alvl is-size-7">
              &copy; Linda Scholz
              <a class="level alvl" href="http://instagram.com/skyhighrollins">
                <b-icon icon="instagram" size="small" />@skyhighrollins
              </a>
            </p>
          </div>
          <div class="mosaic-item image">
            <img src="/img/pictures/imbüro.jpg" alt />
          </div>
          <div class="mosaic-item image">
            <img src="/img/pictures/cutter.jpg" alt />
          </div>
          <div class="mosaic-item image">
            <img src="/img/tunight.png" alt />
          </div>
        </div>
      </div>
      <div class="column">
        <h6 class="title is-5">Work Experience</h6>
        <ul class="cv-list">
          <li v-for="item in itemsWork" :key="item.time" class="content is-small">
            <CVItem
              :location="item.location"
              :time="item.time"
              :title="item.title"
              :image="item.image"
            >
              <p v-html="item.message" />
            </CVItem>
          </li>
        </ul>
        <h6 class="title is-5 margin-top">Education</h6>
        <ul class="cv-list">
          <li v-for="item in itemsSchool" :key="item.time" class="content is-small">
            <CVItem
              :location="item.location"
              :time="item.time"
              :title="item.title"
              :image="item.image"
            >
              <p v-html="item.message" />
            </CVItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator'
import CVItem from '~/components/CVItem.vue'

@Component({
  components: {
    CVItem
  }
})
export default class About extends Vue {
  data() {
    return {
      itemsWork: [
        {
          location: 'Braunschweig, DE',
          time: 'Jun. 2018 - today',
          title: 'Research Assistant - TU Braunschweig',
          image: 'heroimage.png',
          message:
            'During my Ph.D. studies i work as a research assistant in the fields of research and eduction. My main research field is the coordination chemistry of the isoporphyrin-ligand.'
        },
        {
          location: 'Braunschweig, DE',
          time: 'Aug. 2017 - Mai. 2018',
          title: 'Student Assistant - TU Braunschweig',
          image: 'pictures/mitmütze.jpg',
          message:
            'During my Masters Thesis i worked in the lab as a student research assistant.'
        },
        {
          location: 'Braunschweig, DE',
          time: 'Nov. 2011 - Feb. 2016',
          title: 'Student Assistant - TU Braunschweig',
          image: 'tunight.png',
          message:
            'During my Bachelors Thesis i worked for the TU Braunschweig as a student assistant in education. I gave tutorials in general and inorganic chemistry for chemistry and biology freshmen.'
        }
      ],
      itemsSchool: [
        {
          location: 'Braunschweig, DE',
          time: 'Jun. 2018 - today',
          title: 'Ph.D. studies - TU Braunschweig',
          image: 'pictures/vorpse.jpg',
          message:
            'After the Master I started my doctorate. During my doctorate, the idea for <a href="http://porphystruct.de">PorphyStruct</a>  was created together with my boss  Prof. Dr. Martin Bröring. At the same time, other smaller projects were brought to life.'
        },
        {
          location: 'Braunschweig, DE',
          time: 'Apr. 2016 - Apr. 2018',
          title: 'Masters Degree - TU Braunschweig',
          image: '/posters/icpp.png',
          message:
            'During my studies my interest in chemistry grew even more and I changed to the Master of Chemistry. I graduated with honors.'
        },
        {
          location: 'Braunschweig, DE',
          time: 'Oct. 2011 - Mar. 2016',
          title: 'Bachelors Degree - TU Braunschweig',
          image: 'oriluy.png',
          message: `After i finished school started to study with the goal to become a teacher for chemistry and mathematics at the 
                                TU Braunschweig. Here I started to write not only small programs in C# besides, but also bigger projects in the 
                                form of plugins and applications for the <a href=\"https://www.woltlab.com/\">WoltLab</a> Community Framework (or WoltLab Suite Core today). These were 
                                published under the project name \"<a href=\"https://github.com/codeQuake\">codeQuake</a>\". The <a href=\"https://github.com/codeQuake/Fireball\">Fireball CMS</a>, my biggest project at that time, is still being 
                                developed (under <a href=\"https://www.mysterycode.de/\">different leadership</a>)`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cv-list {
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    width: 4px;
    display: block;
    bottom: -10px;
    z-index: -1;
    background-color: $green;
    left: calc((16.6666666% - 2 * 0.5rem) / 2); //width is 2 - 2x $gap is-2
  }
}
.mosaic {
  display: grid;
  grid-template-columns: 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
}
.mosaic-item {
  overflow: hidden;
  &:nth-of-type(1) {
    grid-column: 1 / span 7;
    grid-row: 1 / span 6;
  }
  &:nth-of-type(2) {
    grid-column: 7 / span 3;
    grid-row: 3 / span 5;
  }
  &:nth-of-type(3) {
    grid-column: 2 / span 5;
    grid-row: 6 / span 4;
  }
  &:nth-of-type(4) {
    grid-column: 6 / span 3;
    grid-row: 7 / span 4;
  }
}
.is-overlay{
    padding: 10px;
    height: 7%;
    background: $primary;
    opacity: 0.25;
    vertical-align: middle;
}
</style>