<template>
  <!--begin::Earnings-->
  <div :class="`card ${cardClasses} mt-13`">


    <!--begin::Body-->
    <div class="card-body   " style="background-color: #E9E6F8">

      <!--begin::Left Section-->
      <div class="d-flex flex-wrap flex-stack mb-0 ">

        <!--begin::Row-->
        <div class="d-flex flex-wrap ">
          <router-link to="/">
          <img
            class="d-none d-lg-block mx-auto w-100px w-md-50 w-xl-100px mb-0"
            :src="getAssetPath('media/misc/Frame 24.png')"
            alt=""
          />
          </router-link>
        </div>
        <!--end::Row-->

        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            data-kt-subscription-table-filter="search"
            class="form-control form-control-solid w-300px ps-14  bg-white"
            placeholder="Search"
          />
        </div>
        <!--end::Search-->


        <div class="d-flex flex-stack">
          <div class="d-flex flex-wrap ">

            <img
              :src="getAssetPath('media/misc/bell.png')"
              class="w-30px h-30px m-2"
              alt=""
            />


            <img @click="signOut()"
              :src="getAssetPath('media/misc/signout.png')"
              class="w-30px h-30px m-2"
              alt=""
            />


            <div class="d-flex flex-column m-3">
              <router-link to="/apps/pages/profile-details">
              <a  class="fs-5 text-gray-900 text-hover-primary fw-bold"
              >Hi, Jenny</a
              ></router-link>
            </div>
            <router-link to="/apps/pages/profile-details">
            <div class="symbol symbol-50px symbol-circle mb-0">

            <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image" />
            </div>
            </router-link>



          </div>

        </div>




      </div>
      <!--end::Left Section-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Earnings-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { auth } from "@/firebase";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "earnings-card",
  props: {
    cardClasses: String,
  },
  components: {},
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useAuthStore();
    const signOut = async() => {
      await store.logout();
      try {
        await auth.signOut();
        // Navigate to the login page
        router.push({ name: "sign-in" });
      } catch (error) {
        console.error('Logout error:', error);
      }



    };

    return {  signOut,
      getAssetPath,
    };
  },
});
</script>
