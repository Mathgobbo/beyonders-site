import { useI18n } from "@/hooks/useI18n";

export const Footer = () => {
  const { footer } = useI18n();
  return (
    <footer className="w-full p-5 text-center uppercase bg-black/60 text-main-white">
      <p>
        {footer.companyName} | 2023 {footer.cnpj}
      </p>
    </footer>
  );
};
