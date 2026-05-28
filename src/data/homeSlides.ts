import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Превратите смартфон в мини-клавиатуру',
    description:
      'Компактный USB + Bluetooth HID-эмулятор, который превращает смартфон в портативную клавиатуру и тачпад. Plug-and-play, 100% open source. Идеально для киосков, Smart TV и быстрых рабочих сценариев.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Поддержать', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'О продукте', href: '/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Смартфон как мини-клавиатура',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Сверхкомпактный KVM на брелоке',
    description:
      'Создан, чтобы всегда быть под рукой и выручить в критический момент. KVM-over-USB нового поколения для быстрой IT-работы на месте.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Предзаказ', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'О продукте', href: '/kvmgo/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'KVM на брелоке',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'Компактное KVM-решение для профессионалов',
    description:
      'Компактное, функциональное open-source KVM-over-USB решение, которое упрощает ежедневные IT-задачи и диагностику.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Заказать', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'О продукте', href: '/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'KVM для профессионалов',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Дополните комплект качественными аксессуарами',
    description:
      'Необходимые аксессуары: видеоадаптеры, высокоскоростные кабели и решения для хранения. Улучшите опыт работы с Openterface профессиональным оборудованием.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: 'Купить', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Аксессуары', href: '/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Качественные аксессуары',
  },
];

export const homeSeo = {
  title: 'Openterface | Сверхкомпактные KVM-решения для IT-специалистов',
  description:
    'Openterface — сверхкомпактные KVM-over-USB решения: KVM-GO Series (размером с брелок), Mini-KVM Series и uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};
