import animationData from "../public/error404.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="flex px-6 lg:mt-10 flex-col items-center justify-center w-full h-screen bg-[#FCF2FF] dark:bg-[#02053E] ">
      <Link href="/">
        <h1 className="text-3xl font-bold  lg:text-4xl text-center bg-gradient-to-r text-transparent from-[#FC39FC] to-[#428AE0] bg-clip-text ">
          SILAHKAN KEMBALI KE HALAMAN UTAMA
        </h1>
      </Link>
      <Lottie animationData={animationData} height={800} width={800} />
    </main>
  );
}
