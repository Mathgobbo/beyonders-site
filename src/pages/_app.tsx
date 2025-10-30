import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainHead } from "@/components/MainHead";
import "@/styles/globals.css";
import { Inter, Poppins } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHead />
      <main>
        {/* GTAG  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRT8W847"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <LazyMotion features={domAnimation}>
          <main
            className={`${poppins.variable} ${inter.variable}  bg-main-black`}
          >
            <Header />
            <Component {...pageProps} />
            <Analytics />
            <Footer />
          </main>
        </LazyMotion>

        {/* Vbout script tag */}
        <Script
          id="vbout-tag"
          dangerouslySetInnerHTML={{
            __html: ` 
            /* embed code starts */
            var _vbset = _vbset || [];
            _vbset.push(['_account', 'VBT-05131-15326']);
            _vbset.push(['_domain', 'https://beyonders.agency']);

            (function() {
              var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
              vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
            })();
            /* embed code ends */ 
            `,
          }}
        />
      </main>
    </>
  );
}
