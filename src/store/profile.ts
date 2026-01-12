import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const userData = useLocalStorage("profileData", {
    name: null,
    email: null,
    mobNo: null,
    accessToken: null,
    refreshToken: null,
    profilePic: null,
  });

  function setProfileData(data) {
    userData.value = data;
  }

  function getAccessToken() {
    return userData.value.accessToken;
  }

  function getRefreshToken() {
    return userData.value.refreshToken;
  }

  function setTokens(token: string, refreshToken: string) {
    userData.value = {
      ...userData.value,
      accessToken: token,
      refreshToken,
    };
  }

  function clearUserData() {
    userData.value = {
      name: null,
      email: null,
      mobNo: null,
      accessToken: null,
      refreshToken: null,
      profilePic: null,
    };
  }

  return {
    userData,
    setProfileData,
    getAccessToken,
    getRefreshToken,
    setTokens,
    clearUserData,
  };
});
