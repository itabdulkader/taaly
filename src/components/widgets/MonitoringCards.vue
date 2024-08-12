<template>
  <!--begin::Row-->
  <div class="row g-6">
    <div class="col-xl-3">
      <CountersWidget
        widget-classes="card-xl-stretch mb-xl-2"
        icon-name=""
        icon-color="primary"
        color="primary"
        logo-name="chart-simple"
        title="Total Learners"
        title2=""
        :description="statistics.learnersTotal.toString()"
      ></CountersWidget>
    </div>

    <div class="col-xl-3">
      <CountersWidget
        widget-classes="card-xl-stretch mb-xl-2"
        icon-name=""
        icon2-name=""
        color="primary"
        logo-name="chart-simple"
        icon-color="primary"
        title="Total Language Buddies"
        title2=""
        :description="statistics.languageBuddiesTotal.toString()"
      ></CountersWidget>
    </div>

    <div class="col-xl-3">
      <CountersWidget
        widget-classes="card-xl-stretch mb-xl-2"
        icon-name=""
        color="primary"
        logo-name="chart-simple"
        icon-color="white"
        title="Total Organizations"
        title2=""
        :description="statistics.organizationsTotal.toString()"
      ></CountersWidget>
    </div>

    <div class="col-xl-3">
      <CountersWidget
        widget-classes="card-xl-stretch mb-xl-2"
        icon-name=""
        icon2-name=""
        logo-name="chart-simple"
        color="primary"
        icon-color="white"
        title="Total Projects"
        title2=""
        :description="statistics.projectsTotal.toString()"
      ></CountersWidget>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import CountersWidget from "@/components/widgets/CountersWidget.vue";
import { db } from "@/firebase"; // Ensure your Firebase setup is correct
import { doc, getDoc } from "firebase/firestore";

export default defineComponent({
  name: "widgets-statistics",
  components: {
    CountersWidget,
  },
  setup() {
    const statistics = ref({
      learnersTotal: 0,
      languageBuddiesTotal: 0,
      organizationsTotal: 0,
      projectsTotal: 0,
    });

    const fetchStatistics = async () => {
      try {
        // Fetch each document from Firestore
        const learnersDoc = await getDoc(doc(db, "statistics", "learners"));
        const languageBuddiesDoc = await getDoc(doc(db, "statistics", "language_buddies"));
        const organizationsDoc = await getDoc(doc(db, "statistics", "organizations"));
        const projectsDoc = await getDoc(doc(db, "statistics", "projects"));

        // Check if documents exist and update the statistics
        if (learnersDoc.exists()) {
          statistics.value.learnersTotal = learnersDoc.data().total;
        }
        if (languageBuddiesDoc.exists()) {
          statistics.value.languageBuddiesTotal = languageBuddiesDoc.data().total;
        }
        if (organizationsDoc.exists()) {
          statistics.value.organizationsTotal = organizationsDoc.data().total;
        }
        if (projectsDoc.exists()) {
          statistics.value.projectsTotal = projectsDoc.data().total;
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    onMounted(() => {
      fetchStatistics();
    });

    return {
      statistics,
    };
  },
});
</script>
