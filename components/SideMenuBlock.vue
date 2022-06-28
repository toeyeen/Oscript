<template>
  <div class="sidemenu__block"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidemenu {
  &__block {
    background-color: $gray-color;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    z-index: 120;
    position: fixed;
    max-width: calc((100% - $max-width) / 2);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
