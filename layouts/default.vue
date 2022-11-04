<template>
  <div class="homeLayout">
    <Nuxt />
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  components: {
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
    font-family: 'mukta', sans-serif;
  }
  .homeLayout
  {
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;

  }
</style>
