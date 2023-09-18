import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",

});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const mont = Montserrat({
  variable: '--font-mont',
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900']
})