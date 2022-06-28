<template>
  <div class="sidemenu">
    <div class="sidemenu-mask" :class="{ active: getSideMenuIsOpen }"></div>
    <div class="sidemenu-container" :class="{ active: getSideMenuIsOpen }">
      <div class="sidemenu-content">
        <div class="sidemenu-content__profile">
          <img
            src="https://randomuser.me/api/portraits/med/men/44.jpg"
            alt=""
          />
          <h1>John Doe</h1>
          <p>johana@company.com</p>
        </div>

        <div class="sidemenu-content__list">
          <ul>
            <li
              class="sidemenu-content__list-item"
              v-for="link in links"
              :key="link.id"
            >
              <nuxt-link
                :to="{ path: link.path }"
                @click.native="twoFunctions(link)"
              >
                <svg-icon
                  style="color: #d6d6d6"
                  name="settings"
                  class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
                ></svg-icon>

                <p :class="[link.slug == activeLink ? 'text-blue-500' : '']">
                  {{ link.name }}
                </p>

                <svg-icon
                  style="color: #d6d6d6"
                  name="chevron"
                  class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
                ></svg-icon>
              </nuxt-link>
            </li>
            <!-- <li class="sidemenu-content__list-item active">
              <svg-icon
                style="color: #f85f6a"
                name="settings"
                class="inline-block w-4 h-4 fill-current"
              ></svg-icon>

              <p>My Scripts</p>

              <svg-icon
                style="color: #f85f6a"
                name="chevron"
                class="inline-block w-4 h-4 fill-current"
              ></svg-icon>
            </li>
            <li class="sidemenu-content__list-item">
              <svg-icon
                style="color: #d6d6d6"
                name="settings"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>

              <p>Select Pharmacy</p>

              <svg-icon
                style="color: #d6d6d6"
                name="chevron"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>
            </li>
            <li class="sidemenu-content__list-item">
              <svg-icon
                style="color: #d6d6d6"
                name="settings"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>

              <p>My Doctors</p>

              <svg-icon
                style="color: #d6d6d6"
                name="chevron"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>
            </li>
            <li class="sidemenu-content__list-item">
              <svg-icon
                style="color: #d6d6d6"
                name="settings"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>

              <p>HPRMS</p>

              <svg-icon
                style="color: #d6d6d6"
                name="chevron"
                class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
              ></svg-icon>
            </li> -->
          </ul>
        </div>

        <div class="sidemenu-content__settings">
          <li class="sidemenu-content__settings-item">
            <svg-icon
              style="color: #d6d6d6"
              name="settings"
              class="inline-block text-[#d6d6d6] w-4 h-4 fill-current"
            ></svg-icon>
            <p>Settings</p>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'less'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Dashboard',
          path: '/',
          slug: 'dashboard',
        },
        {
          id: 2,
          name: 'My Doctors',
          path: '/dashboard/doctors',
          slug: 'doctors',
        },
        {
          id: 3,
          name: 'My Scripts',
          path: '/dashboard/scripts',
          slug: 'scripts',
        },
        {
          id: 4,
          name: 'Select Pharmacy',
          path: '/dashboard/pharmacy',
          slug: 'pharmacy',
        },
        {
          id: 5,
          name: 'HPRMS',
          path: '/dashboard/hprms',
          slug: 'hprms',
        },
      ],
      activeLink: 'dashboard',
    }
  },
  computed: {
    ...mapGetters(['getSideMenuIsOpen']),
  },

  methods: {
    ...mapActions(['toggleSideMenu', 'showProfile']),
    twoFunctions(link) {
      this.toggleSideMenu()
      this.activeLink = link.slug
    },
  },
  watch: {
    '$route.path': function () {
      const slug = this.$route.path.split('/')

      if (slug[slug.length - 1] !== '') {
        this.activeLink = slug[slug.length - 1]
      }
      console.log(slug[slug.length - 1])

      this.activeLink = 'dashboard'
    },
  },
}
</script>

<style lang="scss" scoped>
.sidemenu {
  width: 100%;

  &-container {
    background-color: $white-color;
    position: absolute;
    // width: 50%;
    width: 250px;
    max-width: 250px;
    height: calc(100% - 52px);
    top: 52px;
    z-index: 115;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: transform 0.5s;
    transition: transform 0.5s;

    @include respond(phone) {
      width: 300px;
      max-width: 300px;
    }

    &.active {
      transform: translateX(0%);
    }
  }

  &-mask {
    background: rgba($color: #3b5898, $alpha: 0.35);
    display: none;
    position: absolute;
    width: 100%;
    height: calc(100% - 52px);
    top: 52px;
    z-index: 112;
    transition: transform 0.5s;

    &.active {
      display: block;
    }
  }

  &-content {
    position: relative;
    height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    &__profile {
      margin-top: 4rem;
      margin-bottom: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > img {
        width: 64px;
        height: 64px;
        border-radius: 99px;
      }
      & > h1 {
        font-size: 18px;
        font-weight: 500;
        color: #35424a;
        margin-top: 0.5rem;
      }
      & > p {
        font-size: 14px;
        font-weight: 300;
        color: #bbbbc0;
      }
    }

    &__list {
      &-item {
        & > a {
          display: grid;
          grid-template-columns: 1fr 5fr 1fr;
          padding: 0.7rem 1.6rem;
          grid-gap: 0.25rem;
          gap: 0.25rem;
          font-size: 1rem;
          align-items: center;
          cursor: pointer;
          color: #38364f;
        }

        &.active {
          background: rgba($color: #f85f6a, $alpha: 0.1);
        }

        & > :not(:last-of-type(svg)) {
          justify-self: end;
        }
      }
    }

    &__settings {
      font-size: 1rem;
      position: absolute;
      bottom: 60px;
      grid-gap: 0.25rem;
      gap: 0.25rem;
      width: 100%;

      @include respond(tab-land) {
        bottom: 100px;
      }

      &-item {
        font-size: 18px;
        font-weight: 500;
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        padding: 0.7rem 1.6rem;
        align-items: center;
        cursor: pointer;
        color: #38364f;
      }
    }
  }
}
</style>
