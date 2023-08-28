import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import NoSSR from "../NoSSR";
import { toast } from "react-toastify";
import LoadingScreen from "../atoms/LoadingScreen";
import { useUserStore } from "@/store/userStore";
import { checkToken, doRefreshToken } from "@/utils/api";

const RequireLogin = (WrappedComponent) => {
  const WithAuthentication = () => {
    const router = useRouter();
    const {
      removeAccessToken,
      setAccessToken: setToken,
      accessToken: isLoggedIn,
    } = useAccessTokenStore();
    const { user, removeUser } = useUserStore();
    useEffect(() => {
      console.log(!!isLoggedIn);
      if (!isLoggedIn || !user) {
        toast.error("Anda harus login terlebih dahulu");
        router.replace("/");
      }
    }, []);

    return isLoggedIn ? (
      <NoSSR>
        <WrappedComponent />
      </NoSSR>
    ) : (
      <LoadingScreen />
    );
  };

  return WithAuthentication;
};

export default RequireLogin;
