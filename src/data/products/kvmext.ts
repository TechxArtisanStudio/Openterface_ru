import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "Расширение uConsole KVM",
  slogan: "Мощность KVM для вашего uConsole",
  subtitle: "Превратите портативный uConsole в полноценный KVM-терминал.",
  status: 'oshwa',
  description:
    "Аппаратное расширение, добавляющее функционал KVM-over-USB к Clockwork uConsole. Идеально для мобильной IT-работы со встроенной клавиатурой и дисплеем.",
  seoDescription:
    "Расширение uConsole KVM добавляет KVM-over-USB к портативному компьютеру Clockwork uConsole.",
  keywords:
    "uConsole, расширение KVM, портативный KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/cover/uconsole.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/uconsole.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Узнать больше",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Портативным консолям не хватает встроенного KVM для безмониторных устройств",
    "Полевым инженерам нужно одно устройство для всех задач",
  ],
  solutions: [
    "Плата расширения в родном форм-факторе uConsole",
    "Полный стек Openterface KVM на карманном устройстве",
  ],
  hwFeatures: [
    { title: "Родной для uConsole", description: "Разработан специально для Clockwork uConsole." },
    { title: "Компактная печатная плата", description: "Устанавливается внутри корпуса uConsole." },
  ],
  swFeatures: [
    { title: "Приложения Openterface", description: "То же проверенное ПО, что и для Mini-KVM и KVM-GO." },
    { title: "Руководства по настройке", description: "Пошаговые инструкции по установке оборудования и ПО." },
  ],
  specs: [
    { label: "Совместимость", value: "Clockwork uConsole" },
    { label: "Сертификация", value: "Сертифицировано OSHWA" },
  ],
  useCases: [
    "Портативный инструмент для дата-центров",
    "Мейкерство и домашняя лаборатория в пути",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Установка оборудования", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Настройка ПО", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Как подключить", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "Часто задаваемые вопросы", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
