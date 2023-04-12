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
      <meta property="og:url" content="https://beyonders.com.br" />
      <meta key={"og-title"} property="og:title" content={head.title} />
      <meta
        key={"og-description"}
        property="og:description"
        content={head.description}
      />
      <meta property="og:image" content="/beyonders-logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://beyonders.com.br" />
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
      <meta property="twitter:image" content="/beyonders-logo.png" />
    </Head>
  );
};
