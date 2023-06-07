import Navbar from "@/components/Navbar";
import HydrationContext from "@/context/HydrationContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";

const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <HydrationContext>
      <ThemeProvider attribute="class" value={theme} enableSystem={false}>
        <div className={outfit.className}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </HydrationContext>
  );
}
