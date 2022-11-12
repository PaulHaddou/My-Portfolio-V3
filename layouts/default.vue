<template>
  <div class="defaultLayout">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/global/Navbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
}
</script>

<style
  lang='scss'
>
  html{
    scroll-behavior: smooth;
    overflow-x: hidden;
    overscroll-behavior-y: none;
  }
  body
  {
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .defaultLayout
  {
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    @include grid;
    max-width: $bp-max-width;
    background-color: $color-p-white;
  }
</style>
