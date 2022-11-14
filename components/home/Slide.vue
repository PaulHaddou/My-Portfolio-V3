<template>
  <div class="slide">
    <div class="slide__content" />
    <span
      class="slide__background"
      :class="[
        bgWidth === 100 ? 'slide__background--fullW' : 'slide__background--halfW',
        isEven ? 'slide__background--even' : 'slide__background--odd'
      ]"
    />
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    bgWidth: {
      type: Number,
      default: 100
    },
    isEven: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
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
    padding-top: $navbar-height;
    box-sizing: border-box;
    &__background {
        position: absolute;
        height: 100vh;
        background-color: red;
        &--fullW {
            width: 100vw;
        }
        &--halfW {
            width: 50vw;
        }
        &--even {
            left: - $gutter-desktop;
            //Tablet
            @media (min-width: $bp-mobile) and (max-width: $bp-tablet) {
                left: - $gutter-tablet;
            }
            //Mobile
            @media (max-width: $bp-mobile) {
                left: - $gutter-mobile;
            }
        }
        &--odd {
            right: - $gutter-desktop;
            //Tablet
            @media (min-width: $bp-mobile) and (max-width: $bp-tablet) {
                right: - $gutter-tablet;
            }
            //Mobile
            @media (max-width: $bp-mobile) {
                right: - $gutter-mobile;
            }
        }
    }
}
</style>
