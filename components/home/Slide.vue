<template>
  <div class="slide">
    <div class="slide__content" />
    <div
      class="slide__background"
      :class="[
        isEven ? 'slide__background--even' : 'slide__background--odd',
        'slide__background--'+ projectData.key + 'Color'
      ]"
    >
      <img
        class="slide__background__image"
        :class="fullW ? 'slide__background__image--fullW' : 'slide__background__image--halfW'"
        :src="'/assets/images/projects/'+ projectData.key + '/background.png'"
        alt="Image illustrant le projet"
      >
    </div>
    <FloatingElements
      :project-key="projectData.key"
      :project-particles-amount="projectData.particlesAmount"
    />
  </div>
</template>
<script>
import FloatingElements from '@/components/home/FloatingElements.vue'

export default {
  components: {
    FloatingElements
  },
  props: {
    bgWidth: {
      type: Number,
      default: 100
    },
    isEven: {
      type: Boolean,
      default: true
    },
    projectData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style
  lang="scss"
  scoped
>
.slide {
    width: 100%;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    &__background {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        left: - $gutter-desktop;
        &--even {
            justify-content: flex-start;
        }
        &--odd {
            justify-content: flex-end;
        }
        //Tablet
        @media (min-width: $bp-mobile) and (max-width: $bp-tablet) {
            left: - $gutter-tablet;
        }
        //Mobile
        @media (max-width: $bp-mobile) {
            left: - $gutter-mobile;
        }
        &__image {
            height: 100%;
            object-fit: contain;
            object-position: bottom;
            &--fullW {
                width: 100%;
            }
            &--halfW {
                width: 50%;
            }
        }
    }
}
</style>
