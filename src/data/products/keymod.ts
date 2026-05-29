import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Серия Openterface KeyMod",
  slogan: "Превратите смартфон в умную клавиатуру",
  subtitle: "Программируемое управление клавиатурой и мышью для IT-специалистов, профессионалов и геймеров.",
  status: 'pre-launch',
  description:
    "Компактный программируемый эмулятор USB + Bluetooth HID, превращающий ваш телефон в портативную консоль с клавиатурой и трекпадом. Построен на проверенном HID-ядре от Openterface Mini-KVM — подключи и работай, 100% открытый исходный код.",
  seoDescription:
    "Серия KeyMod превращает ваш телефон в портативную клавиатуру и трекпад. Эмулятор USB + Bluetooth HID с открытым исходным кодом, идеально подходит для киосков и быстрых рабочих сценариев.",
  keywords:
    "KeyMod, эмулятор HID, клавиатура для телефона, Bluetooth клавиатура, USB клавиатура, открытый исходный код",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Поддержать СЕЙЧАС",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Носить с собой полноразмерную клавиатуру для настройки киоска или ТВ неудобно",
    "Для рабочих сценариев нужны программируемые макросы в пути",
    "Многие HID-инструменты имеют закрытый код и ограниченные возможности настройки",
  ],
  solutions: [
    "Используйте смартфон как портативную клавиатуру и трекпад",
    "USB и Bluetooth HID в одном компактном устройстве",
    "100% открытый исходный код с поддержкой приложения Openterface",
  ],
  hwFeatures: [
    { title: "Компактный форм-фактор", description: "Помещается в карман для полевых работ и путешествий." },
    { title: "USB + Bluetooth", description: "Двойное подключение для максимальной совместимости с устройствами." },
    { title: "Открытое оборудование", description: "Прозрачная архитектура на базе проверенного HID-ядра Openterface." },
  ],
  swFeatures: [
    { title: "Приложение KeyMod", description: "Настройка макросов, раскладок и профилей геймпада прямо со смартфона." },
    { title: "Кроссплатформенность", description: "Работает с Android, iPadOS и настольными системами через приложения Openterface." },
    { title: "Открытый исходный код", description: "Полный стек доступен на GitHub для участия сообщества." },
  ],
  specs: [
    { label: "Подключение", value: "USB-C + Bluetooth LE" },
    { label: "Режимы HID", value: "Клавиатура, мышь, геймпад" },
    { label: "Лицензия", value: "Открытое оборудование и ПО" },
  ],
  useCases: [
    "Управление Smart TV и киосками",
    "Мобильные макросы для рабочих процессов",
    "Игровые и доступные конфигурации",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Функции", href: docsPath("/product/keymod/features/") },
    { label: "Комплектация", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Как подключить", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "Часто задаваемые вопросы", href: docsPath("/product/keymod/faq/") },
    { label: "Скачать приложение KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
