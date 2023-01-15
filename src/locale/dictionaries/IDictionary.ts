export interface IDictionary {
  head: {
    title: string;
    description: string;
  };
  header: {
    showcase: string;
    team: string;
    services: string;
    contact: string;
  };
  footer: {
    companyName: string;
    cnpj: string;
  };
  home: {
    hero: {
      subtitle: string;
      titleLine1: string;
      titleGradientLine1: string;
      titleLine2: string;
      titleGradientLine2: string;
      text: string;
      buttonLabel: string;
    };
    services: {
      title: string;
      websiteTitle: string;
      websiteText: string;
      mobileAppsTitle: string;
      mobileAppsText: string;
      blockchainTitle: string;
      blockchainText: string;
    };
    contact: {
      title: string;
      subtitle1: string;
      subtitle2: string;
      namePlaceholder: string;
      messagePlaceholder: string;
      submitButtonLabel: string;
      mailSubject: string;
    };
  };
}
