import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";

const RequireLogin = (WrappedComponent) => {
  const WithAuthentication = () => {
    const router = useRouter();
    const isLoggedIn = useUserStore((state) => state.user);
    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/login");
      }
    }, [isLoggedIn]);

    return isLoggedIn ? <WrappedComponent /> : null;
  };

  return WithAuthentication;
};

export default RequireLogin;
