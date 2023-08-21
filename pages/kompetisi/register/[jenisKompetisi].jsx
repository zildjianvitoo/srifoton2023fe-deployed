import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/atoms/Button";
import {
  FirstField,
  SecondField,
} from "@/components/organisms/Kompetisi/DaftarKompetisi";
import LayoutField from "@/components/organisms/Kompetisi/DaftarKompetisi/LayoutField";
import LayoutMain from "@/components/LayoutMain";
import { useForm } from "react-hook-form";
import {
  doWebDevelopmentRegistration,
  doCompetitiveProgrammingRegistration,
  doUiUXRegistration,
} from "@/utils/api";
import { useUserStore } from "@/store/userStore";
import Modal from "@/components/atoms/Modal";
import useModal from "@/hooks/useModal";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function DaftarKompetisi() {
  const [proof, setProof] = useState(null);
  const [errorMessageProof, setErrorMessageProof] = useState("");
  const [idCard1, setIdCard1] = useState(null);
  const [errorMessageIdCard1, setErrorMessageIdCard1] = useState("");
  const [idCard2, setIdCard2] = useState(null);
  const [idCard3, setIdCard3] = useState(null);
  const [isError, setError] = useState(false);
  const { showModal, setShowModal, modalMessage, setModalMessage } = useModal();

  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: user?.email,
      college: user?.college,
    },
  });

  const jenisKompetisi = router.query.jenisKompetisi.split("-").join(" ");

  const isUserRegisteredWebDev =
    user?.registered?.competitions?.web_development;
  const isUserRegisteredCP =
    user?.registered?.competitions?.competitive_programming;
  const isUserRegisteredUIUX = user?.registered?.competitions?.uiux_design;

  const onSubmitHandler = async (formValue) => {
    if (!user) {
      toast.error("Anda harus login terlebih dahulu");
      return;
    }
    if (!proof) {
      setErrorMessageProof("Bukti pembayaran harus diisi");
      window.scrollTo(0, 200);
      return;
    }
    if (!idCard1) {
      setErrorMessageIdCard1("Foto KTM harus diisi");
      window.scrollTo(0, 1200);
      return;
    }
    setErrorMessageProof("");
    setErrorMessageIdCard1("");
    try {
      if (jenisKompetisi === "web development") {
        if (isUserRegisteredWebDev) {
          toast.error("Anda sudah terdaftar pada cabang lomba ini");
          return;
        }
        const { data } = await doWebDevelopmentRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });

        setError(false);
        setModalMessage("Pendaftaran berhasil");
        setShowModal(true);
      } else if (jenisKompetisi === "competitive programming") {
        if (isUserRegisteredCP) {
          toast.error("Anda sudah terdaftar pada cabang lomba ini");
          return;
        }
        const { data } = await doCompetitiveProgrammingRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });
        setError(false);
        setModalMessage("Pendaftaran berhasil");
        setShowModal(true);
      } else if (jenisKompetisi === "uiux design") {
        if (isUserRegisteredUIUX) {
          toast.error("Anda sudah terdaftar pada cabang lomba ini");
          return;
        }
        const { data } = await doUiUXRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });

        setError(false);
        setModalMessage("Pendaftaran berhasil");
        setShowModal(true);
      }
    } catch (error) {
      setShowModal(true);
      setError(true);
      if (error instanceof AxiosError) {
        setModalMessage(error.response.data.message);
      }
      // else {
      //   setModalMessage("Terjadi kesalahan, silahkan coba lagi");
      // }
    }
  };

  return (
    <LayoutMain>
      <div className="p-8 lg:px-24 lg:mt-10">
        <LayoutField>
          <form
            className="z-10 flex flex-col"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FirstField
              jenisKompetisi={jenisKompetisi}
              register={register}
              errors={errors}
              errorMessageProof={errorMessageProof}
              setProof={setProof}
            />
            <SecondField
              register={register}
              errors={errors}
              setIdCard1={setIdCard1}
              errorMessageIdCard1={errorMessageIdCard1}
              setIdCard2={setIdCard2}
              setIdCard3={setIdCard3}
            />
            <Button
              variant={"submitButton"}
              style={"w-[87%] lg:w-3/5 mx-auto mt-6"}
              loading={isSubmitting}
            >
              Submit
            </Button>
          </form>
          {showModal && (
            <Modal
              message={modalMessage}
              showModal={showModal}
              setShowModal={setShowModal}
              messageHeader={isError ? "Gagal" : "Berhasil"}
              redirect={isError ? false : true}
              redirectTo={"/dashboard/kegiatan/kompetisi"}
              buttonRedirectMessage={"Pergi Ke Halaman Kegiatan"}
            />
          )}
        </LayoutField>
      </div>
    </LayoutMain>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { jenisKompetisi: "uiux-design" } },
      { params: { jenisKompetisi: "web-development" } },
      { params: { jenisKompetisi: "competitive-programming" } },
    ],
    fallback: false,
  };
};
