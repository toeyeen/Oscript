<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  color: $white-color;
  background: $primary-color;
  font-size: 16px;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.8rem 3.2rem;
  text-align: center;
  @include fCenter;
  min-height: 32px;

  &:hover {
    background: rgba(233, 233, 233, 0.9);
    background: rgba($primary-color, $alpha: 0.95);
  }
}
</style>
