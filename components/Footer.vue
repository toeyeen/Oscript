<template>
  <div class="w-full pb-12 footer bg-bg-footer">
    <div class="grid grid-cols-1 gap-4 px-4 mx-auto">
      <button
        class="flex flex-col items-center justify-center w-full pt-3 pb-2 border-b border-white"
        @click="backToTop"
      >
        <!-- <BaseIcon name="user" class="text-white" /> -->
        <svg-icon
          name="arrow"
          class="w-6 h-6 rotate-180 fill-current"
          style="transform: rotate(180deg)"
        ></svg-icon>
        <p class="text-xs text-white capitalize">back to top</p>
      </button>
      <div class="w-full">
        <img
          src="/images/logo.svg"
          alt=""
          srcset=""
          class="w-auto mx-auto mb-4 h-9"
        />
        <div class="w-full footer__links" v-for="page in pages" :key="page.id">
          <nuxt-link
            :to="{ name: page.link }"
            class="flex items-center justify-between py-2 text-white capitalize border-b border-white"
          >
            <span class="text-xs text-white">{{ page.name }}</span
            ><i class="fas fa-angle-right"></i>
          </nuxt-link>
        </div>
      </div>
      <div class="w-full text-white">
        <p class="mb-3 text-xs text-center">Our Apps</p>
        <div class="flex justify-center w-full mx-auto">
          <a
            href="https://itunes.apple.com/ng/app/betfarm-sportsbook/id1446432485?mt=8"
            target="_blank"
            ><img src="/img/apple-store.17541cb2.svg" alt="" srcset="" /></a
          ><a
            href="http://android.betcoapps.com/sportsbook/sportsbook-betfarm.apk"
            target="_blank"
            class="ml-4"
            ><img src="/img/play-store.27bdcdc0.svg" alt="" srcset=""
          /></a>
        </div>
      </div>
      <!-- <div class="mt-2 text-xs text-center">
        {{ getBrandName }} is Licensed and Regulated in Nigeria by Lorem ipsum
        dolor sit. All data and content on this website is the property of
        {{ getBrandName }} and its partners and may not be used without
        permission
      </div> -->
      <div class="mt-2 text-xs text-center">
        All data and content on this website is the property of and its partners
        and may not be used without permission
      </div>
      <div
        class="grid justify-around w-full grid-cols-3 py-2 border-t border-b border-white"
      >
        <p>Logo</p>
        <p>Logo</p>
        <p>Logo</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      pages: [
        { id: 1, name: 'About', link: 'About' },
        { id: 2, name: 'Terms of Use', link: 'terms-of-use' },
        { id: 3, name: 'FAQs', link: 'Faqs' },
        { id: 4, name: 'Contact Us', link: 'Contact' },
      ],
      images: [
        {
          id: 1,
          url: '',
        },
      ],
    }
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0)
    },
  },
  computed: {
    // ...mapGetters(['getBrandName']),
  },
}
</script>

<style lang="scss" scoped>
.text-light-dark {
  color: #a7b8c9;
}

.footer {
  background: $primary-color-dark;
  color: $white-color;
}
/* .my-container {
  width: 648px;
  margin: 0 auto;
} */
</style>
