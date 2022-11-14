<template>
  <div
    v-if="projectParticlesAmount > 0"
    class="floatingElements"
  >
    <div class="floatingElements__container">
      <img
        v-for="(particle, index) in projectParticlesAmount"
        :key="index"
        class="floatingElements__container__image"
        :class="'floatingElements__container__image--' + projectKey + '-' + index"
        :src="'assets/images/projects/'+ projectKey +'/particles/'+ index +'.png'"
        alt=""
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projectKey: {
      type: String,
      default: ''
    },
    projectParticlesAmount: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style
  lang="scss"
  scoped
>
.floatingElements {
    height: 100%;
    width: 100vw;
    position: absolute;
    left: - $gutter-desktop;
    &__container {
        width: 100%;
        height: 100%;
        position: relative;
        &__image {
            object-fit: contain;
            position: absolute;
        }
    }
}
</style>
