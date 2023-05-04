<template>
  <div class="informations">
    <p class="informations__description">
      {{ $t('home.projects.' + projectKey + '.content.description') }}
    </p>
    <div class="informations__details">
      <div class="informations__details__content">
        <span class="informations__details__content__title">
          {{ $t('home.projects.' + projectKey + '.content.jobs.title') }}
        </span>
        <p class="informations__details__content__subtitle">
          {{ $t('home.projects.' + projectKey + '.content.jobs.subtitle') }}
        </p>
      </div>
      <div class="informations__details__content">
        <span class="informations__details__content__title">
          {{ $t('home.projects.' + projectKey + '.content.tools.title') }}
        </span>
        <p class="informations__details__content__subtitle">
          {{ $t('home.projects.' + projectKey + '.content.tools.subtitle') }}
        </p>
      </div>
    </div>
  </div>
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
  .informations {
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    &__description {
      font-family: $primary-font-family;
      font-size: 17px;
      line-height: 1.3;
      color: $color-p-blue;
      width: calc(70% - 24px);
      margin: 0;
    }
    &__details {
      width: calc(30% - 24px);
      display: flex;
      flex-direction: column;
      &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__title {
          font-family: $secondary-font-family;
          font-size: 17px;
          line-height: 1.3;
          color: $color-p-blue;
          text-align: right;
        }
        &__subtitle {
          font-family: $primary-font-family;
          font-size: 17px;
          line-height: 1.3;
          color: $color-p-blue;
          margin: 0;
          margin-top: 8px;
          text-align: right;
        }
        &:nth-child(1) {
          margin-bottom: 32px;
        }
      }
    }
  }
</style>
