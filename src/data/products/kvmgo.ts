import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Серия Openterface KVM-GO",
  slogan: "Ультракомпактный KVM, который поместится на брелоке",
  subtitle: "Для критических IT-задач — Подключи. Управляй. В путь.",
  status: 'pre-order',
  description:
    "Решение KVM-over-USB нового поколения со встроенными видеоразъемами (HDMI, DisplayPort или VGA). Ультракомпактный, размером с брелок, создан для быстрых IT-операций в дата-центрах и серверных.",
  seoDescription:
    "Управляйте безмониторными компьютерами с Openterface KVM-GO. Встроенные HDMI/DP/VGA, размер брелока, 4K KVM-over-USB для IT-специалистов.",
  keywords:
    "KVM-GO, KVM over USB, ультракомпактный KVM, KVM на брелоке, 4K KVM, управление без монитора",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Предзаказ СЕЙЧАС",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Финансирование завершено 30 декабря 2025 г.", backers: "478" },
  painPoints: [
    "Традиционное KVM-оборудование громоздкое и требует отдельных видеокабелей",
    "Для экстренного доступа к серверам в поле нужен инструмент карманного размера",
    "Диагностика безмониторных систем без сетевого доступа занимает много времени",
  ],
  solutions: [
    "Встроенные видеоразъемы исключают лишние кабели",
    "Форм-фактор брелока всегда под рукой",
    "KVM-over-USB — не требует сети или драйверов на целевом устройстве",
  ],
  hwFeatures: [
    { title: "Встроенное видео", description: "Модели с HDMI, DisplayPort или VGA — никаких лишних кабелей." },
    { title: "Размер брелока", description: "Самый маленький KVM-over-USB в линейке Openterface." },
    { title: "Поддержка 4K", description: "Захват высокого разрешения для современных дисплеев." },
  ],
  swFeatures: [
    { title: "Приложение Openterface Qt", description: "Кроссплатформенное управление хостом для Windows, macOS и Linux." },
    { title: "Переключатель MicroSD", description: "Сменное хранилище для портативных образов ОС и инструментов." },
    { title: "Стек с открытым исходным кодом", description: "Прошивки и приложения для хоста, разрабатываемые сообществом." },
  ],
  specs: [
    { label: "Видео", value: "HDMI / DP / VGA (зависит от модели)" },
    { label: "Разрешение", value: "До 4K" },
    { label: "Подключение", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Обходы дата-центров",
    "Настройка безмониторных устройств",
    "Полевое IT-обслуживание и восстановление домашних серверов",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Функции", href: docsPath("/product/kvm-go/features/") },
    { label: "Быстрый старт (бета)", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Как подключить", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "Часто задаваемые вопросы", href: docsPath("/product/kvm-go/faq/") },
    { label: "Скачать приложение", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
