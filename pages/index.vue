<template>
  <div class="home">
    {{ $t('home-test-message') }}
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>

<style
  lang="scss"
  scoped
>

  .home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
