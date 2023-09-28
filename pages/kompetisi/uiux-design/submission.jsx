import LayoutMain from "@/components/LayoutMain";
import NoSSR from "@/components/NoSSR";
import Button from "@/components/atoms/Button";
import RequireLogin from "@/components/HOC/WithAuth";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import InputForm from "@/components/atoms/InputForm";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import { ethnocentric } from "@/public/fonts/fonts";
import { doUiUxDesignSubmission } from "@/utils/api";
import { submissionFormRules } from "@/utils/formRules";
import { AxiosError } from "axios";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "@/utils/axiosInstance";
import { getToken } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";

function getAccessToken() {
  const token = getToken();
  return token;
}

function Submission() {
  const [submissionFile, setSubmissionFile] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const { theme } = useTheme();
  const { user } = useUserStore();
  const [wrongType, setWrongType] = useState(false);
  const router = useRouter();

  console.log(user);

  const isAlreadySubmitSubmission =
    user.registered.competitions.uiux_design.submission;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmissionFileChangeHandler = (e) => {
    const selectedFile = e.target.files[0];

    const ALLOWED_TYPES = [
      "zip",
      "application/octet-stream",
      "application/zip",
      "application/x-zip",
      "application/x-zip-compressed",
    ];

    if (selectedFile && ALLOWED_TYPES.includes(selectedFile.type)) {
      setWrongType(false);
      setSubmissionFile(selectedFile);
      toast.success("Berhasil mengunggah file");
    } else if (!selectedFile) {
      return;
    } else if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setWrongType(true);
      toast.error("Format file tidak didukung");
      setSubmissionFile(null);
    }
  };

  const onSubmitHandler = async (formValue) => {
    if (isAlreadySubmitSubmission) {
      toast.error("Anda sudah mengumpul submission");
      return;
    }
    const { submissionTitle } = formValue;
    try {
      const formData = new FormData();
      formData.append("title", submissionTitle);
      formData.append("submission", submissionFile);
      const { data, status } = await api.post(
        "/api/uiux-design/submission",
        formData,
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
          onUploadProgress: (progressEvent) => {
            if (progressEvent) {
              const percentComplete =
                (progressEvent.loaded / progressEvent.total) * 100;
              setUploadProgress(percentComplete);
            }
          },
        }
      );
      if (status !== 200) {
        throw new Error(data.message);
      }
      toast.success("Berhasil mengunggah karya");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Terjadi kesalahan, silahkan coba lagi");
      }
    }
  };

  return (
    <>
      <Head>
        <title>SRIFOTON | UI/UX Design Submission</title>
      </Head>
      <LayoutMain>
        <LayoutCredentials id={"submission-uiux-design"} submissionPage>
          <form
            className="w-full lg:w-1/2"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="flex flex-col gap-8 lg:mt-6 lg:flex-row">
              <NoSSR>
                <div
                  className={`w-full   mt-[14px] py-8 px-3 lg:px-8  ${
                    theme === "light"
                      ? "gradient-border"
                      : "gradient-border-dark"
                  }`}
                >
                  <div className="relative z-10 flex flex-col gap-6">
                    <h1
                      className={` text-center text-xl pr-5 xs:pr-0 md:text-3xl lg:text-2xl mx-auto  xl:text-4xl font-black lg:mb-8 ${ethnocentric.className}  mt-5`}
                    >
                      <span
                        className={`  text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton `}
                      >
                        UI/UX
                      </span>{" "}
                      <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px]">
                        DESIGN
                      </span>
                    </h1>
                    <div className="flex flex-col ">
                      <InputForm
                        labelFor={"submissionTitle"}
                        labelText={"Judul Karya"}
                        type={"text"}
                        placeholder={"Contoh: WeCare"}
                        register={register}
                        rules={submissionFormRules.submissionTitle}
                      />
                      {errors.submissionTitle && (
                        <ErrorMessage
                          message={errors.submissionTitle.message}
                        />
                      )}
                    </div>
                    <div className="flex flex-col text-lg lg:text-xl font-medium text-[#494B7C] dark:text-white gap-1">
                      <label htmlFor="work-file">
                        Unggah Karya <span className="text-[#F41421]">*</span>
                      </label>
                      <input
                        id="work-file"
                        type="file"
                        className="w-full font-poppins font-normal file-input file-input-bordered border-[#7B7B7B] dark:border-[#E0E0E0]"
                        accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                        onChange={onSubmissionFileChangeHandler}
                      />
                      {isSubmitting && (
                        <div className="relative flex items-center">
                          <progress
                            className="w-full h-3 mt-2 progress"
                            value={uploadProgress}
                            max="100"
                          >
                            {" "}
                          </progress>
                          <p
                            className="absolute text-[13px] top-[0.5px]
                           left-1/2"
                          >
                            {uploadProgress.toFixed(2)} %
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end mt-20">
                      <Button
                        variant={"submitButton"}
                        style={"w-3/5 lg:w-2/5 !bg-blue-srifoton"}
                        loading={isSubmitting}
                      >
                        {"Kumpul Karya"}
                      </Button>
                    </div>
                  </div>
                </div>
              </NoSSR>
            </div>
          </form>
        </LayoutCredentials>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(Submission);
