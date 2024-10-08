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
    customers: string;
    pricing: string;
    faq: string;
    benefits: string;
    blog: string;
  };
  blog: {
    blog: string;
    moreInfo: string;
  }
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
      description: string;
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
    showcase: {
      description: string;
      testimonials: {
        imgUrl: string;
        title: string;
        testimonial: string;
        author: string;
        occupation: string;
      }[];
    };
    developmentProcess: {
      title: string;
      description: string;
      steps: {
        iconUrl: string;
        title: string;
        subtitle: string;
        text: string;
      }[];
    };
    callToAction: {
      firstSentence: string;
      secondSentence: string;
      buttonLabel: string;
    };
    pricing: {
      title: string;
      description: string;
      cards: {
        title: string;
        description: string;
        price: string;
        buttonLabel: string;
        includes: string;
        labels: string[];
      }[];
    };
    faq: {
      title: string;
      description: string;
      questions: { title: string; answer: string[] }[];
    };
  };
  team: {
    title: string;
    titleGradient: string;
    subtitle: string;
    head: {
      title: string;
      description: string;
    };
    members: {
      imgUrl: string;
      name: string;
      role: string;
      bio: string;
      skillset: string[];
    }[];
  };

  success: {
    title: string;
    description: string;
    imgAlt: string;
  };
}
