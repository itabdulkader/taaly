<template>
  <!--begin::Mixed Widget 4-->
  <div :class="widgetClasses" class="card py-5"  style="background-color: #E9E6F8" >
    <!--begin::Header-->
    <div class="card-header border-0 ">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-6  mb-1" style="color: #1E00B9">{{ title }}</span>
        <span class="text-muted  fs-7">{{ desc }}.</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="c d-flex flex-column">
      <div class="flex-grow-1">
        <!--begin::Chart-->
        <apexchart
          ref="chartRef"
          class="mixed-widget-4-chart"
          :options="chart"
          :series="series"
          :height="chartHeight"
          type="radialBar"
        ></apexchart>
        <!--end::Chart-->
      </div>

    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 4-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import ApexCharts from "apexcharts";

export default defineComponent({
  name: "monitoring-overall-activity-card",
  props: {
    theOverallActivityValue: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "Widget Title",
    },
    desc: {
      type: String,
      default: "Description",
    },
    widgetClasses: {
      type: String,
      default: "",
    },
    chartColor: {
      type: String,
      default: "primary",
    },
    chartHeight: {
      type: Number,
      default: 200,
    },
    btnColor: {
      type: String,
      default: "primary",
    },
    btnText: {
      type: String,
      default: "Button Text",
    },
  },
  setup(props) {
    const chart = ref({
      chart: {
        height: props.chartHeight,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              offsetY: -5,
              color: "#212121",
            },
            value: {
              color: "#212121",
              fontSize: "30px",
              show: true,
              offsetY: 5,
            },
          },
          track: {
            background: `#f3f3f3`,
            strokeWidth: "100%",
          },
        },
      },
      // colors: [getColor(props.chartColor)],
      stroke: {
        lineCap: "round",
      },
      labels: [""],
    });

    const series = ref([props.theOverallActivityValue]);

    const chartRef = ref<ApexCharts>();

    watch(
      () => props.theOverallActivityValue,
      (newValue) => {
        series.value = [newValue];
        chartRef.value?.updateSeries(series.value);
      }
    );

    onMounted(() => {
      chartRef.value = new ApexCharts(chartRef.value, { // Make sure `element` is valid
        ...chart.value,
        series: series.value,
      });
      chartRef.value?.render();
    });

    return {
      chart,
      series,
      chartRef,
    };
  },
});
</script>
