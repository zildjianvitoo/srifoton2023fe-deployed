import Image from "next/image";

export default function LayoutCredentials({
  loginPage,
  authPage,
  children,
  id,
}) {
  return (
    <section
      id={id}
      className={`relative mt-32 lg:mt-28 mb-10 ${
        authPage && "!mt-10 md:mt-16 lg:mt-24"
      }  `}
    >
      <div className="p-10 sm:p-20 lg:p-[50px] xl:p-[65px]">
        <div
          className={`absolute inset-0 w-[90%] md:w-[85%]  ${
            authPage ? "lg:w-full" : "lg:w-4/5"
          } h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[25px]  shadow-lg `}
        >
          <div className="relative h-full rounded-[25px] ">
            <Image
              src="/assets/Seminar/register-seminar-bgimg.svg"
              alt="Background Image"
              fill
              className="object-cover rounded-[25px] "
            />
          </div>
        </div>
        <div
          className={` ${
            !authPage && "mx-auto md:w-[85%] lg:w-4/5"
          } flex  gap-6 `}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
