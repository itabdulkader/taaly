<template>
  <!--begin::Activities drawer-->
  <div
    id="kt_activities"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="activities"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_activities_toggle"
    data-kt-drawer-close="#kt_activities_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_activities_header">
        <h3 class="card-title fw-bold text-gray-900">Activity Logs</h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_activities_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_activities_body">
        <!--begin::Content-->
        <div
          id="kt_activities_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_activities_body"
          data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="timeline">

          </div>
          <!--end::Timeline items-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-5 text-center" id="kt_activities_footer">
        <a href="#" class="btn btn-bg-body text-primary">
          View All Activities
          <KTIcon icon-name="arrow-right" icon-class="fs-3 text-primary" />
        </a>
      </div>
      <!--end::Footer-->
    </div>
  </div>
  <!--end::Activities drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";


export default defineComponent({
  name: "kt-activity-drawer",
  components: {

  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
