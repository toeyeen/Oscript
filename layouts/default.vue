<template>
  <main>
    <Navbar />
    <Nuxt class="content" />
    <SideMenu />
    <SideMenuBlock />
    <Footer />
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapGetters } from 'vuex'

import SideMenu from '../components/SideMenu.vue'
export default {
  head() {
    return {
      bodyAttrs: {
        class: `${this.getSideMenuIsOpen ? 'overflow-hidden' : ''}`,
      },
    }
  },
  components: { Navbar, SideMenu },
  computed: {
    ...mapGetters(['getSideMenuIsOpen']),
  },
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  max-width: $max-width;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.sidebar-is-open {
  overflow-y: hidden;
  // position: fixed;
}

.content {
  background: #fff;
  flex: 1 0 auto;
  // padding: 1rem;
  // margin: 1rem 1.6rem;

  @include respond(phone) {
    // margin: 2rem 3.2rem;
  }
}
</style>
