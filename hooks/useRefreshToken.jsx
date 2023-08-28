import { useAccessTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { checkToken, doRefreshToken } from "@/utils/api";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

export default function useRefreshToken() {
  const router = useRouter();
  const {
    removeAccessToken,
    setAccessToken: setToken,
    accessToken: isLoggedIn,
  } = useAccessTokenStore();
  const { user, removeUser } = useUserStore();
  const refresh = async () => {
    try {
      const { data } = await checkToken();
      try {
        if (data.message == "Token valid") {
          const { data } = await doRefreshToken();
          console.log(data);
          setToken(data.token);
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      // toast.error("Anda harus login terlebih dahulu");
      removeUser();
      removeAccessToken();
      localStorage.removeItem("token-srifoton");
      localStorage.removeItem("user-srifoton");
      router.replace("/");
    }
  };

  return refresh;
}
