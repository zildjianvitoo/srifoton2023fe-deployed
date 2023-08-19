import React, { useEffect, useState } from "react";
import LayoutMain from "../LayoutMain";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/router";

export default function LoadingScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  if (!loading) {
    return null;
  }
  return (
    <LayoutMain>
      <section className="flex items-center justify-center min-h-screen">
        <AiOutlineLoading3Quarters className="text-6xl text-pink-srifoton animate-spin" />
      </section>
    </LayoutMain>
  );
}
