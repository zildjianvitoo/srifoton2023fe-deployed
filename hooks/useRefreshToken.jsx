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
  const { removeUser } = useUserStore();

  const refresh = async () => {
    try {
      const { data } = await checkToken();

      if (data.message === "Token valid") {
        try {
          const { data } = await doRefreshToken();

          setToken(data.token);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      removeUser();
      removeAccessToken();
      localStorage.removeItem("token-srifoton");
      localStorage.removeItem("user-srifoton");
      router.replace("/");
    }
  };

  return refresh;
}
