<template>
  <div class="nav">
    <div class="flex justify-between px-4 py-2 nav__gradient h-13">
      <!-- <HamBurger /> -->
      <button
        class="flex items-center focus:outline-none"
        @click="toggleSideMenu"
      >
        <svg-icon
          :name="getSideMenuIsOpen ? 'close' : 'menu'"
          class="inline w-6 h-6 text-white fill-current"
        ></svg-icon>
      </button>
      <nuxt-link
        :to="{ name: 'index' }"
        class="flex items-center justify-center ml-4"
        v-if="loggedIn"
      >
        <p class="text-white text-big">
          <span class="font-bold">OS</span>cript
        </p>
      </nuxt-link>

      <nuxt-link :to="{ name: 'index' }" v-if="!loggedIn" class="">
        <p class="text-white text-big">
          <span class="font-bold">OS</span>cript
        </p>
      </nuxt-link>
      <nuxt-link :to="{ name: 'Faqs' }" class="text-xl" v-if="!loggedIn">
        <i class="text-2xl fas fa-gift"></i>
      </nuxt-link>
      <!-- When user is logged in -->
      <div
        id="auth_info"
        class="flex items-center ml-auto text-right"
        v-if="loggedIn"
      >
        <div>
          <p class="flex items-center justify-end text-sm font-semibold">
            <span class="w-20 truncate">toeyeen</span
            ><!---->
          </p>
          <p
            class="text-sm font-bold text-text-default"
            v-if="!showBalanceValue"
          >
            ₦ 0
          </p>
          <p class="text-sm font-bold text-text-default" v-else>******</p>
        </div>
        <button
          class="relative flex items-center w-10 h-10 ml-3 bg-black rounded-full focus:outline-none"
          @click="displayProfile"
        >
          <svg-icon
            name="user"
            class="absolute items-center justify-between inline w-6 h-6 text-white fill-current left-1/3"
          ></svg-icon>
        </button>
      </div>
    </div>
    <!-- <div id="auth_links" v-if="!loggedIn && routePath">
      <div class="flex items-c`enter justify-between px-16 py-2 md:container">
        <router-link
          v-for="auth in authLinks"
          :key="auth.id"
          :to="{ name: auth.to }"
          :class="auth.class"
        >
          {{ auth.value }}
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import HamBurger from './HamBurger.vue'
export default {
  data() {
    return {
      authLinks: [
        {
          id: 1,
          to: 'Register',
          value: 'Join Now',
          class:
            'text-center h-7-1/2 text-white leading-7 uppercase font-bold text-2xs bg-blue w-full max-w-xs mr-3 rounded-sm focus:outline-none',
        },
        {
          id: 2,
          to: 'Login',
          value: 'Login',
          class:
            'text-center h-7-1/2 text-blue leading-7 uppercase font-bold text-2xs border border-blue w-full ml-3 max-w-xs rounded-sm focus:outline-none',
        },
      ],
      showSlider: false,
      loggedIn: false,
      getBrandName: 'OScript',
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'showProfile']),
    showSideDrawer() {
      this.toggleDrawer()
    },
    displayProfile() {
      this.showProfile()
    },
  },
  computed: {
    ...mapState(['drawerIsOpen', 'openProfile', 'showBalanceValue']),
    // ...mapGetters(['loggedIn']),
    ...mapGetters(['getSideMenuIsOpen']),

    routePath() {
      return this.$route.path === '/'
    },
  },
  components: { HamBurger },
}
</script>

<style lang="scss" scoped>
.nav {
  &__gradient {
    // background: rgb(248,95,106);
    background: linear-gradient(
      95deg,
      rgba(248, 95, 106, 1) 0%,
      rgba(253, 118, 127, 1) 35%,
      rgba(255, 140, 149, 1) 100%
    );
  }
}
// .primary__gradient {
//   background: linear-gradient(
//     95.01deg,
//     $primary-color 9.49%,
//     $primary-color 100.84%
//   );
// }
.bg-blue {
  background: var(--blue);
}

.text-blue {
  color: var(--blue);
}
.border-blue {
  border-color: var(--blue);
}

.fa-bars {
  font-size: 1.5rem;
}

.text-big {
  font-size: 1.5rem;
}
</style>
