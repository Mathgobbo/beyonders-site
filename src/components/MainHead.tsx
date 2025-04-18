/* eslint-disable @next/next/next-script-for-ga */
import { useI18n } from "@/hooks/useI18n";
import Head from "next/head";

export const MainHead = () => {
  const { head } = useI18n();
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{head.title}</title>
      <meta key={"title"} name="title" content={head.title} />
      <meta key={"description"} name="description" content={head.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://beyonders.agency" />
      <meta key={"og-title"} property="og:title" content={head.title} />
      <meta
        key={"og-description"}
        property="og:description"
        content={head.description}
      />
      <meta property="og:image" content="/beyonders-logo-new.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://beyonders.agency" />
      <meta
        key={"twitter-title"}
        property="twitter:title"
        content={head.title}
      />
      <meta
        key={"twitter-description"}
        property="twitter:description"
        content={head.description}
      />
      <meta property="twitter:image" content="/beyonders-logo-new.png" />

      {/* Google Logotipo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
      
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.beyonders.agency",
      "logo": "https://www.beyonders.agency/logo-full.webp"
    }
      `,
        }}
      ></script>

      {/* GTAG Setup*/}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KRT8W847');`,
        }}
      />
    </Head>
  );
};
