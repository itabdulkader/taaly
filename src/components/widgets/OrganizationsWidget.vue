<template>
  <!--begin::OrganizationsWidget -->
  <div
    :class="widgetClasses"
    :style="{
      backgroundImage: `url(${getAssetPath(
        '/media/svg/shapes/' + background
      )})`,
    }"
    class="card bgi-no-repeat"
    style="background-position: right top; background-size: 30% auto"
  >
    <!--begin::Body-->
    <div class="card-body ">
      <a
        href="#"
        class="card-title fw-bold   text-hover-primary fs-4"
        >{{ title }}</a
      >

      <div class="fw-light text-gray-900-75 my-2">{{ time }}</div>

      <p class="text-gray-900-75 fw-semibold fs-8 m-0">
        <span v-html="description"></span>
      </p>

      <div class="d-flex justify-content-end mt-2">
      <button
        class="btn btn-secondary btn-sm  "
        data-bs-toggle="tooltip"
        title="Coming soon"
      >
        Details
      </button>
      </div>

    </div>
    <!--end::Body-->
  </div>
  <!--end::  Widget -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "organizations-widget",
  props: {
    widgetClasses: String,
    background: String,
    title: String,
    time: String,
    description: String,
  },

  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
