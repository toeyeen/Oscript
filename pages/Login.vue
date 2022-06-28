<template>
  <div>
    <div class="main">
      <div class="main-container">
        <div class="main-container__header">
          <h1 class="mb-6 text-2xl uppercase">Login</h1>
        </div>

        <form class="main-container__form">
          <BaseInput label="Email" v-model="email" />
          <BaseInputPassword
            label="Password"
            class="password"
            type="password"
            v-model="password"
          />
          <base-button>Login</base-button>
        </form>

        <div class="main-container__text">
          <div class="text-base">
            Don't have an account?
            <nuxt-link
              :to="{ path: '/register' }"
              class="underline cursor-pointer"
            >
              Register
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <p class="mt-4 text-base text-center">
      <nuxt-link :to="{ path: '/register' }" class="underline cursor-pointer">
        Forgot Password?
      </nuxt-link>
    </p>

    <!-- <h1>Login Page</h1> -->
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'

/**
 * TODO:
 * FIXME:
 * REVIEW:
 * OPTIMIZE:
 *
 */
export default {
  layout: 'plain',
  components: { BaseInput, BaseButton },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: $white-color;
  padding: 2rem 1.6rem;

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

.password {
  margin-bottom: 2.4rem;
}
</style>
