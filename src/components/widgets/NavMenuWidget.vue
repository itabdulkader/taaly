<template>
  <!--begin::NavMenuWidget-->
  <div class="card" :class="widgetClasses">


    <!--begin::Body-->
    <div class="card-body pt-1  " style="background-color: #E9E6F8">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="[
           `${item.padding}` ,
            `bg-${item.color}`,
          ]"
          class="d-flex align-items-center rounded p-2 mb-2 "
        >
          <!--begin::Icon-->
          <img :src="item.icon" alt="image" width="16" />
          <!--end::Icon-->

          <!--begin::Title-->
          <div class="flex-grow-5 me-2">
            <a href="#" class="fw-bold text-gray-800 text-hover-primary fs-6 p-2">{{
              item.title
            }}</a>

          </div>
          <!--end::Title-->

        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::NavMenuWidget-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "nav-menu-widget",
  components: {
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        color: "primary",
        padding: "mb-2 mt-2",
        icon: getAssetPath('media/misc/Vector.png'),
        title: "Monitoring",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: "mb-2",
        icon: getAssetPath('media/misc/clipboard-document-list.png'),
        title: "Matching",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: "mb-2",
        icon: getAssetPath('media/misc/building-library.png'),
        title: "Reporting",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: "mb-2 ",
        icon: getAssetPath('media/misc/academic-cap.png'),
        title: "Organizations",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: "mb-2",
        icon:getAssetPath('media/misc/book-open.png'),
        title: "Projects",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: " mt-18",
        icon:getAssetPath('media/misc/cog-6-tooth.png'),
        title: "Settings",
        text: "",
        number: "",
      },
      {
        color: " ",  padding: "mb-2",
        icon:getAssetPath('media/misc/question-mark-circle.png'),
        title: "Help",
        text: "",
        number: "",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
