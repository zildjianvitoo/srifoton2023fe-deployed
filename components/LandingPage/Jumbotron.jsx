import React from "react";

const Jumbotron = () => {
  return (
    <section
      id="#"
      className="relative h-[90vh] overflow-hidden bg-[#FCF2FF] dark:bg-[#02053E] lg:h-screen opacity-85 mt-16"
    >
      <div
        className="absolute inset-0 h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(assets/LandingPage/jumbotron-bgimg-dark.svg)",
        }}
      ></div>
    </section>
  );

  //Todo Import GambarBlur Saja,macawnya gambar baru
};

export default Jumbotron;
