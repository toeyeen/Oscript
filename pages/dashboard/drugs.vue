<template>
  <div>
    <PageHeader title="Add Drugs" />

    <div class="max-w-sm mx-4 my-8 md:mx-auto doctors">
      <BaseSelect :options="sampleOptions" label="Drug Name" />
      <BaseSelect :options="sampleOptions" label="Strength" />
      <BaseSelect :options="sampleOptions" label="Amount" />
      <BaseSelect :options="sampleOptions" label="Route" />
      <BaseSelect :options="sampleOptions" label="Frequency" />
      <BaseSelect :options="sampleOptions" label="PRN" />
      <BaseSelect :options="sampleOptions" label="Disp #" />
      <BaseSelect :options="sampleOptions" label="Refill" />

      <BaseButton class="my-8"> Save </BaseButton>
    </div>
  </div>
</template>

<script>
import { sampleOptions } from '../../data/sample'
export default {
  data() {
    return {
      sampleOptions,
    }
  },
}
</script>

<style lang="scss" scoped></style>
