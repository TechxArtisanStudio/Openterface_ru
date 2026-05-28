import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "Verwandeln Sie Ihr Smartphone in eine intelligente Tastatur",
  subtitle: "Programmierbare Tastatur- und Maussteuerung für Technikbegeisterte, Profis und Gaming.",
  status: 'pre-launch',
  description:
    "Ein kompakter, programmierbarer USB + Bluetooth HID-Emulator, der Ihr Smartphone in eine tragbare Tastatur- und Trackpad-Konsole verwandelt. Basiert auf dem bewährten HID-Kern des Openterface Mini-KVM — Plug-and-Play, 100 % Open Source.",
  seoDescription:
    "Die KeyMod Series verwandelt Ihr Smartphone in eine tragbare Tastatur und ein Trackpad. USB + Bluetooth HID-Emulator, Open Source, perfekt für Kioske und Workflow-Shortcuts.",
  keywords:
    "KeyMod, HID-Emulator, Smartphone-Tastatur, Bluetooth-Tastatur, USB-Tastatur, Open Source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "JETZT unterstützen",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Das Mitführen einer vollwertigen Tastatur für Kiosk- oder TV-Setups ist unpraktisch",
    "Workflow-Shortcuts erfordern programmierbare Makros für unterwegs",
    "Viele HID-Tools sind proprietär mit eingeschränkter Anpassbarkeit",
  ],
  solutions: [
    "Nutzen Sie Ihr Smartphone als tragbare Tastatur und Trackpad",
    "USB und Bluetooth HID in einem kompakten Gerät",
    "100 % Open Source mit Unterstützung der Openterface App",
  ],
  hwFeatures: [
    { title: "Kompakter Formfaktor", description: "Passt in die Hosentasche für Außeneinsätze und Reisen." },
    { title: "USB + Bluetooth", description: "Duale Konnektivität für maximale Gerätekompatibilität." },
    { title: "Offene Hardware", description: "Transparentes Design basierend auf dem bewährten Openterface HID-Kern." },
  ],
  swFeatures: [
    { title: "KeyMod App", description: "Konfigurieren Sie Makros, Layouts und Gamepad-Profile von Ihrem Smartphone aus." },
    { title: "Plattformübergreifend", description: "Funktioniert mit Android, iPadOS und Desktop-Hosts über Openterface Apps." },
    { title: "Open Source", description: "Der gesamte Stack ist auf GitHub für Community-Beiträge verfügbar." },
  ],
  specs: [
    { label: "Konnektivität", value: "USB-C + Bluetooth LE" },
    { label: "HID-Modi", value: "Tastatur, Maus, Gamepad" },
    { label: "Lizenz", value: "Open Source Hardware & Software" },
  ],
  useCases: [
    "Smart TV & Kiosk-Eingabe",
    "Mobile Workflow-Makros",
    "Gaming & Barrierefreiheit-Setups",
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
    { label: "Features", href: docsPath("/product/keymod/features/") },
    { label: "Lieferumfang", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Anschlussanleitung", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQs", href: docsPath("/product/keymod/faq/") },
    { label: "KeyMod App herunterladen", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
