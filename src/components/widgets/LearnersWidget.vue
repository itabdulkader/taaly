<template>
  <!--begin::Table Widget -->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <div class="card-toolbar">
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1"
              data-bs-toggle="tab"
              href="#kt_table_widget_8_tab_1"
            >Learners</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1"
              data-bs-toggle="tab"
              href="#kt_table_widget_8_tab_2"
            >Language Buddies</a>
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <div class="tab-content">
        <div
          class="tab-pane fade active show"
          id="kt_table_widget_8_tab_1"
        >
          <!--begin::Table container-->
          <div class="table-responsive">
            <!--begin::Table-->
            <table class="table align-middle gs-0 gy-3">
              <!--begin::Table head-->
              <thead>
              <tr>
                <th class="min-w-50px"></th>
                <th class="min-w-150px">Name</th>
                <th class="min-w-140px">Level</th>
                <th class="min-w-120px">Program</th>
                <th class="min-w-120px">Organization</th>
                <th class="min-w-120px">Rating</th>
                <th class="min-w-120px">Hours spent</th>
                <th class="min-w-100px text-end">Actions</th>
              </tr>
              </thead>
              <!--end::Table head-->

              <!--begin::Table body-->
              <tbody>
              <template v-for="(item, index) in items[0]" :key="index">
                <tr>
                  <td>
                    <div class="symbol symbol-50px me-2">
                      <div class="symbol symbol-45px me-5">
                        <img :src="item.image" alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                    >{{ item.name }}</a>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.level }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.program }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.organization }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.rating }}</span>
                  </td>
                  <td class="text-end">
                    <div class="d-flex flex-column w-100 me-2">
                      <div class="d-flex flex-stack mb-2">
                          <span class="text-muted me-2 fs-7 fw-semibold">
                            {{ item.hours_spent }}
                          </span>
                      </div>
                      <!-- Assuming you want to show the progress based on hours_spent -->
                      <div class="progress h-6px w-100">
                        <div
                          class="progress-bar"
                          :class="`bg-${item.color}`"
                          role="progressbar"
                          :style="{ width: item.hours_spent + '%' }"
                          :aria-valuenow="item.hours_spent"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <i class="bi bi-three-dots fs-5"></i>
                    </a>
                  </td>
                </tr>
              </template>
              </tbody>
              <!--end::Table body-->
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Tap pane-->

        <div
          class="tab-pane fade"
          id="kt_table_widget_8_tab_2"
        >
          <!--begin::Table container-->
          <div class="table-responsive">
            <!--begin::Table-->
            <table class="table align-middle gs-0 gy-3">
              <!--begin::Table head-->
              <thead>
              <tr>
                <th class="min-w-50px"></th>
                <th class="min-w-150px">Name</th>
                <th class="min-w-140px">Level</th>
                <th class="min-w-120px">Program</th>
                <th class="min-w-120px">Organization</th>
                <th class="min-w-120px">Rating</th>
                <th class="min-w-120px">Hours spent</th>
                <th class="min-w-100px text-end">Actions</th>
              </tr>
              </thead>
              <!--end::Table head-->

              <!--begin::Table body-->
              <tbody>
              <template v-for="(item, index) in items[1]" :key="index">
                <tr>
                  <td>
                    <div class="symbol symbol-50px me-2">
                      <div class="symbol symbol-45px me-5">
                        <img :src="item.image" alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                    >{{ item.name }}</a>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.level }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.program }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.organization }}</span>
                  </td>
                  <td class="text-end">
                    <span class="text-gray-900 fw-bold d-block fs-7">{{ item.rating }}</span>
                  </td>
                  <td class="text-end">
                    <div class="d-flex flex-column w-100 me-2">
                      <div class="d-flex flex-stack mb-2">
                          <span class="text-muted me-2 fs-7 fw-semibold">
                            {{ item.hours_spent }}
                          </span>
                      </div>
                      <!-- Assuming you want to show the progress based on hours_spent -->
                      <div class="progress h-6px w-100">
                        <div
                          class="progress-bar"
                          :class="`bg-${item.color}`"
                          role="progressbar"
                          :style="{ width: item.hours_spent + '%' }"
                          :aria-valuenow="item.hours_spent"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <i class="bi bi-three-dots fs-5"></i>
                    </a>
                  </td>
                </tr>
              </template>
              </tbody>
              <!--end::Table body-->
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Tap pane-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tables Widget -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import { db } from "@/firebase"; // Ensure your Firebase setup is correct
import { collection, getDocs } from "firebase/firestore";

interface Item {
  image: string;
  name: string;
  level: string;
  program: string;
  organization: string;
  rating: string;
  hours_spent: string;
  color: string;
}

export default defineComponent({
  name: "learners-widget",
  props: {
    widgetClasses: String,
  },
  setup() {
    const items = ref<Item[][]>([[], []]); // Define the type explicitly

    const fetchData = async () => {
      try {
        // Fetch Learners
        const learnersSnapshot = await getDocs(collection(db, "learners"));
        const learnersData = learnersSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            image: getAssetPath("media/avatars/p1.png"), // Placeholder image
            name: data.name,
            level: data.level,
            program: data.program,
            organization: data.organization,
            rating: data.rating.toString(), // Convert to string if necessary
            hours_spent: data.hours_spent.toString(), // Convert to string if necessary
            color: "primary", // Set colors based on criteria
          } as Item; // Type assertion
        });

        // Fetch Language Buddies
        const buddiesSnapshot = await getDocs(collection(db, "language_buddies"));
        const buddiesData = buddiesSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            image: getAssetPath("media/avatars/p2.png"), // Placeholder image
            name: data.name,
            level: data.level,
            program: data.program,
            organization: data.organization,
            rating: data.rating.toString(), // Convert to string if necessary
            hours_spent: data.hours_spent.toString(), // Convert to string if necessary
            color: "danger", // Set colors based on criteria
          } as Item; // Type assertion
        });

        // Update items with fetched data
        items.value = [learnersData, buddiesData];
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      items,
    };
  },
});

</script>
