<template>
  <div>
    <label class="input-container">
      <input
        class="input"
        :type="mainType"
        v-bind="$attrs"
        @input="updateValue"
        :placeholder="label"
        :autocomplete="label"
      />
      <span class="input-label"> {{ label }} </span>
      <div class="cursor-pointer input-icon">
        <svg-icon
          v-if="showReveal"
          :name="iconType"
          class="inline-block w-4 h-4 fill-current"
          @click="toggleReveal"
        ></svg-icon>
      </div>
    </label>
  </div>

  <!-- <div class="flex flex-col w-full">
    <label
      class="mb-2 text-sm font-semibold text-primary-default-main"
      v-if="label"
      >{{ label }}</label
    ><span class="relative">
      <input
        :value="value"
        v-bind="$attrs"
        @input="updateValue"
        @focus="onFocus"
        @blur="onBlur"
        :error="hasError"
        :display="display"
        :size="size"
        :rounded="rounded"
        :class="[isError, cologBg, inputClass]"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :type="type"
        @keyup.enter="onPressEnter"
      />
    </span>
  </div> -->
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String,
    placeholder: {
      type: String,
      default: '',
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
    type: {
      type: String,
      default: 'password',
    },
  },
  data() {
    return {
      hasError: this.error,
      isRevealed: false,
      mainType: this.type,
    }
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
    toggleReveal() {
      this.isRevealed = !this.isRevealed
      if (this.isRevealed) this.mainType = 'text'
      if (!this.isRevealed) this.mainType = 'password'
    },
  },
  computed: {
    cologBg() {
      return 'bg-primary-bg-ter text-md border focus:outline-none'
    },
    inputClass() {
      return {
        'border-gray-400 ': this.error == false,
        'px-4 py-2': this.size == 'small',
        'px-4 py-3': this.size == 'medium',
        rounded: this.rounded == 'small',
        'border-gray-400': this.error == false,
        'w-full': (this.display = 'block'),
      }
    },

    isError() {
      return { 'border-red-500': this.error == true }
    },

    inputType() {
      return {
        password: this.type == 'password',
        number: this.type == 'number',
      }
    },

    showReveal() {
      return this.value.length > 0
    },

    iconType() {
      if (this.mainType == 'password' && this.showReveal) return 'unreveal'
      if (this.mainType == 'text' && this.showReveal) return 'reveal'
      if (this.mainType == 'text') return ''
    },

    toggledType() {
      return {
        text: this.isRevealed,
        password: !this.isRevealed,
      }
    },

    // classes() {
    //   const size = {
    //     large: 'lg',
    //     small: 'sm',
    //   }[this.size];
    //   return {
    //     [`ant-input-number-${size}`]: !!size,
    //     'ant-input-number-disabled': this.disabled,
    //     'ant-input-number-focused': !this.disabled && this.focused,
    //   };
    // },
  },
}
</script>

<style lang="scss" scoped>
.input {
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
    font-size: 16px;
    left: 0;
    color: #9ca3af;
    transform: translateY(30px);
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

// input:-webkit-autofill {
//   -webkit-box-shadow: 0 0 0px 1000px $primary-color inset;
// }

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: none;
  transition: background-color 5000s ease-in-out 0s;
}

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
