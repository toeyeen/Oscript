<script>
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
    styles: {
      type: String,
    },
    plugins: {
      type: Array,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
  },

  data() {
    return {}
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
