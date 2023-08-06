import { useTheme } from "next-themes";
import PaymentNote from "@/components/molecules/PaymentNote";
import RegisterSeminarForm from "@/components/molecules/RegisterSeminarForm";
import NoSSR from "@/components/NoSSR";
import { ethnocentric } from "@/public/fonts/fonts";

export default function RegisterSeminar() {
  const { theme } = useTheme();

  return (
    <section id="register-seminar" className="relative mt-8 lg:mt-16">
      <div
        className="absolute inset-0 w-[90%] md:w-[85%] lg:w-4/5 h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[28px] lg:rounded-[50px] shadow-lg"
        style={{
          backgroundImage: "url(assets/Seminar/register-seminar-bgimg.svg)",
        }}
      />
      <div className="flex  flex-col w-[85%] md:w-[80%] lg:w-[74%] px-3 gap-4  py-10 lg:pb-16 mx-auto rounded-[50px]">
        <h1
          className={`pb-2 text-2xl md:text-4xl font-semibold tracking-wider text-center lg:text-5xl register-seminar-header dark:register-seminar-header-dark ${ethnocentric.className}`}
        >
          Daftarkan Dirimu!
        </h1>
        <div className="flex flex-col gap-8 lg:mt-6 lg:flex-row">
          <NoSSR>
            <div
              className={`w-full lg:w-4/5 mt-[14px] py-8 px-3 lg:px-8  ${
                theme === "light" ? "gradient-border" : "gradient-border-dark"
              }`}
            >
              <RegisterSeminarForm />
            </div>
          </NoSSR>

          <div
            className="flex flex-col w-full lg:mt-3  lg:w-[65%] h-fit gradient-border-pn
             dark:gradient-border-pn-dark"
          >
            <PaymentNote seminarPage />
          </div>
        </div>
      </div>
    </section>
  );
}
