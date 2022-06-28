<template>
  <div>
    <label :for="label" class="beta-field__label"> {{ label }}: </label>
    <textarea
      rows="6"
      class="beta-field"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss">
.beta-field {
  border: none;
  border: 1px solid #ddd;
  width: 100%;
  font-family: inherit;
  padding: 1rem;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 1rem;
  resize: none;
  // outline: 1px solid red;

  &:focus,
  &:active {
    outline: none;
    border: none;
    box-shadow: inset 0px 0px 3px 1px $primary-color-dark;
  }

  &__label {
    font-size: 13px;
    margin: 0 0 20px 0px;
    width: 100%;
    display: block;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $primary-color;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
