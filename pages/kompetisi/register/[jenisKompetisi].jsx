import { useEffect, useState } from "react";
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

export default function DaftarKompetisi() {
  const [proof, setProof] = useState(null);
  const [errorMessageProof, setErrorMessageProof] = useState("");
  const [idCard1, setIdCard1] = useState(null);
  const [errorMessageIdCard1, setErrorMessageIdCard1] = useState("");
  const [idCard2, setIdCard2] = useState(null);
  const [idCard3, setIdCard3] = useState(null);

  const router = useRouter();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const jenisKompetisi = router.query.jenisKompetisi.split("-").join(" ");

  const onSubmitHandler = async (formValue) => {
    console.log(formValue);
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
        const { data } = await doWebDevelopmentRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });
        console.log(data);
      } else if (jenisKompetisi === "competitive programming") {
        const { data } = await doCompetitiveProgrammingRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });
        console.log(data);
      } else if (jenisKompetisi === "uiux design") {
        const { data } = await doUiUXRegistration({
          ...formValue,
          proof,
          idCard1,
          idCard2,
          idCard3,
        });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutMain>
      <div className="p-8 lg:px-24">
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
            >
              Submit
            </Button>
          </form>
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
