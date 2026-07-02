export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Руководства по продуктам, FAQ, руководства и загрузки приложений — на docs.openterface.com.",
    "homeMessage": "Руководства, FAQ, загрузки приложений и материалы по продуктам — на docs.openterface.com.",
    "linkLabel": "Открыть документацию ↗",
    "productMessage": "Подробные характеристики, руководства по настройке и FAQ — на docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Будьте в курсе",
    "heading": "Первыми получайте новости KVM-GO, KeyMod и Mini-KVM",
    "description": "Запуски продуктов, прошивки и практические IT-советы — не чаще одного раза в месяц. Без спама, только полезные новости от команды Openterface.",
    "benefitCrowdfunding": "Ранний доступ к краудфандингу и предзаказам",
    "benefitGuides": "Руководства по настройке и release notes приложений",
    "benefitUnsubscribe": "Отписка в один клик в любое время",
    "submitLabel": "Подписаться на обновления",
    "namePlaceholder": "Имя (необязательно)",
    "emailPlaceholder": "Адрес электронной почты *",
    "footnote": "Не более одного письма в месяц. Отписка в любое время. Вопросы: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Ультракомпактные решения KVM-over-USB для IT-специалистов.",
    "productsHeading": "Продукты",
    "keymodSeries": "Серия KeyMod",
    "kvmGoSeries": "Серия KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "Аксессуары",
    "resourcesHeading": "Ресурсы",
    "videos": "Видео",
    "faqs": "FAQ",
    "apps": "Приложения",
    "support": "Поддержка",
    "newsletterTitle": "Рассылка",
    "newsletterDescription": "Ежемесячные обновления о продуктах, прошивках и советах по KVM.",
    "newsletterSubmit": "Подписаться",
    "newsletterNamePlaceholder": "Имя",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Отписка в любое время.",
    "copyright": "Openterface. KVM-over-USB с открытым исходным кодом.",
    "privacy": "Конфиденциальность",
    "terms": "Условия",
    "newsletterLink": "Newsletter"
  },
  "productLanding": {
    "downloadApp": "Скачать приложение",
    "backers": "Спонсоры",
    "theProblem": "Проблема",
    "theSolution": "Решение",
    "hwSoftwareTitle": "Аппаратное + программное обеспечение",
    "hwSoftwareSubtitle": "Продукты Openterface лучше всего работают с нашими open-source host-приложениями.",
    "hardware": "Аппаратура",
    "software": "ПО",
    "swFallback": "Подробности совместимости аксессуаров — в TxA Shop.",
    "keySpecs": "Ключевые характеристики",
    "useCases": "Сценарии использования",
    "documentation": "Документация",
    "ctaTitle": "Готовы начать?",
    "ctaSubtitle": "Закажите оборудование и скачайте приложение Openterface для вашей платформы."
  },
  "productSubscribe": {
    "kicker": "Stay in the loop",
    "heading": "Get {product} launch & firmware updates",
    "description": "Be first to know about pre-orders, firmware releases, and setup tips for this product — at most one email per month.",
    "benefitCrowdfunding": "Early access to crowdfunding and pre-order windows",
    "benefitGuides": "Setup guides and app release notes",
    "benefitUnsubscribe": "Unsubscribe anytime with one click",
    "submitLabel": "Subscribe for updates",
    "namePlaceholder": "Name (optional)",
    "emailPlaceholder": "Email address *",
    "footnote": "At most one email per month. Unsubscribe anytime."
  }
};
