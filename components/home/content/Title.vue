<template>
  <h3
    class="title"
    :class="'title--' + projectKey"
  >
    {{ projectTitle }}
    <span
      class="title__underline"
      :class="'title--underline--' + projectKey"
    />
  </h3>
</template>
<script>
export default {
  props: {
    projectTitle: {
      type: String,
      default: ''
    },
    projectKey: {
      type: String,
      default: ''
    }
  }
}
</script>
<style
  lang="scss"
  scoped
>
  .title {
    font-size: 60px;
    margin: 0;
    width: fit-content;
    position: relative;
    &__underline {
      width: calc(100% - 4px + 24px);
      height: 22px;
      position: absolute;
      bottom: 8px;
      left: 0;
      z-index: -10;
    }
  }
</style>
