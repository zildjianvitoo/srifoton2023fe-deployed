import React from "react";
import FormFirstField from "../Kompetisi/DaftarKompetisi/FormFirstField";
import PaymentNote from "@/components/molecules/PaymentNote";

export default function RegisterSeminar() {
  return (
    <section id="register-seminar" className="relative mt-8 lg:mt-16">
      <div
        className="absolute inset-0 w-3/5 h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[50px]"
        style={{
          backgroundImage: "url(assets/Seminar/register-seminar-bgimg.svg)",
        }}
      />
      <div className="flex w-[55%] px-3 py-16 mx-auto rounded-[50px]">
        <h1 className="">Registrasi Sekarang</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <FormFirstField />
          <div className="flex flex-col w-full lg:mt-2 lg:w-1/2">
            <PaymentNote />
            <img className="hidden mt-6 lg:flex w-[80%] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
