import LayoutMain from "@/components/LayoutMain";
import NoSSR from "@/components/NoSSR";
import Button from "@/components/atoms/Button";

import ErrorMessage from "@/components/atoms/ErrorMessage";
import InputForm from "@/components/atoms/InputForm";

import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import { ethnocentric } from "@/public/fonts/fonts";
import { doWebDevelopmentSubmission } from "@/utils/api";
import { submissionFormRules } from "@/utils/formRules";
import { AxiosError } from "axios";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Submission() {
  const { theme } = useTheme();
  const [submissionFile, setSubmissionFile] = useState("");
  const [wrongType, setWrongType] = useState(false);

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
    try {
      const { data } = await doWebDevelopmentSubmission({
        title: formValue.submissionTitle,
        submission: submissionFile,
      });
      toast.success("Berhasil mengunggah karya");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Terjadi kesalahan, silahkan coba lagi");
      }
    }
  };

  return (
    <>
      <Head>
        <title>SRIFOTON | Web Development Submission</title>
      </Head>
      <LayoutMain>
        <LayoutCredentials id={"submission-web-development"} submissionPage>
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
                        WEB
                      </span>{" "}
                      <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px]">
                        DEVELOPMENT
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
                    </div>
                    <div className="flex justify-end mt-20">
                      <Button
                        variant={"submitButton"}
                        style={"w-3/5 lg:w-2/5 !bg-blue-srifoton"}
                        loading={isSubmitting}
                      >
                        Kumpul Karya
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
