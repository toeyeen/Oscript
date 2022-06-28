<template>
  <div
    class="fixed inset-0 top-0 left-0 z-10 w-full h-full mx-auto mt-0 bottonsheet-overlay mobile-max"
    @click="close"
  >
    <div
      class="absolute bottom-0 left-0 z-10 flex flex-col w-full p-2 bg-white rounded-t-lg bottonsheet"
      @click.stop
    >
      <div class="flex-shrink-0 w-8 h-1 mx-auto bg-blue-400 rounded-lg"></div>
      <p
        class="w-full max-w-full mt-2 text-xs font-bold text-center text-black capitalize"
      >
        {{ title }}
      </p>
      <button
        class="absolute top-0 right-0 mt-5 mr-4 text-black focus:outline-none"
        @click="close"
      >
        <svg-icon
          name="close"
          class="w-3 h-3 text-black fill-current"
        ></svg-icon>
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showSheet: true,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.bottonsheet-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.mobile-max {
  max-width: 760px;
}
</style>
