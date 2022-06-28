<template>
  <div>
    <label class="select-container">
      <select class="select" v-bind="$attrs" @change="updateValue">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :selected="option.value == value"
        >
          {{ option.name }}
        </option>
      </select>

      <span class="select-label"> {{ label }} </span>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    value: [String, Number],
    label: String,
    placeholder: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: [Number, String],
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
    rounded: {
      type: String,
      default: 'small',
    },
    display: {
      type: String,
      default: 'block',
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  letter-spacing: 1px;
  width: 100%;
  padding: 10px 0px;
  margin-top: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  background: inherit;
  position: relative;

  &-icon {
    position: absolute;
    bottom: 6px;
    right: 10px;
  }

  &::placeholder {
    opacity: 0;
  }

  &-container {
    margin-bottom: 15px;
    padding-bottom: 0.25rem;
    position: relative;
    border-bottom: 1px solid #ddd;
  }
  &-label {
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 1px;
    left: 0;
    transform: translateY(30px);
    color: #9ca3af;
    font-size: 16px;
    transition-duration: 300ms;
  }

  &-container:focus-within > &-label,
  &:not(:placeholder-shown) + &-label {
    color: $primary-color;
    transform: translateY(10px);
    font-size: 12px;
  }

  // &:active + &-label,
  // &:focus + &-label {
  //   visibility: visible;
  //   opacity: 1;
  //   transform: translateY(-20px);
  // }
}
</style>
