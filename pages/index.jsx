import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Jumbotron from "@/components/organisms/LandingPage/Jumbotron";
import Intro from "@/components/organisms/LandingPage/Intro";
import Benefit from "@/components/organisms/LandingPage/Benefit";
import Timeline from "@/components/organisms/LandingPage/Timeline";
import Sponsor from "@/components/organisms/LandingPage/Sponsor";
import LayoutMain from "@/components/LayoutMain";
import Modal from "@/components/atoms/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { message } = router.query;

  useEffect(() => {
    if (message) {
      setShowModal(true);
    }
    const modalTimeOut = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => clearTimeout(modalTimeOut);
  }, [message]);

  return (
    <>
      <Head>
        <title>SRIFOTON | Home</title>
        <style>
          {`
            h1 {
              font-family: "Ethnocentric", arial;
            }
          `}
        </style>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <Intro />
        <Timeline />
        <Benefit />
        <Sponsor />
        <div className="mb-96 bg-gradient-to-r"></div>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            message={message}
          />
        )}
      </LayoutMain>
    </>
  );
}
