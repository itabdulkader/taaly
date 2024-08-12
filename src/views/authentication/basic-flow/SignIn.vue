<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-16">
    <!--begin::Form-->
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      :initial-values="{ email: 'it.abdulkader@gmail.com', password: '123123123' }"
    >
      <!--begin::Heading-->
      <div class="text-start mb-10">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Welcome to <b>Taaly!</b></h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-900 fw-semibold fs-4">
          Login Here
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-gray-900">Email</label>
        <!--end::Label-->

        <!--begin::Input-->
        <div style="position: relative;">
          <Field
            tabindex="1"
            class="form-control form-control-sm form-control-solid"
            type="text"
            name="email"
            autocomplete="off"
            style="padding-right: 25px;"
          />
          <svg style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;"
               xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-at"
               viewBox="0 0 16 16">
            <path
              d="M8 1a7 7 0 1 0 4.93 12.071.5.5 0 1 0-.714-.701A6 6 0 1 1 8 2a6.236 6.236 0 0 1 1.03.094 2.87 2.87 0 0 1 .25.046h.007l.008.002a3 3 0 0 1 .655.163 2.495 2.495 0 0 1 1.257 1.257 2.34 2.34 0 0 1 .255.843l.001.006v.001a2.87 2.87 0 0 1 .046.25A6.236 6.236 0 0 1 14 8c0 1.956-1.313 3.5-3 3.5a3.18 3.18 0 0 1-1.116-.2.5.5 0 1 0-.384.924A4.181 4.181 0 0 0 11 12c2.25 0 4-2 4-4a7 7 0 0 0-7-7zm0 4a2 2 0 1 0 1.732 3 3.48 3.48 0 0 0 0 2.26A2 2 0 1 0 8 5zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </div>
        <!--end::Input-->

        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6 mb-0">Password</label>
          <!--end::Label-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <div style="position: relative;">
          <Field
            tabindex="2"
            class="form-control form-control-sm form-control-solid"
            type="password"
            name="password"
            autocomplete="off"
            style="padding-right: 25px;"
          />
          <svg style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;"
               xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash"
               viewBox="0 0 16 16">
            <path
              d="M13.359 11.238l1.469 1.47a.5.5 0 0 1-.708.708l-1.515-1.516a8.493 8.493 0 0 1-4.437 1.488C4.79 13.388 1.743 10.639 1.743 8c0-.902.297-1.745.795-2.485L.146 4.122a.5.5 0 1 1 .708-.708l14 14a.5.5 0 0 1-.707.708l-1.641-1.642zM11.731 9.61L10.12 8c-.257-.257-.512-.494-.767-.712C9.07 6.994 8.536 7.25 8 7.25a1.5 1.5 0 1 0-.106 2.991c.481 0 .947-.217 1.272-.488A6.998 6.998 0 0 0 12 8a6.998 6.998 0 0 0-.268 1.61zM5.229 3.201A8.457 8.457 0 0 1 8 2.61c3.43 0 6.742 2.478 6.742 5.39 0 .903-.296 1.746-.794 2.485a8.464 8.464 0 0 1-1.454 1.547l-.508-.507c.514-.537.964-1.17 1.282-1.775.258-.484.451-1.008.543-1.55C13.27 6.168 10.378 4.39 8 4.39a8.5 8.5 0 0 0-2.443.412 8.442 8.442 0 0 1-.328.227zM3.271 5.515a6.988 6.988 0 0 0-.83 1.265c-.258.484-.45 1.008-.542 1.55 1.288 2.157 4.18 3.935 6.557 3.935.892 0 1.753-.185 2.558-.509a8.433 8.433 0 0 1-.328-.227A8.5 8.5 0 0 1 8 11.611c-3.43 0-6.742-2.478-6.742-5.39 0-.902.297-1.745.795-2.485l1.741 1.74c.372-.511.789-.974 1.228-1.348z" />
          </svg>

        </div>
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Link-->
        <router-link to="/password-reset">
          <div class="text-gray-500 fw-semibold fs-0 mb-4">
            Forgot Password?
          </div>
        </router-link>
        <!--end::Link-->

        <!--begin::Submit button-->
        <button
          tabindex="3"
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label">Continue</span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
        <!--end::Submit button-->


        <!--begin::Link-->
        <router-link to="/sign-up">
          <div class="text-gray-900 fw-semibold fs-0">
            New here? Create an Account
          </div>
        </router-link>
        <!--end::Link-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { auth, signInWithEmailAndPassword } from "@/firebase";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "@/firebase"; // Assuming you have already initialized Firestore and exported it as 'db'

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    // Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    // Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = userCredential.user;

        // Fetch user data from Firestore
        const userDocRef = doc(db, "users", user.uid); // Assuming 'users' is the collection and 'user.uid' is the document ID
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();



          Swal.fire({
            text: "You have successfully logged in!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semibold btn-light-primary",
            },
          }).then(async () => {
            // Save user data in the store
            console.log("userData")
            console.log(userData)
            await store.setAuth(userData);

            // Go to page after successfully login
            router.push({ name: "monitoring-page" });
          });
        } else {
          throw new Error("User data not found in Firestore.");
        }
      } catch (e: any) {
        Swal.fire({
          text: e.message,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-danger",
          },
        });
      } finally {
        // Re-enable submit button and deactivate indicator
        if (submitButton.value) {
          submitButton.value.removeAttribute("data-kt-indicator");
          submitButton.value.disabled = false;
        }
      }
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
    };
  },
});
</script>

