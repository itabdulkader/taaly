<template>
  <!--begin::Statistics Widget 5-->
  <a href="#" :class="[widgetClasses ]" class="card hoverable p-8 d-flex justify-content-center align-items-center flex-column text-center" style="background-color: #1E00B9">
    <!--begin::Body-->
    <div class="d-flex flex-column align-items-center">

      <div class="symbol symbol-50px symbol-circle mb-4" :hidden="!logoxName">
        <img :src="getAssetPath('media/avatars/Vector.png')" alt="image" />
      </div>

      <div class="col-12 d-flex justify-content-center mb-4">
        <div class="symbol symbol-40px symbol-circle me-3" :hidden="!logoName">
          <img :src="getAssetPath('media/avatars/Frame 36.png')" alt="image" />
        </div>
        <div :class="`text-inverse-${color}`">
          <span class="fs-8 fw-bold d-block">{{ title }}</span>
          <span class="fs-6 fw-bold d-block">{{ description }}</span>
        </div>
      </div>

      <div class="d-flex flex-column align-items-center">
        <span class="badge badge-light-info w-60px mb-2" :hidden="!iconName">
          <img :src="iconName" class="w-20px me-2" alt="image" />
          {{ title }}
        </span>

        <span class="badge badge-light-info w-60px" :hidden="!title2">
          <img :src="icon2Name" class="w-10px me-2" alt="image" />
          {{ title2 }}
        </span>
      </div>

    </div>
    <!--end::Body-->
  </a>
  <!--end::Statistics Widget 5-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "counters-widget",
  props: {
    widgetClasses: String,
    color: String,
    iconColor: String,
    iconName: String,
    icon2Name: String,
    logoName: String,
    logoxName: String,
    title: String,
    title2: String,
    description: String
  },
  components: {},
  setup() {
    return {
      getAssetPath
    };
  }
});
</script>
