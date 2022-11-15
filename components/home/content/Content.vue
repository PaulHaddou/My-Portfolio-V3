<template>
  <div
    class="content"
  >
    <div class="content__container">
      <Title
        :project-title="projectData.title"
        :project-key="projectData.key"
      />
    </div>
  </div>
</template>
<script>
import Title from '@/components/home/content/Title.vue'
export default {
  components: {
    Title
  },
  props: {
    projectData: {
      type: Array,
      default: () => {}
    }
    // projectParticlesAmount: {
    //   type: Number,
    //   default: 0
    // }
  }
}
</script>
<style
  lang="scss"
  scoped
>
.content {
  width: 50%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
}
</style>
