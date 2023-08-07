import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccessTokenStore } from "@/store/tokenStore";

const RedirectIfLoggedIn = (WrappedComponent) => {
  const WithRedirect = () => {
    const router = useRouter();
    const isLoggedIn = useAccessTokenStore((state) => state.accessToken);
    useEffect(() => {
      if (isLoggedIn) {
        router.replace("/dashboard");
      }
    }, [isLoggedIn]);
    return isLoggedIn ? null : <WrappedComponent />;
  };
  return WithRedirect;
};

export default RedirectIfLoggedIn;
