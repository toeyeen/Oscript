<template>
  <div>
    <PageHeader title="Verification" />
    <div class="main">
      <div class="main-container">
        <div class="flex flex-col items-center justify-center">
          <div>
            <p>
              You will receive a message containing your one time pin Shortly.
              Please enter it below
            </p>
          </div>

          <div id="otp" class="my-8">
            <input
              v-for="(input, index) in [1, 2, 3, 4, 5, 6]"
              class="w-10 h-10 mr-1 text-center border border-gray-400 rounded-lg md:mr-4 md:w-12 md:h-12 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
              type="text"
              :data-id="index + 1"
              placeholder="-"
              ref="inputs"
              :maxlength="1"
            />
          </div>
        </div>
        <base-button>Verify</base-button>
        <p class="mt-2 text-center cursor-pointer">Send Again</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
export default {
  components: { PageHeader },

  methods: {
    inputFocus() {
      console.log(this.$refs.inputs[0].focus())
    },

    oneInputField() {
      const inputs = this.$refs.inputs
      inputs[0].focus()
      inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
          e.target.value = e.target.value.trim().toUpperCase()

          const currentInputId = input.dataset.id
          if ((e.keyCode == 8 || e.keyCode == 37) && +currentInputId > 1) {
            input.previousSibling.focus()
            input.previousSibling.select()
          }

          if (
            ((e.keyCode >= 48 && e.keyCode <= 57) ||
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 96 && e.keyCode <= 105) ||
              e.keyCode === 39) &&
            +currentInputId < inputs.length
          ) {
            input.nextSibling.focus()
            input.nextSibling.select()
          }
          // if (
          //   (e.keyCode >= 48 && e.keyCode <= 57) ||
          //   (e.keyCode >= 65 && e.keyCode <= 90) ||
          //   (e.keyCode >= 96 && e.keyCode <= 105) ||
          //   e.keyCode === 39
          // ) {
          //   if (+currentInputId < inputs.length) {
          //     input.nextSibling.focus()
          //     input.nextSibling.select()
          //   }
          // }
        })
      })
    },
  },

  mounted() {
    this.oneInputField()
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: $white-color;
  padding: 2rem 1.6rem;
  margin-bottom: 8rem;

  &-container {
    @include respond(phone) {
      width: 60%;
      margin: 0 auto;
    }

    &__text {
      margin-top: 2rem;
      text-align: center;
    }
    &__header {
      text-align: center;
      & > h1 {
        color: $primary-color;
      }
    }
  }
}
</style>
