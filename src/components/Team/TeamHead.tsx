import { useI18n } from "@/hooks/useI18n";
import Head from "next/head";

export const TeamHead = () => {
  const {
    team: { head },
  } = useI18n();
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{head.title}</title>
      <meta key={"title"} name="title" content={head.title} />
      <meta key={"description"} name="description" content={head.description} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta key={"og-title"} property="og:title" content={head.title} />
      <meta key={"og-description"} property="og:description" content={head.description} />

      <meta key={"twitter-title"} property="twitter:title" content={head.title} />
      <meta key={"twitter-description"} property="twitter:description" content={head.description} />
    </Head>
  );
};
