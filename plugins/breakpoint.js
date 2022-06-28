const DEFAULT_BREAKPOINT = {
  'sm-phone': 425,
  phone: 620,
  'tab-port': 768,
  'tab-land': 1024,
  desktop: 1280,
  'big-desktop': 1536,
}

const mediaQueryMixin = {
  install(Vue, { breakpoints = DEFAULT_BREAKPOINT } = {}) {
    Vue.mixin({
      data: function () {
        return {
          screens: {
            'sm-phone': false,
            phone: false,
            'tab-port': false,
            'tab-land': false,
            desktop: false,
            'big-desktop': false,
          },
          $windowWidth: 0,
          $windowHeight: 0,
          actualWidth: 0,
        }
      },
      mounted() {
        this.$nextTick(function () {
          window.addEventListener('resize', this.getWindowSize)
          this.getWindowSize()
        })
      },
      methods: {
        getWindowSize(event) {
          let w = document.documentElement.clientWidth
          this.$windowWidth = w
          let h = document.documentElement.clientHeight
          this.$windowHeight = h

          this.actualWidth = document.documentElement.clientWidth

          this.screens['sm-phone'] = w < breakpoints['phone']
          this.screens['phone'] = w >= breakpoints['phone']
          this.screens['tab-port'] = w >= breakpoints['tab-port']
          this.screens['tab-land'] = w >= breakpoints['tab-land']
          this.screens['desktop'] = w >= breakpoints['desktop']
          this.screens['big-desktop'] = w >= breakpoints['big-desktop']
        },
      },

      watch: {
        actualWidth(newWidth, oldWidth) {},
      },

      // computed: {
      //   screenWidth() {
      //     return document.documentElement.clientWidth
      //   },
      // },

      beforeDestroy() {
        if (!this.$isServer) {
          window.removeEventListener('resize', this.getWindowSize)
        }
      },
    })
  },
}

export default mediaQueryMixin
