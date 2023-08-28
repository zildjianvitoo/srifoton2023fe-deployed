import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { checkToken, doRefreshToken } from "@/utils/api";
import LoadingScreen from "../atoms/LoadingScreen";

const RedirectIfLoggedIn = (WrappedComponent) => {
  const WithRedirect = () => {
    const router = useRouter();

    const { accessToken: isLoggedIn } = useAccessTokenStore();
    const { user } = useUserStore();
    useEffect(() => {
      if (isLoggedIn && user) {
        router.replace("/");
      }
    }, []);
    return isLoggedIn ? <LoadingScreen /> : <WrappedComponent />;
  };
  return WithRedirect;
};

export default RedirectIfLoggedIn;
