<template>
  <div>
    <PageHeader title="Faqs" />
  </div>

  <!-- <div class="my-card" v-if="user">
    <div class="my-card__section-1"></div>
    <div class="my-card__section-2">
      <img :src="user.picture.medium" alt="" />
    </div>
    <div class="my-card__section-3" v-if="user">
      <button @click="getUser">Change Me</button>
      <p>{{ showThis.heading }}</p>
      <h1>{{ showThis.subHeading }}</h1>
      <div>
        <svg-icon
          @mouseover="changeSubTitle('name')"
          name="users"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
        <svg-icon
          @mouseover="changeSubTitle('email')"
          name="message"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
        <svg-icon
          @mouseover="changeSubTitle('dob')"
          name="passkey"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
        <svg-icon
          @mouseover="changeSubTitle('address')"
          name="trash"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
        <svg-icon
          @mouseover="changeSubTitle('phone')"
          name="megaphone"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
        <svg-icon
          @mouseover="changeSubTitle('password')"
          name="info"
          class="w-10 h-10 cursor-pointer"
        ></svg-icon>
      </div>
    </div>
  </div> -->
</template>

<script>
import dayjs from 'dayjs'
import PageHeader from '../components/PageHeader.vue'
export default {
  data() {
    return {
      user: null,
      subHeading: 'name',
      dayjs,
    }
  },
  methods: {
    async getUser() {
      const data = await this.$axios.$get(`https://randomuser.me/api`)
      this.user = data.results[0]
    },
    changeSubTitle(name) {
      console.log(name)
      this.subHeading = name
    },
    shoeMe() {},
  },
  computed: {
    capSubHeading() {
      return this.subHeading.charAt(0).toUpperCase() + this.subHeading.slice(1)
    },
    showThis() {
      const params = [
        {
          id: 1,
          name: 'name',
          render: {
            heading: `Hi, My ${this.capSubHeading} is`,
            subHeading: `${this.user?.name.first} ${this.user?.name.last}`,
          },
        },
        {
          id: 2,
          name: 'email',
          render: {
            heading: `My ${this.capSubHeading} is`,
            subHeading: `${this.user?.email}`,
          },
        },
        {
          id: 3,
          name: 'dob',
          render: {
            heading: `My ${this.capSubHeading} is`,
            subHeading: `${this.user?.email}`,
          },
        },
        {
          id: 4,
          name: 'address',
          render: {
            heading: `My ${this.capSubHeading} is`,
            subHeading: `${this.user?.location.street.number} ${this.user?.location.street.name}`,
          },
        },
        {
          id: 5,
          name: 'phone',
          render: {
            heading: `My ${this.capSubHeading} is`,
            subHeading: `${this.user?.phone}`,
          },
        },
        {
          id: 6,
          name: 'password',
          render: {
            heading: `My ${this.capSubHeading} is`,
            subHeading: `${this.user?.login.password}`,
          },
        },
        'email',
        'dob',
        'address',
        'phone',
        'password',
      ]
      const targetParam = params.filter((param) => {
        if (this.subHeading == param.name) return param
      })
      return {
        heading: targetParam[0].render.heading,
        subHeading: targetParam[0].render.subHeading,
      }
    },
  },
  created() {
    this.getUser()
    this.shoeMe()
  },
  components: { PageHeader },
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 500px;
  min-height: 300px;
  margin: 2rem auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &__section {
    &-1 {
      background: red;
      height: 100px;
    }

    &-2 {
      width: 100px;
      height: 100px;
      border-radius: 99px;
      background: green;
      margin: 0 auto;
      margin-top: -1.6rem;

      & > img {
        width: 100%;
        height: 100%;
        border-radius: 99px;
      }
    }

    &-3 {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      height: calc(100% - 200px);
      & > div {
        margin-top: 1.4rem;
        margin-bottom: 1rem;
        display: flex;
        gap: 1rem;
      }
      & > p {
        font-size: 1rem;
      }
      & > h1 {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
}

button {
  padding: 0.5rem 2rem;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: $primary-color;
  color: $white-color;
  border-radius: 6px;
  outline: none;
}
</style>
