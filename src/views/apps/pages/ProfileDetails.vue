<template>
  <!--begin::Layout-->
  <HeaderSearch card-classes="mb-6 mb-xl-9"></HeaderSearch>

  <div class="d-flex flex-column flex-xl-row ">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-300px  ">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8 ">
        <!--begin::Card body-->
        <div class="card-body    "  style="background-color: #E9E6F8" >
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column ">
            <!--begin::Name and Back Button-->
            <div class="d-flex align-items-center">
              <!--begin::Back Button-->
              <a
                href="#"
                class="btn btn-sm  me-5 "
                @click.prevent="goBack"
                style="color: black;"
              >
                <i class="bi bi-arrow-left"></i>
              </a>
              <!--end::Back Button-->

              <!--begin::Name-->
              <a
                href="#"
                class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1 me-5"
              >
                {{ userData.name || 'User Name' }}
              </a>
              <!--end::Name-->
            </div>
            <!--end::Name and Back Button-->

            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7" style="border: 2px solid blue;">
              <img :src="userData.profile_image" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <b
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">Bio
            </b>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semibold text-muted mb-6">{{ userData.bio || 'User Bio' }}</div>
            <!--end::Position-->

          </div>
          <!--end::Summary-->

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">

              <!--begin::Details item-->
              <div class="d-flex align-items-center">
                <img :src="getAssetPath('media/misc/at-symbol.png')" alt="image" class="me-2" />
                <div class="fw-bold">E-mail</div>
              </div>
              <div class="text-gray-600">{{ userData.email || 'User Email' }}</div>
              <!--end::Details item-->

              <!--begin::Details item-->
              <div class="d-flex align-items-center">
                <img :src="getAssetPath('media/misc/phone.png')" alt="image" class="me-2" />
                <div class="fw-bold mt-5">Mobile</div>
              </div>
              <div class="text-gray-600">{{ userData.mobile || 'User Mobile' }}</div>
              <!--end::Details item-->

              <!--begin::Details item-->
              <div class="d-flex align-items-center">
                <img :src="getAssetPath('media/misc/map-pin.png')" alt="image" class="me-2" />
                <div class="fw-bold mt-5">Location</div>
              </div>
              <div class="text-gray-600">{{ userData.location || 'User Location' }}</div>
              <!--end::Details item-->

              <!--begin::Details item-->
              <div class="d-flex align-items-center">
                <img :src="getAssetPath('media/misc/academic-cap.png')" alt="image" class="me-2" />
                <div class="fw-bold mt-5">Highest Education</div>
              </div>
              <div class="text-gray-600">{{ userData.highest_education || 'User Education' }}</div>
              <!--end::Details item-->

              <!--begin::Details item-->
              <div class="d-flex align-items-center">
                <img :src="getAssetPath('media/misc/briefcase.png')" alt="image" class="me-2" />
                <div class="fw-bold mt-5">Latest Work Experience</div>
              </div>
              <div class="text-gray-600">{{ userData.latest_work_experience || 'User Experience' }}</div>
              <!--end::Details item-->

            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15 ">
      <!--begin:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_Cards"
          role="tabpanel"
        >
          <div class="col-xl-12 mb-6 mb-xl-9">
            <LanguageSkillsCardsWidget card-classes="mb-6 mb-xl-12"></LanguageSkillsCardsWidget>
          </div>

          <div class="col-12 row">
            <div class="col-lg-4">
              <div class="col-12 row">
                <StatisticChartWidget
                  widget-classes="card-xl-stretch mb-xl-8"
                  chart-color="primary"
                  :chart-height="200"
                  btn-color="primary"
                  title="Hours spent"
                  desc="Hours spent by Learner over this program"
                  :the-value="userData.hours_spent"
                ></StatisticChartWidget>
              </div>
              <div class="col-12 row">
                <StatisticChartWidget
                  widget-classes="card-xl-stretch mb-xl-8"
                  chart-color="success"
                  :chart-height="200"
                  btn-color="success"
                  title="Credit spent"
                  desc="Credit spent by Learner over this program."
                  :the-value="userData.credit_spent"
                ></StatisticChartWidget>
              </div>
            </div>

            <div class="col-lg-8 ">
              <ImpactMeasurementQuestionsWidget widget-classes="card-xl-stretch mb-xl-8"></ImpactMeasurementQuestionsWidget>
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
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref, watch } from "vue";
import HeaderSearch from "@/components/widgets/HeaderSearch.vue";
import LanguageSkillsCardsWidget from "@/components/widgets/LanguageSkillsCardsWidget.vue";
import StatisticChartWidget from "@/components/widgets/StatisticChartWidget.vue";
import ImpactMeasurementQuestionsWidget from "@/components/widgets/ImpactMeasurementQuestionsWidget.vue";
import { useRouter } from 'vue-router';
import { db } from "@/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "profile-details",
  components: {
    ImpactMeasurementQuestionsWidget,
    StatisticChartWidget,
    HeaderSearch,
    LanguageSkillsCardsWidget,
  },
  setup() {
    const userData = ref({
      name: "",
      bio: "",
      email: "",
      mobile: "",
      location: "",
      highest_education: "",
      latest_work_experience: "",
      profile_image: "",
      hours_spent: 11,
      credit_spent: 22,
    });

    const router = useRouter();

    const goBack = () => {
      router.push({ name: 'monitoring-page' });
    };

    const fetchUserData = async () => {
      const uuid = JwtService.getToken();

      if (uuid) {
        try {
          const userQuery = query(collection(db, "users"), where("api_token", "==", uuid));
          const querySnapshot = await getDocs(userQuery);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userDataFromDb = userDoc.data();

            userData.value.name = userDataFromDb.name || 'User Name';
            userData.value.bio = userDataFromDb.bio || 'User Bio';
            userData.value.email = userDataFromDb.email || 'User Email';
            userData.value.mobile = userDataFromDb.mobile || 'User Mobile';
            userData.value.location = userDataFromDb.location || 'User Location';
            userData.value.highest_education = userDataFromDb.highest_education || 'User Education';
            userData.value.latest_work_experience = userDataFromDb.latest_work_experience || 'User Experience';
            userData.value.profile_image = getAssetPath('media/avatars/300-1.jpg');
            userData.value.hours_spent = userDataFromDb.hours_spent ?? 1;
            userData.value.credit_spent = userDataFromDb.credit_spent !== undefined && userDataFromDb.credit_spent !== null
              ? userDataFromDb.credit_spent
              : 2;

          } else {
            console.error("No user found with the provided API token.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    onMounted(() => {
      fetchUserData();
    });

    watch(userData, (newVal) => {
      console.log("userData updated:", newVal);
    });

    return {
      getAssetPath,
      userData,
      goBack,
    };
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
});
</script>

<style lang="scss" scoped>
</style>
