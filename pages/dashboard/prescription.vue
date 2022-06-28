<template>
  <div>
    <PageHeader title="New Prescription" />
    <!-- Doctors -->

    <div class="max-w-sm mx-4 my-8 md:mx-auto doctors">
      <a-date-picker size="large" @change="onChange" class="w-full mb-4" />
      <BaseSelect :options="sampleOptions" label="Patient" />
      <BaseSelect :options="sampleOptions" label="Medical Aid" />
      <BaseTextArea label="diagnosis" class="mt-4" />
      <BaseButton class="my-8"> Save </BaseButton>
    </div>
  </div>
</template>

<script>
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

import BaseInput from '../../components/BaseInput.vue'
import BaseSearch from '../../components/BaseSearch.vue'
import BaseSelect from '../../components/BaseSelect.vue'
import { sampleOptions } from '../../data/sample'
export default {
  components: { BaseInput, BaseSearch, BaseSelect },

  data() {
    return {
      data,
      columns,
      sampleOptions,
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
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
