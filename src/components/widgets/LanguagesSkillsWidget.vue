<template>
  <!--begin::Statistics Widget -->
  <a href="#" :class="[widgetClasses]" class="card hoverable p-4" style="background-color: #E9E6F8">
    <!--begin::Body-->
    <div class=" ">

      <div class="symbol symbol-50px symbol-circle mb-0" :hidden="!logoxName">
        <img :src="getAssetPath('media/avatars/Vector.png')" alt="image" />
      </div>

      <div :class="`text-inverse-${color}`" class="fw-bold ">

        <div class="symbol symbol-50px symbol-circle mb-0" :hidden="!logoName">
          <img :src="getAssetPath('media/avatars/Frame 36.png')" alt="image" />
        </div>


        <!--        {{ title }}-->
      </div>


      <div :class="`text-inverse-${color}`" class="fw-bold   ">
        {{ description }}
      </div>

      <div class="col-12 d-flex p-1 ">

       <span  class="badge badge-light-info m-1 border border-primary"  :hidden="!iconName" style="font-size: 9px;"  >
      <img   :src="iconName"   class="w-10px me-2"    alt=""   />  {{ title }}   </span>


        <span  class="badge badge-light-info m-1 border border-primary"  :hidden="!title2"  style="font-size: 9px;" >

    <img :src="icon2Name" class="w-10px me-2"   alt=""  />  {{ title2 }} </span>
      </div>


    </div>
    <!--end::Body-->
  </a>
  <!--end::Statistics Widget -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "languages-skills-widget",
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
