import Navbar from "@/components/Navbar";
import HydrationContext from "@/context/HydrationContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <>
      <Head>
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
