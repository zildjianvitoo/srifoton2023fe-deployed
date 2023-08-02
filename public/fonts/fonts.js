import localFont from "next/font/local";
import { Poppins, Outfit } from "next/font/google";

export const outfit = Outfit({ subsets: ["latin"] });

export const ethnocentric = localFont({
  src: "./Ethnocentric-Rg.ttf",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
