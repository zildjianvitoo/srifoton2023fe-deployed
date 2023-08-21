import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import { checkToken, doRefreshToken } from "@/utils/api";
import LoadingScreen from "../atoms/LoadingScreen";

const RedirectIfLoggedIn = (WrappedComponent) => {
  const WithRedirect = () => {
    const router = useRouter();
    const isLoggedIn = useAccessTokenStore((state) => state.accessToken);
    const setToken = useAccessTokenStore((state) => state.setAccessToken);
    useEffect(() => {
      if (isLoggedIn) {
        const checkTokenStatus = async () => {
          const { data } = await checkToken();
          if (data.message !== "Token valid") {
            const { data } = await doRefreshToken();
            setToken(data.token);
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
