import { useI18n } from "@/hooks/useI18n";
import Head from "next/head";

export const MainHead = () => {
  const { head } = useI18n();
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{head.title}</title>
      <meta name="title" content={head.title} />
      <meta name="description" content={head.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://beyonders.com.br" />
      <meta property="og:title" content={head.title} />
      <meta property="og:description" content={head.description} />
      <meta property="og:image" content="/beyonders-logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://beyonders.com.br" />
      <meta property="twitter:title" content={head.title} />
      <meta property="twitter:description" content={head.description} />
      <meta property="twitter:image" content="/beyonders-logo.png" />
    </Head>
  );
};
