import { locales } from "@/locale";
import { useRouter } from "next/router";

export const useI18n = () => {
  const router = useRouter();
  const dictionary = locales[router.locale as "en" | "pt"] || locales[router.defaultLocale as "pt"];
  return dictionary;
};
