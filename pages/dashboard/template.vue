<template>
  <div>
    <PageHeader title="Template" />

    <div class="mx-4">
      <div class="flex items-center justify-between mt-2 mb-4">
        <p class="text-xl">[Logo]</p>
        <h1 class="flex-1 text-3xl text-center">[Pratice Name]</h1>
      </div>
      <div class="personal-container">
        <div class="grid justify-center grid-cols-4 gap-2">
          <span>[Title]</span>
          <span>[FirstName]</span>
          <span>[LastName]</span>
          <span>[Qualification]</span>
        </div>

        <div class="flex flex-col items-center justify-center mb-3">
          <p>[Physical Address]</p>
          <p>[Phone Number]</p>
          <p>[Email Address]</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="mt-3">
        <div class="flex items-center justify-between mb-2">
          <p>Patient</p>
          <a-input class="w-36"> </a-input>
        </div>
        <div class="flex items-center justify-between">
          <p>Date</p>
          <p>{{ dayjs().format(dateFormat) }}</p>
          <!-- <p>{{ dayjs(Date.now(), dateFormat) }}</p> -->
        </div>
      </div>

      <div class="flex justify-between my-4">
        <svg-icon
          name="rx"
          class="inline-block w-12 h-12 text-black fill-current"
        ></svg-icon>
      </div>

      <div class="slant-container">
        <h1 class="slant-text">Drug List</h1>
      </div>

      <div class="my-4 divider"></div>

      <div class="template-signature">
        <p>Doctors Signature</p>
        <a-input
          v-if="!showSignature"
          class="template-signature__input"
          placeholder="Signature"
          @focus="showSignPadSheet = true"
        >
        </a-input>
        <img
          v-if="showSignature"
          class="signature-img"
          :src="signature"
          alt=""
        />
      </div>

      <div class="template-btn">
        <base-button>Save Template</base-button>
      </div>
    </div>

    <SignPadSheet
      v-if="showSignPadSheet"
      @destroy="showSignPadSheet = false"
      @update="update"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters } from 'vuex'
import SignPadSheet from '~/components/SignPadSheet.vue'
export default {
  components: { SignPadSheet },
  data() {
    return {
      dayjs,
      dateFormat: 'DD MMM, YYYY hh:mm',
      showSignPadSheet: false,
      showSignature: false,
    }
  },
  methods: {
    update(e) {
      this.showSignature = e
      this.showSignPadSheet = false
    },
  },
  computed: {
    ...mapGetters({ signature: 'getSignature' }),
  },
}
</script>

<style lang="scss" scoped>
.slant {
  &-container {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-text {
    color: #ccc;
    font-size: 4.5rem;
    transform: rotate(330deg);

    @include respond(phone) {
      font-size: 5.3rem;
    }

    @include respond(tab-port) {
      font-size: 6rem;
    }
  }
}

.personal {
  &-container {
    @include respond(tab-port) {
      max-width: 500px;
      margin: 0 auto;
    }
  }
}

.signature-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
}
.template-btn {
  margin-bottom: 2rem;
  margin-top: 1rem;
  @include respond(phone) {
    width: 60%;
    margin: 0rem auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
}
</style>
