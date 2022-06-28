<template>
  <div>
    <base-sheet title="signature Pad" @close="destroySheet">
      <div class="signature-container">
        <VueSignaturePad
          id="signature"
          width="100%"
          ref="signaturePad"
          height="300px"
        />
      </div>
      <div class="flex gap-2 mx-auto mt-2 buttons">
        <button
          v-for="button in buttons"
          :key="button.id"
          class="px-2 py-1 text-white bg-red-400 rounded-sm"
          :class="`bg-${button.color}-400`"
          @click="button.functionName"
        >
          {{ button.name }}
        </button>

        <!-- <button @click="resume">Resume Color</button> -->
      </div>
    </base-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      showSheet: true,
      savedSignature: null,
      buttons: [
        {
          id: 1,
          name: 'Undo',
          functionName: this.undo,
          color: 'blue',
        },
        {
          id: 2,
          name: 'Clear',
          functionName: this.clear,
          color: 'red',
        },
        {
          id: 3,
          name: 'Save',
          functionName: this.save,
          color: 'yellow',
        },
      ],
    }
  },

  computed: {},

  methods: {
    ...mapActions(['saveSignature']),
    destroySheet() {
      this.$emit('destroy')
    },
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()

      if (!isEmpty) {
        this.saveSignature(data)
        this.savedSignature = data
        this.$emit('update', true)
        alert('Signature saved successfully')
        this.clear()
      } else {
        alert('Please ensure you sign before saving')
      }
    },
    change() {
      this.options = {
        penColor: '#00f',
      }
    },
    resume() {
      this.options = {
        penColor: '#c0f',
      }
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
  },
}
</script>

<style lang="scss" scoped>
.signature {
  &-container {
    margin: 0 auto;
  }
}

#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #3883ab, #f85f6a);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
