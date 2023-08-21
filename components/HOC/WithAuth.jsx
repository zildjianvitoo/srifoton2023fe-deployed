import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import NoSSR from "../NoSSR";
import { toast } from "react-toastify";
import LoadingScreen from "../atoms/LoadingScreen";

const RequireLogin = (WrappedComponent) => {
  const WithAuthentication = () => {
    const router = useRouter();
    const isLoggedIn = useAccessTokenStore((state) => state.accessToken);
    useEffect(() => {
      if (!isLoggedIn) {
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
