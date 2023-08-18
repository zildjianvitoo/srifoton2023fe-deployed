import Navbar from "@/components/Navbar";
import HydrationContext from "@/context/HydrationContext";
import "@/styles/globals.css";
import { outfit, poppins } from "@/public/fonts/fonts";
import { ThemeProvider, useTheme } from "next-themes";
import NextNProgress from "nextjs-progressbar";

import Head from "next/head";
import Spinner from "@/components/atoms/Spinner";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Website Srifoton yang digunakan untuk para calon peserta yang ingin mengikuti kompetisi atau seminar SRIFOTON 2023 "
        />
        <meta name="keywords" content="Seminar, Kompetisi, Srifoton" />
        <meta name="author" content="IT LEAD DEVELOPER TEAM SRIFOTON 2023" />
        <link rel="icon" href="/assets/logo-srifoton2023.svg" />
      </Head>
      {/* <HydrationContext> */}
      <ThemeProvider
        attribute="class"
        value={theme}
        enableSystem={false}
        defaultTheme="dark"
      >
        <NextNProgress color="linear-gradient(to right, #FC39FC, #337EF0)" />
        <div className={` ${poppins.variable} ${outfit.className}`}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      {/* </HydrationContext> */}
    </>
  );
}
