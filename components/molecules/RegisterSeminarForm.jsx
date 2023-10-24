import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import InputDropdown from "@/components/atoms/InputDropdown";
import InputFile from "@/components/atoms/InputFile";
import InputForm from "@/components/atoms/InputForm";
import InputRadio from "@/components/atoms/InputRadio";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { seminarFormRules } from "@/utils/formRules";
import { doSeminarRegistration } from "@/utils/api";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/store/userStore";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Modal from "../atoms/Modal";
import useModal from "@/hooks/useModal";
import { useRouter } from "next/router";

export default function RegisterSeminarForm() {
  const [proof, setProof] = useState(null);
  const [isError, setError] = useState(false);
  const [errorMessageProof, setErrorMessageProof] = useState("");
  const { showModal, setShowModal, modalMessage, setModalMessage } = useModal();

  const { user } = useUserStore();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      name: user?.name,
      email: user?.email,
      college: user?.college,
      nim: user?.nim,
      phoneNumber: user?.phone_number,
    },
  });
  const { errors, isSubmitting, submitCount } = formState;

  const router = useRouter();

  useEffect(() => {
    const showModalNotVerified = () => {
      if (user) {
        if (submitCount > 0 && !user.email_verified_at) {
          document.getElementById("my_modal_2").showModal();
        }
      }
    };
    showModalNotVerified();
    console.log(submitCount);
  }, [submitCount]);

  const onSubmitHandler = async (formValue) => {
    if (!user) {
      toast.error("Anda harus login terlebih dahulu");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
      return;
    }
    if (!proof) {
      setErrorMessageProof("Bukti pembayaran tidak boleh kosong");
      return;
    }
    if (user.registered.seminar) {
      toast.error("Email ini sudah terdaftar pada seminar");
      return;
    }
    setErrorMessageProof("");
    const {
      name,
      email,
      nim,
      college,
      phoneNumber,
      seminarType,
      paymentMethod,
    } = formValue;
    try {
      const { data } = await doSeminarRegistration({
        name,
        email,
        nim,
        college,
        phone_number: phoneNumber,
        type: seminarType,
        proof,
        payment_method: paymentMethod,
      });
      toast.success("Berhasil daftar Seminar");
      setError(false);
      setModalMessage("Pendaftaran berhasil");
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setShowModal(true);
      setError(true);
      if (error instanceof AxiosError) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Terjadi kesalahan");
      }
    }
  };

  return (
    <>
      <form
        className={`w-full z-10 relative`}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
          <div className="flex flex-col">
            <InputForm
              labelFor="name"
              labelText={"Nama"}
              placeholder={"Contoh: Rizky"}
              type={"text"}
              register={register}
              rules={seminarFormRules.name}
            />
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"email"}
              labelText={"Email"}
              placeholder={"Contoh: srifoton2023@gmail.com"}
              type={"email"}
              register={register}
              rules={seminarFormRules.email}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"college"}
              labelText={"Instansi"}
              placeholder={"Contoh: Universitas Sriwijaya"}
              type={"text"}
              register={register}
              rules={seminarFormRules.college}
            />
            {errors.college && (
              <ErrorMessage message={errors.college.message} />
            )}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"nim"}
              labelText={"NIM/NISN (optional)"}
              placeholder={"Contoh: 09021382227140"}
              type={"text"}
              register={register}
              rules={seminarFormRules.nim}
            />
            {errors.nim && <ErrorMessage message={errors.nim.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"phoneNumber"}
              labelText={"No Hp"}
              placeholder={"Contoh: 08123456789"}
              type={"text"}
              register={register}
              rules={seminarFormRules.phoneNumber}
            />
            {errors.phoneNumber && (
              <ErrorMessage message={errors.phoneNumber.message} />
            )}
          </div>
          <InputDropdown
            seminarPage
            errors={errors.paymentMethod}
            {...register("paymentMethod", seminarFormRules.paymentMethod)}
          />
          <div className="flex flex-col">
            <label className="text-lg font-medium">Pilih Tipe Seminar</label>

            <div className="flex gap-8">
              <InputRadio
                labelFor={"offline"}
                labelText={"Offline"}
                value={"offline"}
                {...register("seminarType", seminarFormRules.seminarType)}
              />
              <InputRadio
                labelFor={"online"}
                labelText={"Online"}
                value={"online"}
                {...register("seminarType", seminarFormRules.seminarType)}
              />
            </div>
            {errors.seminarType && (
              <ErrorMessage message={errors.seminarType.message} />
            )}
          </div>

          <InputFile
            labelFor={"proof"}
            labelText={"Bukti Pembayaran"}
            proof={proof}
            setProof={setProof}
            errorMessage={errorMessageProof}
          />

          <Button
            variant={"submitButton"}
            style={"w-3/4 mx-auto mt-2 lg:mt-4"}
            loading={isSubmitting}
          >
            Daftar
          </Button>
        </div>
        {showModal && (
          <Modal
            message={modalMessage}
            showModal={showModal}
            setShowModal={setShowModal}
            messageHeader={isError ? "Gagal" : "Berhasil"}
            redirect={isError ? false : true}
            redirectTo={"/dashboard/kegiatan/seminar"}
            buttonRedirectMessage={"Pergi Ke Halaman Kegiatan"}
          />
        )}
      </form>
    </>
  );
}
