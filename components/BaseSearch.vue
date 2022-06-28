<template>
  <div class="search">
    <span class="search__icon">
      <svg-icon
        name="search"
        class="inline-block w-6 h-6 text-gray-400 fill-current"
      >
      </svg-icon>
    </span>
    <input
      type="text"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="updateValue"
      class="search__input"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: String,
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    onPressEnter(e) {
      this.$emit('onPressEnter', e)
    },
    onFocus(e) {
      this.$emit('onFocus', e)
    },
    onBlur(e) {
      this.$emit('onBlur', e)
    },
    onclick(e) {
      this.$emit('onClick', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  max-width: 400px;
  position: relative;
  &__icon {
    position: absolute;
    top: 18%;
    left: 8px;
    // @include absCenter;
  }

  &__input {
    width: 100%;
    padding: 0.5rem 1.6rem 0.5rem 2.4rem;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    &:focus,
    &:active {
      outline: none;
    }
  }
}
</style>
