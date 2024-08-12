import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '@/firebase'; // Import your Firestore instance


export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(authUser.api_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("login", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }


  async function verifyAuth() {
    const uuid = JwtService.getToken(); // Retrieve the stored UUID

    console.log("uuid ..............");
    console.log(uuid);

    if (uuid) {
      try {
        // Create a query against the collection where api_token matches the UUID
        const userQuery = query(collection(db, "users"), where("api_token", "==", uuid));
        const querySnapshot = await getDocs(userQuery);

        console.log("uuid .......querySnapshot.......");
        console.log(!querySnapshot.empty);

        if (!querySnapshot.empty) {
          // Assuming there's only one user with the matching token
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();

          console.log("uuid .......userDoc.exists.......");
          console.log(userData.api_token);

          // Check if the token in the user data matches the UUID
          if (userData.api_token === uuid) {
            setAuth(userData); // Set the authenticated state with user data
          } else {
            throw new Error("Token mismatch");
          }
        } else {
          throw new Error("User not found");
        }
      } catch (error: any) {
        setError(error.message);

        console.log("uuid .......setError.......");
        console.log(error.message);

        purgeAuth(); // Clear authentication state
      }
    } else {
      purgeAuth(); // Clear authentication state if UUID is missing
    }
  }
/*  function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify_token", { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }*/

  return {
    errors,
    user,
    isAuthenticated,
    setAuth,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});
