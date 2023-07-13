import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";

const RedirectIfLoggedIn = (WrappedComponent) => {
  const WithRedirect = () => {
    const router = useRouter();
    const isLoggedIn = useUserStore((state) => state.user);
    useEffect(() => {
      if (isLoggedIn) {
        router.replace("/dashboard");
      }
    }, [isLoggedIn, router]);
    return isLoggedIn ? null : <WrappedComponent />;
  };
  return WithRedirect;
};

export default RedirectIfLoggedIn;
