import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";
import NoSSR from "../NoSSR";

const RequireLogin = (WrappedComponent) => {
  const WithAuthentication = () => {
    const router = useRouter();
    const isLoggedIn = useAccessTokenStore((state) => state.accessToken);
    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/");
      }
    }, [isLoggedIn]);

    return isLoggedIn ? (
      <NoSSR>
        <WrappedComponent />
      </NoSSR>
    ) : null;
  };

  return WithAuthentication;
};

export default RequireLogin;
