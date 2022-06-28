<template>
  <svg-icon :name="name" class="inline-block fill-current"> </svg-icon>
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    name: {
      type: Number,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
