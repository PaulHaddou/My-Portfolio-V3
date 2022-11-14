<template>
  <div class="home">
    <Slide
      v-for="(project, index) in projects"
      :key="index"
      :bg-width="50"
      :is-even="!!(index % 2)"
      :project-data="project"
    />
  </div>
</template>

<script>
import Slide from '@/components/home/Slide.vue'
import { PROJECTS } from '@/constants'

export default {
  name: 'IndexPage',
  components: {
    Slide
  },
  data () {
    return {
      projects: PROJECTS
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>

  .home{
    @include grid-full-width;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $secondary-font-family;
  }
</style>
