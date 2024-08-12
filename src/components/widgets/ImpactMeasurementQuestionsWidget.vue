<template>
  <!--begin::Tables Widget -->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5  "  style="background-color: #E9E6F8" >
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Impact Measurement</span>
        <span class="text-muted mt-1 fw-semibold fs-7">Questions</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3  "  style="background-color: #E9E6F8" >
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-3">
          <!--begin::Table head-->
          <thead style="border-bottom: 1px solid lightgray;">
          <tr>
            <th class="p-0 w-550px">Questions</th>
            <th class="p-0 min-w-120px text-end  fw-semibold">T0</th>
            <th class="p-0 min-w-40px text-end  fw-semibold">T1</th>
          </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
          <template v-for="(value, key) in impactMeasurementQuestions" :key="key">
            <tr>
              <td>
                <a
                  href="#"
                  class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                >
                  {{ key }}
                </a>
              </td>
              <td class="text-end text-muted fw-semibold">
                {{ value.t0 }}
              </td>
              <td class="text-end text-muted fw-semibold">
                {{ value.t1 }}
              </td>
            </tr>
          </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tables Widget -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { db } from "@/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "impact-measurement-questions-widget",
  props: {
    widgetClasses: String,
  },
  setup() {
    const impactMeasurementQuestions = ref<Record<string, { t0: number, t1: number }>>({});

    const fetchUserAndLearnerData = async () => {
      const uuid = JwtService.getToken(); // Retrieve the stored UUID

      if (uuid) {
        try {
          // Fetch user data to get the userId
          const userQuery = query(collection(db, "users"), where("api_token", "==", uuid));
          const userSnapshot = await getDocs(userQuery);

          if (!userSnapshot.empty) {
            const userDoc = userSnapshot.docs[0];
            const userDataFromDb = userDoc.data();
            const userId = userDoc.id; // Assuming the document ID is the userId

            // Fetch learner data using the userId
            const learnerQuery = query(collection(db, "learners"), where("userId", "==", userId));
            const learnerSnapshot = await getDocs(learnerQuery);

            if (!learnerSnapshot.empty) {
              const learnerDoc = learnerSnapshot.docs[0];
              const learnerDataFromDb = learnerDoc.data();

              // Populate impactMeasurementQuestions with the fetched data
              impactMeasurementQuestions.value = learnerDataFromDb.impact_measurement_questions || {};
            } else {
              console.error("No learner found with the provided user ID.");
            }
          } else {
            console.error("No user found with the provided API token.");
          }
        } catch (error) {
          console.error("Error fetching user or learner data:", error);
        }
      }
    };

    onMounted(() => {
      fetchUserAndLearnerData();
    });

    return {
      impactMeasurementQuestions,
      // getAssetPath: (path: string) => new URL(`@/assets/${path}`, import.meta.url).href

    };
  },
});
</script>
