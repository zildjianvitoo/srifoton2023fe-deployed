import React from "react";

export default function LayoutCredentials({ loginPage, children }) {
  return (
    <section
      id="register-seminar"
      className={`relative  mt-24 mb-10 ${loginPage && "mt-36 lg:mt-28"}  `}
    >
      <div className="p-10 lg:p-[72px]">
        <div
          className="absolute inset-0 w-[90%] md:w-[85%] lg:w-4/5 h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[28px] lg:rounded-[50px] shadow-lg p-4"
          style={{
            backgroundImage: "url(assets/Seminar/register-seminar-bgimg.svg)",
          }}
        />
        <div className="mx-auto flex md:w-[85%] lg:w-4/5  gap-6 ">
          {children}
        </div>
      </div>
    </section>
  );
}