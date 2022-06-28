<template>
  <div class="dashboard">
    <h1 class="text-3xl font-bold">Dashboard</h1>
    <div class="dashboard__section-1">
      <SubHeader title="Diagnosis" class="mb-8" />
      <div class="dashboard__section-1__item">
        <div>
          <p>Measles</p>
          <a-progress
            type="circle"
            :percent="64"
            :stroke-color="{
              '0%': primaryColor,
              '100%': primaryColor,
            }"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${primaryColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div>

        <div>
          <p>Diabetes</p>

          <a-progress
            type="circle"
            :stroke-color="{
              '0%': brandColor,
              '100%': brandColor,
            }"
            :percent="40"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${brandColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div>

        <div>
          <p>Flu</p>

          <a-progress
            type="circle"
            :percent="90"
            :stroke-color="{
              '0%': secondaryColor,
              '100%': secondaryColor,
            }"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${secondaryColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div>
      </div>
    </div>
    <div class="dashboard__section-2">
      <SubHeader title="Number of Prescription" class="mb-8" />
      <div class="dashboard__section-2__item">
        <StackedBarChart
          :options="chartOptions"
          :chart-data="chartData"
          :plugins="chartplugins"
          height="400"
        />

        <!-- <div>
          <p>Number</p>
          <a-progress
            type="circle"
            :percent="64"
            :stroke-color="{
              '0%': primaryColor,
              '100%': primaryColor,
            }"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${primaryColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div>

        <div>
          <p>Diabetes</p>

          <a-progress
            type="circle"
            :stroke-color="{
              '0%': brandColor,
              '100%': brandColor,
            }"
            :percent="40"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${brandColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div>

        <div>
          <p>Flu</p>

          <a-progress
            type="circle"
            :percent="90"
            :stroke-color="{
              '0%': secondaryColor,
              '100%': secondaryColor,
            }"
            :width="computedWidth"
            :trailColor="trailColor"
          >
            <template #format="percent">
              <span class="text-2xl" :style="`color: ${secondaryColor}`"
                >{{ percent }}%</span
              >
            </template>
          </a-progress>
        </div> -->
      </div>
    </div>
    <div class="dashboard__section-3">
      <SubHeader title="Drugs Issued" class="mb-8" />
      <div class="dashboard__section-3__item">
        <a-table :columns="columns" :data-source="data">
          <template slot="drugName" slot-scope="drugName">
            {{ drugName.first }} {{ drugName.last }}
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/SubHeader.vue'
import StackedBarChart from '../components/chart/StackedBarChart.vue'

const columns = [
  {
    title: 'Drug Name',
    dataIndex: 'drugName',
    sorter: true,
    // width: '20%',
    slots: {
      customRender: 'drugName',
    },
  },
  {
    title: 'Date Issued',
    dataIndex: 'dateIssued',
    // filters: [
    //   {
    //     text: 'Male',
    //     value: 'male',
    //   },
    //   {
    //     text: 'Female',
    //     value: 'female',
    //   },
    // ],
    // width: '20%',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.quantity - b.quantity,
  },
]

const data = [
  {
    key: '1',
    drugName: 'Ferrimed',
    dateIssued: '3 May, 2022',
    quantity: '50',
  },
  {
    key: '2',
    drugName: 'Amloc',
    dateIssued: '6 April, 2022',
    quantity: '50',
  },
  {
    key: '3',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '4',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '5',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '6',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '7',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '8',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '16',
  },
  {
    key: '9',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '10',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '11',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
  {
    key: '12',
    drugName: 'Olawin',
    dateIssued: '22 January, 2022',
    quantity: '66',
  },
]

const queryData = (params) => {
  return `https://randomuser.me/api?noinfo&${new URLSearchParams(params)}`
}

export default {
  components: { SubHeader, StackedBarChart },
  data() {
    return {
      // width: 200,
      trailColor: '#d9d9d9',
      brandColor: '#f85f6a',
      primaryColor: '#7FE2AD',
      secondaryColor: '#5F6AF7',
      stylePrimary: `color: ${this.primaryColor} `,
      columns,
      data,
      pagination: {},
      chartData: {
        labels: [
          '01-05-2022',
          '02-05-2022',
          '03-05-2022',
          '04-05-2022',
          '05-05-2022',
          '06-05-2022',
          '07-05-2022',
          '08-05-2022',
          '09-05-2022',
          '10-05-2022',
          '11-05-2022',
          '12-05-2022',
          '13-05-2022',
          '14-05-2022',
          '15-05-2022',
          '16-05-2022',
        ],
        datasets: [
          {
            label: 'Number of Moons',
            data: [12, 20, 21, 12, 19, 8, 7, 14, 12, 19, 8, 7, 14, 20, 21, 12],
            backgroundColor: '#c3c6c9',
          },
          {
            label: 'Planetary Mass (relative to the Sun x 10^-6)',
            data: [
              16, 20, 20, 12, 27, 28, 13, 15, 20, 20, 12, 27, 28, 16, 20, 20,
            ],
            backgroundColor: '#8b8e90',
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                // padding: 25,
                // stepSize: 20,
              },
              gridLines: {
                display: false,
              },
              // stepSize: 20,
            },
          ],
          xAxes: [
            {
              stacked: true,
              barPercentage: 0.3,
              gridLines: {
                display: false,
              },
              ticks: {
                display: false, //this removed the labels on the x-axis
              },
            },
          ],
        },
      },
      chartplugins: [
        {
          id: 'custom_canvas_background_color',
          beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d')
            ctx.save()
            ctx.globalCompositeOperation = 'destination-over'
            ctx.fillStyle = '#fff'
            ctx.fillRect(0, 0, chart.width, chart.height)
            ctx.restore()
          },
        },
      ],
    }
  },

  methods: {
    changeProgressWidth() {
      this.newactualWidth = document.documentElement.clientWidth
    },
  },
  // watch: {
  //   newactualWidth(newWidth, oldWidth) {
  //     if (newWidth <= 620) this.width = 140
  //     if (newWidth <= 425) this.width = 120
  //     if (newWidth <= 375) this.width = 100
  //     // this.width = 200
  //   },
  // },

  computed: {
    computedWidth() {
      if (this.$data.actualWidth <= 375) return 100
      if (this.$data.actualWidth <= 425) return 120
      if (this.$data.actualWidth <= 620) return 140
      return 200
    },

    brandName() {
      return 'Oscript'
    },
  },

  mounted() {
    this.changeProgressWidth()
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 0 1rem;
  &__section-1 {
    &__item {
      display: flex;
      justify-content: space-evenly;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > p {
          margin-bottom: 2rem;
        }
      }
    }

    &:not(div:first-of-type) {
      margin-top: 4rem;
    }
  }

  &__section-2 {
    // width: 100%;
    // &__item {
    //   & > canvas {
    //     width: 100%;
    //   }
    // }
  }
}
</style>
