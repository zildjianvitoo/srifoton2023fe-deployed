import Navbar from "@/components/Navbar";
import HydrationContext from "@/context/HydrationContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import Head from "next/head";
import { getToken } from "@/store/tokenStore";

const outfit = Outfit({ subsets: ["latin"] });

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
      <HydrationContext>
        <ThemeProvider attribute="class" value={theme} enableSystem={false}>
          <div className={outfit.className}>
            <Navbar />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </HydrationContext>
    </>
  );
}
