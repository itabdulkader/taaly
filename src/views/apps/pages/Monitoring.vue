<template>
  <!--begin::Layout-->
  <HeaderSearch card-classes="mb-2 mb-xl-2"></HeaderSearch>

  <div class="d-flex flex-column flex-xl-row">

    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <!--begin:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active row"
          id="kt_customer_view_overview_Cards"
          role="tabpanel"
        >
          <div class="row">

            <!--begin::Row-->
            <div class="col-lg-2">
              <NavMenuWidget
                widget-classes="card-xl-stretch mb-5 mb-xl-8"
              ></NavMenuWidget>
            </div>
            <!--end::Row-->

            <div class="col-lg-8   mb-1 mb-xl-12 mb-2 mb-xl-2"  style="background-color: #E9E6F8" >
              <div class="row mb-2 mb-xl-2">
                <MonitoringCards card-classes="mb-1 mb-xl-12"></MonitoringCards>
              </div>
              <div class="col-mb-1 mb-xl-2">
                <LearnersWidget widget-classes="mb-2 mb-xl-2"></LearnersWidget>
              </div>

              <div class="col-mb-1 mb-xl-2 row">
                <div class="col-lg-4" v-for="(org, index) in organizations" :key="org.id">
                  <OrganizationsWidget
                    class="card-xl-stretch mb-xl-8"
                    :class="{
                        'bg-success': index === 0,
                        'bg-warning': index === 1,
                        'bg-danger': index === 2
                      }"
                    background="abstract-2.svg"
                    :title="org.name"
                    :time="org.location"
                    :description="org.details"
                  ></OrganizationsWidget>
                </div>
              </div>
            </div>

            <div class="col-lg-2 mb-1 mb-xl-2 mb-2 mb-xl-2">
              <div class="col-lg-12 mb-2 mb-xl-2">
                <MonitoringOverallActivityCard
                  widget-classes="card-xl-stretch mb-xl-8"
                  chart-color="primary"
                  :chart-height="200"
                  :theOverallActivityValue="overallActivityValue ?? undefined"
                  title="Overall Activity"
                  desc="Hours spent by organizations starting from January"
                ></MonitoringOverallActivityCard>
              </div>
              <div class="col-lg-12 mb-2 mb-xl-2">
                <MonitoringAttendanceCard
                  widget-classes="card-xl-stretch mb-xl-8"
                  chart-color="success"
                  :theLearnersValue="learnersValue"
                  :theLanguageBuddiesValue="languageBuddiesValue"
                  :chart-height="200"
                  btn-color="success"
                  title="Attendance"
                  desc=""
                ></MonitoringAttendanceCard>
              </div>

              <div class="col-lg-12 mb-2 mb-xl-2">
                <CountersWidget
                  widget-classes="card-xl-stretch mb-xl-2"
                  icon-name=""
                  icon-color="primary"
                  color="primary"
                  logo-name=""
                  logox-name="Vector.png"
                  title="Manage Organizations"
                  title2=""
                  description=""
                ></CountersWidget>
              </div>
            </div>

          </div>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { db } from "@/firebase"; // Ensure your Firebase setup is correct
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import HeaderSearch from "@/components/widgets/HeaderSearch.vue";
import MonitoringCards from "@/components/widgets/MonitoringCards.vue";
import MonitoringAttendanceCard from "@/components/widgets/MonitoringAttendanceCard.vue";
import MonitoringOverallActivityCard from "@/components/widgets/MonitoringOverallActivityCard.vue";

import LearnersWidget from "@/components/widgets/LearnersWidget.vue";
import CountersWidget from "@/components/widgets/CountersWidget.vue";
import OrganizationsWidget from "@/components/widgets/OrganizationsWidget.vue";
import NavMenuWidget from "@/components/widgets/NavMenuWidget.vue";

export default defineComponent({
  name: "monitoring-page",
  components: {
    NavMenuWidget,
    OrganizationsWidget,
    CountersWidget,
    LearnersWidget,
    MonitoringAttendanceCard,
    MonitoringOverallActivityCard,
    HeaderSearch,
    MonitoringCards,
  },
  data() {
    return {
      chartHeight: 200, // Numeric value
    };
  },
  computed: {
    chartHeightString() {
      return this.chartHeight.toString(); // Convert to string
    },
  },

  setup() {
    interface Organization {
      id: string;
      name: string;
      location: string;
      details: string;
      background: string;
      class: string;
    }

    const overallActivityValue = ref(0);
    const learnersValue = ref(0);
    const languageBuddiesValue = ref(0);
    const organizations = ref<Organization[]>([]);

    const fetchStatistics = async () => {
      try {
        // Fetch overall activity
        const overallActivityDoc = await getDoc(doc(db, "statistics", "overall_activity"));
        if (overallActivityDoc.exists()) {
          overallActivityValue.value = overallActivityDoc.data().hours;
        }

        // Fetch attendance
        const attendanceDoc = await getDoc(doc(db, "statistics", "attendance"));
        if (attendanceDoc.exists()) {
          const data = attendanceDoc.data();
          learnersValue.value = data.learners;
          languageBuddiesValue.value = data.language_buddies;
        }

        // Fetch latest 3 organizations
        const orgQuery = query(collection(db, "organizations"),  limit(3));
        const orgSnapshot = await getDocs(orgQuery);
        organizations.value = orgSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name, // Ensure 'name' exists in Firestore documents
          location: doc.data().location, // Ensure 'location' exists in Firestore documents
          details: doc.data().details, // Ensure 'details' exists in Firestore documents
          class: "card-xl-stretch mb-xl-8",
          background: "abstract-2.svg"
        }));

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchStatistics();
    });

    return {
      overallActivityValue,
      learnersValue,
      languageBuddiesValue,
      organizations,
    };
  },
});
</script>
