<template>
  <div class="flex items-center px-4 text-center text-white bg-red-500 h-9">
    <button class="focus:outline-none nav_back" @click="$router.go(-1)">
      <svg-icon
        name="back-arrow"
        class="inline-block w-4 h-4 text-white fill-current"
      ></svg-icon></button
    ><span class="flex-grow text-xs uppercase" style="letter-spacing: 1px">{{
      title
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Header',
    },
  },
}
</script>

<style lang="scss" scoped></style>
