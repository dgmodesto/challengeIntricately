// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import VueChartJs from "vue-chartjs";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../static/css/csscustom.css";

Vue.use(BootstrapVue);

Vue.component("line-chart", {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart(
      {
        labels: ["0", "2", "4", "6", "8", "10", "12"],
        datasets: [
          {
            label: "2019/08/24",
            backgroundColor: "#20c795",
            data: [30, 32, 35, 42, 49, 53, 60, 65, 69, 71, 78, 82, 88, 90]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
