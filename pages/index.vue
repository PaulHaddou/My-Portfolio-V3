<template>
  <div class="home">
    <Slide
      :bg-width="50"
      :is-even="false"
    />
  </div>
</template>

<script>
import Slide from '@/components/home/Slide.vue'

export default {
  name: 'IndexPage',
  components: {
    Slide
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
