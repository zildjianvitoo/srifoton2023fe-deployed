import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { checkToken, doRefreshToken } from "@/utils/api";
import LoadingScreen from "../atoms/LoadingScreen";

const RedirectIfLoggedIn = (WrappedComponent) => {
  const WithRedirect = () => {
    const router = useRouter();
    const isLoggedIn = useAccessTokenStore((state) => state.accessToken);
    const setToken = useAccessTokenStore((state) => state.setAccessToken);
    const setUser = useUserStore((state) => state.setUser);
    useEffect(() => {
      if (isLoggedIn) {
        const checkTokenStatus = async () => {
          const { data } = await checkToken();
          console.log(data);
          if (data.message !== "Token valid") {
            setToken(null);
            setUser(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user-srifoton");
            router.replace("/");
          } else {
            const { data } = await doRefreshToken();
            setToken(data.token);
            setUser(data.user);
          }
        };
        checkTokenStatus();
        router.replace("/dashboard");
      }
    }, []);
    return isLoggedIn ? <LoadingScreen /> : <WrappedComponent />;
  };
  return WithRedirect;
};

export default RedirectIfLoggedIn;
