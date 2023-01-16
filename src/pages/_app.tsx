import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-poppins" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <main className={`${poppins.className}`}>
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
        </LazyMotion>
      </main>
    </>
  );
}
