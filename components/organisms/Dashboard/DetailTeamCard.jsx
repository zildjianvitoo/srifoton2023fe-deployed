import React from "react";
import { ethnocentric } from "@/public/fonts/fonts";
import InputFile from "@/components/atoms/InputFile";
import InputForm from "@/components/atoms/InputForm";
import { useForm } from "react-hook-form";
import Image from "next/image";
import FormCardDetailMember1 from "@/components/molecules/FormCardDetailMember1";
import FormCardDetailMember2 from "@/components/molecules/FormCardDetailMember2";
import FormCardDetailMember3 from "@/components/molecules/FormCardDetailMember3";
import NoSSR from "@/components/NoSSR";
import dynamic from "next/dynamic";

function DetailTeamCard({ jenisKompetisi, team }) {
  const { register } = useForm({
    defaultValues: {
      teamName: team?.team_name,
      email: team?.email,
      college: team?.college,
      paymentMethod:
        team?.payment_method?.charAt(0).toUpperCase() +
        team?.payment_method?.slice(1),
      submissionTitle: team?.title,
      submission: team?.submission?.split("/")[6] || "BELUM MENGUMPUL KARYA!!",
      nim1: team?.nim1,
      name1: team?.name1,
      phoneNumber1: team?.phone_number1,
      instagram1: team?.instagram1,
      nim2: team?.nim2,
      name2: team?.name2,
      phoneNumber2: team?.phone_number2,
      instagram2: team?.instagram2,
      nim3: team?.nim3,
      name3: team?.name3,
      phoneNumber3: team?.phone_number3,
      instagram3: team?.instagram3,
    },
  });

  return (
    <>
      <section id="detail-tim-card" className="z-10">
        <div className="flex flex-col w-full gap-8 px-6 pt-6 lg:pt-12 lg:pb-0 lg:px-10">
          {/* <div
          className={` mt-3  lg:pb-[6px]  font-semibold  text-[20px] xs:text-2xl lg:text-5xl  field-header dark:field-header-dark mx-auto ${ethnocentric.className}`}
        > */}
          {jenisKompetisi === "competitive programming" ? (
            <>
              <h1
                className={` text-center text-xl pr-5 xs:pr-0 md:text-4xl mx-auto  lg:text-5xl font-black lg:mb-8 ${ethnocentric.className}  mt-5 flex flex-col`}
              >
                <span
                  className={`text-2xl  md:text-4xl lg:text-5xl  text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton `}
                >
                  Competitive
                </span>

                <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px] translate-y-2 ">
                  Programming
                </span>
              </h1>
            </>
          ) : jenisKompetisi === "uiux design" ? (
            <h1
              className={` text-center text-xl pr-5 xs:pr-0 md:text-4xl mx-auto  lg:text-5xl font-black lg:mb-8 ${ethnocentric.className}  mt-5`}
            >
              <span
                className={`text-2xl  md:text-4xl lg:text-5xl  text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton `}
              >
                {" "}
                UI/UX
              </span>{" "}
              <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px]">
                DESIGN
              </span>
            </h1>
          ) : (
            <h1
              className={` text-center text-xl pr-5 xs:pr-0 md:text-4xl mx-auto  lg:text-5xl font-black lg:mb-8 ${ethnocentric.className}  mt-5`}
            >
              <span
                className={`text-2xl  md:text-4xl lg:text-5xl  text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton `}
              >
                WEB
              </span>{" "}
              <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px]">
                DEVELOPMENT
              </span>
            </h1>
          )}
          {/* </div> */}
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
                <InputForm
                  labelFor="teamName"
                  labelText={"Nama Tim"}
                  type={"text"}
                  disabled
                  register={register}
                />

                <InputForm
                  labelFor={"email"}
                  labelText={"Email"}
                  type={"email"}
                  disabled
                  register={register}
                />

                <InputForm
                  labelFor={"college"}
                  labelText={"Universitas"}
                  type={"text"}
                  disabled
                  register={register}
                />
                <InputForm
                  labelFor={"paymentMethod"}
                  labelText={"Metode Pembayaran"}
                  type={"text"}
                  disabled
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-6 lg:w-1/2">
              <InputForm
                labelFor={"submissionTitle"}
                labelText={"Judul Karya"}
                type={"text"}
                disabled
                register={register}
              />

              <InputForm
                labelFor={"submission"}
                labelText={"Unggahan Karya"}
                type={"text"}
                disabled
                register={register}
              />

              <InputFile
                labelText={"Bukti Pembayaran"}
                labelFor={"proofDetailTeam"}
                imageReadOnly={team?.proof}
                detailTeamPage
              />
            </div>
          </div>
        </div>
      </section>
      <section id="daftar-kompetisi-2" className="z-10 mt-6 md:mt-10 lg:mt-16">
        <div className="z-10 flex flex-col w-full gap-8 px-6 py-6 lg:px-10 ">
          <div className="flex flex-col gap-8 mt-6">
            <NoSSR>
              <h1
                className={`text-2xl font-extrabold lg:text-[42px] text-center pt-1 pb-3 member-form-header dark:member-form-header-dark tracking-widest w-fit mx-auto ${ethnocentric.className}`}
              >
                Formulir Anggota
              </h1>

              <div className="flex flex-col w-full gap-8 lg:flex-row">
                <FormCardDetailMember1
                  key={"anggota-1"}
                  header={"Anggota 1"}
                  register={register}
                  proof={team?.id_card1}
                />
                <FormCardDetailMember2
                  key={"anggota-2"}
                  header={"Anggota 2"}
                  register={register}
                  proof={team?.id_card2}
                />
              </div>
              <div className="flex w-full gap-8">
                <FormCardDetailMember3
                  key={"anggota-3"}
                  header={"Anggota 3"}
                  register={register}
                  proof={team?.id_card3}
                />
                <div className="items-center justify-center hidden w-1/2 h-full m-auto lg:flex ">
                  <Image
                    src={"/assets/srifoton-decor.png"}
                    alt={"decoration"}
                    width={500}
                    height={470}
                    quality={100}
                  />
                </div>
              </div>
            </NoSSR>
          </div>
        </div>
      </section>
    </>
  );
}

export default dynamic(() => Promise.resolve(DetailTeamCard), {
  ssr: false,
});
