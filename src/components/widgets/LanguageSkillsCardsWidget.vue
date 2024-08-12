<template>
  <!--begin::Row-->
  <div class="row g-2">
    <div v-for="(value, key) in userData.languages_skills" :key="key" class="col-xl-3">
      <LanguagesSkillsWidget
        widget-classes="card-xl-stretch mb-xl-1"

        :icon-name="getIconForKey(key)"
        :icon2-name="getSecondIconForKey(key)"

        color="secondary"
        :icon-color="getIconColorForKey(key)"

        :title="getTitleForKey(key,value[0])"
        :title2="getSecondTitleForKey(key,value[1])"

        :description="getDescriptionForKey(key, value)"

      ></LanguagesSkillsWidget>
    </div>
  </div>
  <!--end::Row-->
</template>
<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import LanguagesSkillsWidget from "@/components/widgets/LanguagesSkillsWidget.vue";
import { db } from "@/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "widgets-statistics",
  components: {
    LanguagesSkillsWidget,
  },
  setup() {
    const userData = ref({
      languages_skills: {}
    });

    const fetchUserData = async () => {
      const uuid = JwtService.getToken(); // Retrieve the stored UUID

      if (uuid) {
        try {

          // Create a query against the collection where api_token matches the UUID
          const userQuery = query(collection(db, "users"), where("api_token", "==", uuid));
          const querySnapshot = await getDocs(userQuery);

          if (!querySnapshot.empty) {
            // Assuming there is only one user with the given api_token
            const userDoc = querySnapshot.docs[0];
            const userDataFromDb = userDoc.data();
            console.log("asd")

            // Populate userData with the fetched user data
            userData.value.languages_skills = userDataFromDb.languages_skills || {};

            console.log( userData.value.languages_skills)
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

    const getIconForKey = (key: string) => {
      // Map keys to appropriate icon paths
      const iconPaths: Record<string, string> = {
        "Mother Language": 'media/misc/Flag Saudi Arabia.png',
        "Other Languages": 'media/misc/Flag United Kingdom.png',
        Level: 'media/misc/Grinning Face With Big Eyes.png',
        interests: 'media/misc/Open Book.png'
      };
      return getAssetPath(iconPaths[key] || 'media/misc/Default.png');
    };

    const getSecondIconForKey = (key: string) => {
      // Customize secondary icon if needed
      const iconPaths: Record<string, string> = {
        "Other Languages": 'media/misc/Flag Germany.png',
        interests: 'media/misc/Hiking Boot.png'
      };
      return getAssetPath(iconPaths[key] || '');
    };

    const getIconColorForKey = (key: string) => {
      // Customize icon color based on key
      const colorMap: Record<string, string> = {
        interests: 'white',
        default: 'primary'
      };
      return colorMap[key] || colorMap.default;
    };

    const getTitleForKey = (key: string,value: string) => {
      // Map keys to appropriate titles
      const titles: Record<string, string> = {
        "Mother Language": value,
        "Other Languages": value,
        Level: value,
        interests: value
      };
      return titles[key] || 'Unknown';
    };

    const getSecondTitleForKey = (key: string,value: string) => {
      // Customize secondary title if needed
      const secondaryTitles: Record<string, string> = {
        "Other Languages":value,
        interests: value
      };
      return secondaryTitles[key] || '';
    };

    const getDescriptionForKey = (key: string, value: any) => {

      return key;
    };

    return {
      getAssetPath,
      userData,
      getIconForKey,
      getSecondIconForKey,
      getIconColorForKey,
      getTitleForKey,
      getSecondTitleForKey,
      getDescriptionForKey
    };
  }
});
</script>
