<template>
  <!--begin::Mixed Widget 4-->
  <div :class="widgetClasses" class="card" style="background-color: #E9E6F8">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">{{ title }}</span>
        <span class="text-muted fw-semibold fs-7">{{ desc }}.</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column justify-content-between" style="position: relative; padding: 1rem;">
      <div class="flex-grow-1">
        <!-- Any additional content can go here -->
      </div>

      <!-- Buttons Container -->
      <div class="d-flex justify-content-between" >

        <!-- Button in Bottom Left -->
        <div class="d-flex">
          <a href="#" class="btn btn-bg-light btn-color-primary fw-bold  " style="background-color: blue; color: white;">{{ theLearnersValue }}</a>
        </div>

        <!-- Button in Bottom Right -->
        <div class="d-flex">
          <a href="#" class="btn btn-bg-light btn-color-secondary fw-bold  " style="background-color: gray; color: white;">{{ theLanguageBuddiesValue }}</a>
        </div>

      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 4-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "monitoring-attendance-card",
  props: {
    theLearnersValue: {
      type: Number ,
      default: 0,
    },
    theLanguageBuddiesValue: {
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
    btnColor: {
      type: String,
      default: "primary",
    },
    btnText: {
      type: String,
      default: "Button Text",
    },
  },
});
</script>
