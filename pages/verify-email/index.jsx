import Image from "next/image";
import React, { useState } from "react";
import LayoutMain from "@/components/LayoutMain";
import Button from "@/components/atoms/Button";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import { useTheme } from "next-themes";
import { sendEmailVerification } from "@/utils/api";
import Modal from "@/components/atoms/Modal";
import useModal from "@/hooks/useModal";
import Head from "next/head";

export default function VerifyEmail({ email }) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { showModal, setShowModal, modalMessage, setModalMessage } = useModal();
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/CredentialsPage/verifyemail-img.svg"
      : "/assets/CredentialsPage/verifyemail-imgdark.svg";

  const onClickHandler = async () => {
    try {
      setLoading(true);
      const { data } = await sendEmailVerification({ email });
      setError(false);
      setModalMessage("Email verifikasi berhasil dikirimkan");
    } catch (error) {
      setError(true);
      setModalMessage(
        `Email verifikasi gagal dikirimkan, ${error.response.data.message}`
      );
    } finally {
      setShowModal(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>SRIFOTON | Verify Email</title>
      </Head>
      <LayoutMain>
        <LayoutCredentials id={"verify-email-section"} notUseLogo>
          <div className="z-10 flex flex-col items-center justify-center w-full pb-4 lg:pb-2 gap-9">
            <Image
              width={240}
              height={240}
              src={imageSource}
              alt="verify email page icon"
            />
            <h1 className="mt-2 text-4xl text-[#494B7C] lg:text-[44px] font-bold mx-auto text-center dark:text-white">
              Verifikasi Email Anda
            </h1>
            <p className="text-lg text-[#494B7C] dark:text-[#E5EEFF] lg:w-[85%]">
              Terima kasih sudah mendaftarkan akun untuk SRIFOTON 2023. Lakukan
              verifikasi e-mail yang sudah anda isikan sebelumnya untuk
              melanjutkan pendaftaran akun, anda dapat menekan tombol verifikasi
              e-mail di bawah.
            </p>
            <Button
              variant={"submitButton"}
              style={"w-full lg:w-1/5 py-3"}
              onClickHandler={() => onClickHandler()}
              loading={isLoading}
            >
              Verifikasi Email
            </Button>
            <p className="text-lg text-[#494B7C] dark:text-[#E5EEFF] lg:w-[85%]">
              Jika anda belum mendapat e-mail verifikasi, mohon periksa kembali
              pada menu spam atau kami dapat mengirimkan ulang{" "}
              <span
                className="text-[#2E7BEF] dark:text-[#E924E8] underline font-semibold cursor-pointer"
                onClick={onClickHandler}
              >
                disini.
              </span>
            </p>
          </div>
          {showModal && (
            <Modal
              message={modalMessage}
              showModal={showModal}
              setShowModal={setShowModal}
              messageHeader={isError ? "Gagal" : "Berhasil"}
              redirect={isError ? false : true}
              redirectTo={"/dashboard"}
              buttonRedirectMessage={"Pergi Ke Halaman Dashboard"}
            />
          )}
        </LayoutCredentials>
      </LayoutMain>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { email } = query;

  if (!email) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }
  return {
    props: {
      email,
    },
  };
};
