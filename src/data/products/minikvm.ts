import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Превратите ноутбук в KVM-консоль",
  subtitle: "Упростите вашу IT-жизнь.",
  status: 'shipping',
  description:
    "Решение KVM-over-USB plug-and-play. Управляйте ближайшим безмониторным компьютером с ноутбука через USB и HDMI — без дополнительных периферийных устройств и сети.",
  seoDescription:
    "Openterface Mini-KVM: plug-and-play KVM-over-USB с HDMI. Управляйте безмониторными компьютерами с ноутбука без сети.",
  keywords:
    "Mini-KVM, KVM over USB, управление без монитора, HDMI KVM, plug-and-play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Заказать СЕЙЧАС",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Финансирование завершено 13 июня 2024 г.", backers: "3,775" },
  painPoints: [
    "Таскать монитор и клавиатуру для каждого ремонта сервера непрактично",
    "Сетевые KVM требуют настройки и подключения",
    "IT-специалистам ежедневно нужен надежный карманный KVM",
  ],
  solutions: [
    "Используйте свой ноутбук как KVM-консоль",
    "Захват HDMI + USB HID в одном компактном устройстве",
    "Проверено более чем 5000 участниками сообщества с 2024 года",
  ],
  hwFeatures: [
    { title: "Захват HDMI", description: "Полноценное видео с целевого устройства на ваш ноутбук." },
    { title: "USB-переключатель", description: "Переключение USB-устройств между хостом и целевой машиной." },
    { title: "Расширительные пины", description: "Возможности для аппаратного хакинга и пользовательской интеграции." },
  ],
  swFeatures: [
    { title: "Приложения Qt / macOS / Android", description: "Нативные приложения для всех основных платформ хоста." },
    { title: "Открытый исходный код", description: "Полностью открытая экосистема оборудования и ПО." },
    { title: "Активное сообщество", description: "Discord, GitHub и регулярные обновления прошивок." },
  ],
  specs: [
    { label: "Видеовход", value: "HDMI" },
    { label: "USB", value: "USB-C с переключаемым портом" },
    { label: "Статус", value: "Отгружается — Crowd Supply" },
  ],
  useCases: [
    "Управление домашней лабораторией",
    "Параллельное управление рабочими станциями разработчиков",
    "Диагностика на IT-стенде",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Функции", href: docsPath("/product/minikvm/features/") },
    { label: "USB-переключатель", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Техподдержка", href: docsPath("/product/minikvm/support/") },
    { label: "Часто задаваемые вопросы", href: docsPath("/product/minikvm/faq/") },
    { label: "Скачать приложение", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
