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
  }
};
