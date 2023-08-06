import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import NoSSR from "../NoSSR";

const RequireLogin = (WrappedComponent) => {
  const WithAuthentication = () => {
    const router = useRouter();
    const isLoggedIn = useUserStore((state) => state.user);
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
