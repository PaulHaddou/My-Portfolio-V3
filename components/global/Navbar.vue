<template>
  <nav class="navbar">
    <div class="navbar__container">
      <nuxt-link
        class="navbar__container__logo"
        to="/"
      >
        <span
          class="navbar__container__logo__image"
        >
          PH
        </span>
      </nuxt-link>
      <div
        class="navbar__container__links"
        :class="isBurgerOpen ? 'navbar__container__links--opened' : 'navbar__container__links--closed'"
      >
        <div
          v-for="(link, index) in navbarLinks"
          :key="index"
          class="navbar__container__links__link"
        >
          <nuxt-link
            v-if="!link.isExternal"
            class="navbar__container__links__link__element"
            :to="link.path"
          >
            {{ $t('navbar.links.'+ link.key ) }}
          </nuxt-link>
          <a
            v-else
            class="navbar__container__links__link__element"
            :href="link.path"
            target="_blank"
          >
            {{ $t('navbar.links.'+ link.key ) }}
          </a>
        </div>
      </div>
      <div
        class="navbar__container__burger"
        :class="isBurgerOpen ? 'navbar__container__burger--opened' : 'navbar__container__burger--closed'"
        @click="switchBurgerState"
      >
        <span class="navbar__container__burger__line" />
        <span class="navbar__container__burger__line" />
        <span class="navbar__container__burger__line" />
      </div>
    </div>
  </nav>
</template>
<script>
import { NAVBAR_LINKS } from '~/constants'

export default {
  name: 'Navbar',
  components: {
  },
  data () {
    return {
      navbarLinks: NAVBAR_LINKS,
      isBurgerOpen: false
    }
  },
  computed: {
  },
  mounted () {
    const navbarLinksContainer = document.querySelector('.navbar__container__links')
    navbarLinksContainer.style.maxHeight = (window.innerHeight - 100) + 'px'
  },
  methods: {
    animateBurgerLinks () {
      const navbarLinks = document.querySelectorAll('.navbar__container__links__link__element')
      const navbarLinksContainer = document.querySelector('.navbar__container__links')
      if (this.isBurgerOpen) {
        navbarLinksContainer.style.transition = 'transform 0.7s ease'
        for (let i = 0; i < navbarLinks.length; i++) {
          navbarLinks[i].style.transition = 'transform 0.7s ease ' + (0.4 + i * 0.3) + 's'
        }
      } else {
        navbarLinksContainer.style.transition = 'transform 0.7s ease ' + (0.4 + 0.3 * navbarLinks.length) + 's'
        for (let i = 0; i < navbarLinks.length; i++) {
          navbarLinks[i].style.transition = 'transform 0.7s ease ' + ((navbarLinks.length - i) * 0.3) + 's'
        }
      }
    },
    switchBurgerState () {
      this.isBurgerOpen = !this.isBurgerOpen
      this.animateBurgerLinks()
    }
  }
}
</script>
<style
  lang="scss"
  scoped
>
.navbar {
    height: $navbar-height;
    position: fixed;
    @include grid-full-width;
    width: calc(100vw - 2 * $gutter-desktop);
    //Tablet
    @media (min-width: $bp-mobile) and (max-width: $bp-tablet) {
        width: calc(100vw - 2 * $gutter-tablet);
    }
    //Mobile
    @media (max-width: $bp-mobile) {
        width: calc(100vw - 2 * $gutter-mobile);
    }
    &__container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        background-color: $color-p-white;
        //Mobile
        @media (max-width: $bp-mobile) {
            justify-content: flex-end;
        }
        &__logo{
            text-decoration: none;
            color: $color-p-blue;
            font-family: $secondary-font-family;
            font-size: 22px;
            //Mobile
            @media (max-width: $bp-mobile) {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        &__links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            background-color: $color-p-white;
            left: - $gutter-desktop;
            top: 0;
            height: calc(100vh - $navbar-height);
            margin-top: $navbar-height;
            width: 100vw;
            z-index: -1;
            //Tablet
            @media (min-width: $bp-mobile) and (max-width: $bp-tablet) {
                left: - $gutter-tablet;
            }
            //Mobile
            @media (max-width: $bp-mobile) {
                left: - $gutter-mobile;
            }
            &--opened {
                transform: translateY(0%);
                .navbar__container__links__link__element {
                    transform: translateY(0%);
                }
            }
            &--closed {
                transform: translateY(-100%);
                .navbar__container__links__link__element {
                    transform: translateY(110%);
                    transition: transform 0.7s ease;
                }
            }
            &__link {
                overflow-y: hidden;
                width: 100%;
                height: fit-content;
                margin-bottom: 32px;
                display: flex;
                justify-content: center;
                &__element{
                    width: 100%;
                    text-decoration: none;
                    text-align: center;
                    font-size: 80px;
                    font-family: $secondary-font-family;
                    color: $color-p-blue;
                    //Mobile
                    @media (max-width: $bp-mobile) {
                        font-size: 40px;
                    }
                }
            }
        }
        &__burger {
            width: 29px;
            height: 22px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            overflow: hidden;

            &__line {
                width: 100%;
                height: 4px;
                border-radius: 2px;
                background-color: $color-p-blue;
                transition: transform 0.7s;
            }
            &--opened {
                .navbar__container__burger__line:nth-child(1) {
                    transform: translateY(9px) rotate(45deg);
                }
                .navbar__container__burger__line:nth-child(2) {
                    transform: translateX(-100%);
                }
                .navbar__container__burger__line:nth-child(3) {
                    transform: translateY(-9px) rotate(-45deg);
                    outline: 3px $color-p-white solid;
                }
            }
            .--closed {
                .navbar__container__burger__line:nth-child(1) {
                    transform: translateY(0px) rotate(0deg);
                }
                .navbar__container__burger__line:nth-child(2) {
                    transform: translateX(0%);
                }
                .navbar__container__burger__line:nth-child(3) {
                    transform: translateY(0px) rotate(0deg);
                }
            }
        }
    }
}
</style>
