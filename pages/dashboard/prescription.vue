<template>
  <div>
    <page-header title="New Prescription"></page-header>
    <!-- Doctors -->

    <div class="max-w-sm mx-4 my-8 md:mx-auto doctors">
      <BaseInput label="Patient" />
      <BaseInput label="Mobile Number" />

      <p class="mt-4 mb-2 text-base">Drugs</p>

      <ul class="flex gap-3">
        <li class="text-bold">Ferrimed</li>
        <li class="text-bold">Amloc</li>
      </ul>

      <p class="mt-6 text-xl text-center">New Drug</p>

      <BaseInput label="Drug" />
      <div class="flex items-center justify-between">
        <BaseInput label="Strength" />
        <BaseSelect class="w-40" :options="amountData" label="Strength" />
      </div>
      <div class="flex items-center justify-between">
        <BaseInput label="Amount" />
        <BaseSelect class="w-40" :options="amountData" label="Amount" />
      </div>
      <BaseSelect :options="routesData" label="Route" />
      <BaseSelect :options="frequencyData" label="Frequency" />
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center gap-3">
          <label class="text-base" for=""> PRN </label>
          <a-switch size="large" default-checked @change="onSwitchChange" />
        </div>

        <div class="flex items-center gap-3">
          <label class="text-base" for="Description"> Description </label>
          <a-input class="w-36"></a-input>
        </div>
      </div>

      <div class="flex items-center justify-between my-4">
        <div class="flex items-center gap-3">
          <label class="text-base" for=""> Dispense </label>
          <a-switch size="large" default-checked @change="onSwitchChange" />
        </div>

        <div class="flex items-center gap-3">
          <label class="text-base" for="Description"> Disp # </label>
          <a-input-number
            size="large"
            class="w-36"
            :min="1"
            :max="100000"
            :default-value="30"
            @change="onNumberChange"
          />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <label class="text-base" for=""> Refill </label>
          <a-switch size="large" default-checked @change="onSwitchChange" />
        </div>

        <div class="flex items-center gap-3">
          <label class="text-base" for="Description"> Months </label>
          <a-input-number
            size="large"
            class="w-36"
            :min="1"
            :max="12"
            :default-value="6"
            @change="onNumberChange"
          />
        </div>
      </div>

      <BaseButton class="my-8"> Save </BaseButton>

      <!-- <a-date-picker size="large" @change="onChange" class="w-full mb-4" />
      <BaseSelect :options="sampleOptions" label="Patient" />
      <BaseButton class="my-8"> Save </BaseButton> -->
    </div>
  </div>
</template>

<script>
import { sampleOptions } from '../../data/sample.js'
import BaseInput from '../../components/BaseInput.vue'
import BaseSearch from '../../components/BaseSearch.vue'
import BaseSelect from '../../components/BaseSelect.vue'
import PageHeader from '~/components/PageHeader.vue'

const columns = [
  {
    title: 'Patient/ Dependant Name',
    dataIndex: 'patient',
    key: 'patient',
  },
  {
    title: 'Prescription Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    patient: 'John Brown',
    date: 32,
    action: 'View/ Print',
  },
  {
    key: '2',
    patient: 'Jim Green',
    date: 42,
    action: 'View/ Print',
  },
  {
    key: '3',
    patient: 'Joe Black',
    date: 32,
    action: 'View/ Print',
  },
]

const amountData = [
  {
    id: 1,
    name: 'Unit',
    value: 'unit',
  },
  {
    id: 2,
    name: 'Unit',
    value: 'unit',
  },
  {
    id: 3,
    name: 'Unit',
    value: 'unit',
  },
]
const routesData = [
  {
    id: 1,
    name: 'Common Routes',
    value: 'common-routes',
  },
  {
    id: 2,
    name: 'Unit',
    value: 'unit',
  },
  {
    id: 3,
    name: 'Unit',
    value: 'unit',
  },
]
const frequencyData = [
  {
    id: 1,
    name: 'Common Frequency',
    value: 'common-frequency',
  },
  {
    id: 2,
    name: 'Unit',
    value: 'unit',
  },
  {
    id: 3,
    name: 'Unit',
    value: 'unit',
  },
]

export default {
  components: { BaseInput, BaseSearch, BaseSelect, PageHeader },

  data() {
    return {
      checked: true,
      data,
      columns,
      sampleOptions,
      amountData,
      routesData,
      frequencyData,
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    onSwitchChange(checked) {
      console.log(`a-switch to ${checked}`)
    },
    onNumberChange(value) {
      console.log('changed', value)
    },
  },
}
</script>

<style lang="scss">
// .s-table {
//   .ant-table-bordered .ant-table-header > table,
//   .ant-table-bordered .ant-table-body > table,
//   .ant-table-bordered .ant-table-fixed-left table,
//   .ant-table-bordered .ant-table-fixed-right table {
//     border: 1px solid #ccc;
//   }

//   .ant-table-tbody > tr > td {
//     border-bottom: 1px solid #ccc;
//   }

//   .ant-table-bordered .ant-table-thead > tr > th,
//   .ant-table-bordered .ant-table-tbody > tr > td {
//     border-right: 1px solid #ccc;
//   }
// }

@media (max-width: 480px) {
  .ant-calendar-range {
    width: 320px;
  }
  .ant-calendar-range-part {
    width: 100%;
  }
}
</style>
