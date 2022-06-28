<template>
  <div class="sub-header">
    <div class="sub-header__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="sub-header__divider">
      <div class="sub-header__divider-1"></div>
      <div class="sub-header__divider-2"></div>
    </div>

    <!-- <span class="sub-header__divider-1"></span
    ><span class="sub-header__divider-2"></span> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [Number, String],
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.sub-header {
  margin-top: 2rem;
  &__title {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__divider {
    position: relative;
    margin-top: 0.5rem;
    &-1 {
      border-bottom: 2px solid $gray-color-light;
    }
    &-2 {
      position: absolute;
      left: 0;
      top: -2px;
      border-bottom: 4px solid $text-color;
      width: 200px;
    }
  }
}
</style>
