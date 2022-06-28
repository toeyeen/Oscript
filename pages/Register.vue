<template>
  <div class="register">
    <div class="main">
      <div class="main-container">
        <div class="main-container__header">
          <h1 class="mb-6 text-2xl uppercase">Sign Up</h1>
        </div>

        <!-- <a-radio-group name="radioGroup" default-value="patient">
          <a-radio value="patient"> Patient </a-radio>
          <a-radio value="doctor"> Doctor </a-radio>
        </a-radio-group> -->
        <!-- FIXME: Make the tab ful width -->
        <a-tabs default-active-key="1" size="large">
          <a-tab-pane key="1" tab="Doctor">
            <form class="main-container__form">
              <BaseInput label="Email" v-model="email" />
              <BaseInput label="Mobile" type="number" v-model="email" />
              <BaseInputPassword
                label="Password"
                class="password"
                type="password"
                v-model="password"
              />
              <BaseInput
                label="Practice Number"
                type="number"
                v-model="email"
              />
            </form>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Patient" force-render>
            <form class="main-container__form">
              <BaseInput label="Email" v-model="email" />
              <BaseInput label="Mobile" type="number" v-model="email" />
              <BaseInputPassword
                label="Password"
                class="password"
                type="password"
                v-model="password"
              />
            </form>
          </a-tab-pane>
        </a-tabs>

        <div class="mt-3 mb-10">
          <input type="checkbox" class="inline" />
          <span class="text-base"
            >I agree to the
            <nuxt-link :to="{ path: '/login' }" class="underline cursor-pointer"
              >Terms of service</nuxt-link
            >
            and
            <nuxt-link
              :to="{ path: '/login' }"
              class="underline cursor-pointer"
            >
              privacy policy
            </nuxt-link>
          </span>
        </div>
        <base-button>Register</base-button>

        <div class="main-container__text">
          <div class="text-base">
            Have an account?
            <nuxt-link
              :to="{ path: '/login' }"
              class="underline cursor-pointer"
            >
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <p class="opacity-0">Terms and Condition</p>
    </div>

    <!-- <h1>Login Page</h1> -->
  </div>
</template>

<script>
import BaseSelect from '../components/BaseSelect.vue'
export default {
  layout: 'plain',
  data() {
    return {
      email: '',
      password: '',
      medicalAidName: '',
      aidNames: [
        {
          id: 0,
          value: '',
          name: 'Select an option',
        },
        {
          id: 1,
          value: 'jolaoso',
          name: 'Jolaoso',
        },
        {
          id: 2,
          value: 'toyin',
          name: 'Toyin',
        },
        {
          id: 3,
          value: 'damilare',
          name: 'Damilare',
        },
        {
          id: 5,
          value: 'joseph',
          name: 'Joseph',
        },
      ],
    }
  },
  components: { BaseSelect },
}
</script>

<style lang="scss" scoped>
.register {
  height: 100%;
}

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
</style>
