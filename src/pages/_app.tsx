import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { MainHead } from "@/components/MainHead";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-poppins" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHead />
      <GoogleAnalytics />
      <main>
        <LazyMotion features={domAnimation}>
          <main className={`${poppins.className} bg-main-black`}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </LazyMotion>
      </main>
    </>
  );
}
