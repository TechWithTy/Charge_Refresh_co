import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const mont = localFont({
  src: './Montserrat-VariableFont_wght.ttf',
  variable: '--font-mont',
})