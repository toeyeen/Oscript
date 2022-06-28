import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object | Array,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    data() {
      return {
        options: {
          responsive: true,
          lineTension: 1,
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                padding: 25,
              },
            },
          ],
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
      }
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}

// type: 'bar',
// data: {
//   labels: [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars',
//     'Jupiter',
//     'Saturn',
//     'Uranus',
//     'Neptune',
//   ],
//   datasets: [
//     {
//       label: 'Number of Moons',
//       data: [12, 20, 21, 12, 19, 8, 7, 14],
//       backgroundColor: 'rgba(54,73,93,.5)',
//       borderColor: '#36495d',
//       borderWidth: 3,
//     },
//     {
//       label: 'Planetary Mass (relative to the Sun x 10^-6)',
//       data: [16, 20, 30, 32, 47, 28, 43, 15],
//       backgroundColor: 'rgba(71, 183,132,.5)',
//       borderColor: '#47b784',
//       borderWidth: 3,
//     },
//   ],
// },

// data: {
//   labels: [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars',
//     'Jupiter',
//     'Saturn',
//     'Uranus',
//     'Neptune',
//   ],
//   datasets: [
//     {
//       label: 'Number of Moons',
//       data: [0, 0, 1, 2, 79, 82, 27, 14],
//       backgroundColor: 'rgba(54,73,93,.5)',
//       borderColor: '#36495d',
//       borderWidth: 3,
//     },
//     {
//       label: 'Planetary Mass (relative to the Sun x 10^-6)',
//       data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
//       backgroundColor: 'rgba(71, 183,132,.5)',
//       borderColor: '#47b784',
//       borderWidth: 3,
//     },
//   ],
// },
