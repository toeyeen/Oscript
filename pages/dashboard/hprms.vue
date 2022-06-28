<template>
  <div>
    <PageHeader title="HPRMS" />

    <div class="max-w-sm mx-4 mt-8 md:mx-auto">
      <BaseSelect label="Hospital" :options="sampleOptions" />

      <base-button class="my-8"> Save </base-button>
    </div>
  </div>
</template>

<script>
import { sampleOptions } from '../../data/sample'
export default {
  data() {
    return {
      sampleOptions,
      hospitals: [
        {
          id: 0,
          value: '',
          name: 'Select an option',
        },
        {
          id: 1,
          value: 'click',
          name: 'Click',
        },
        {
          id: 2,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 3,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 4,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 5,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 6,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 7,
          value: 'medplus',
          name: 'MedPlus',
        },
        {
          id: 8,
          value: 'medplus',
          name: 'MedPlus',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
