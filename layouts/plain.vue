<template>
  <main class="">
    <nuxt-link to="/">
      <div class="mb-4 header">
        <div class="header-icon">
          <svg-icon
            name="clouds"
            class="inline-block w-20 h-20 text-gray-600 fill-current"
          ></svg-icon>
        </div>
        <p><span>OS</span>cripts</p>
      </div>
    </nuxt-link>

    <Nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  max-width: 375px;
  margin: 1rem auto;

  @include respond(phone) {
    max-width: 650px;
    margin: 1rem auto;
  }
}

.header {
  &-icon {
    display: flex;
    justify-content: center;
  }

  & > p {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0 auto;
    & > span {
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
