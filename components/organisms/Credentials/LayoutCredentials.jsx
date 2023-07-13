import Image from "next/image";

export default function LayoutCredentials({ loginPage, children, id }) {
  return (
    <section
      id={id}
      className={`relative mt-24 mb-10 ${loginPage && "mt-36 lg:mt-28"}  `}
    >
      <div className="p-10 lg:p-[72px]">
        <div className="absolute inset-0 w-[90%] md:w-[85%] lg:w-4/5 h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[28px] lg:rounded-[50px] shadow-lg ">
          <div className="relative h-full rounded-[28px] lg:rounded-[50px]">
            <Image
              src="/assets/Seminar/register-seminar-bgimg.svg"
              alt="Background Image"
              fill
              className="object-cover rounded-[28px] lg:rounded-[50px]"
            />
          </div>
        </div>
        <div className="mx-auto flex md:w-[85%] lg:w-4/5 gap-6 ">
          {children}
        </div>
      </div>
    </section>
  );
}
