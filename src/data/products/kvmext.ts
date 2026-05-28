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
  title: "uConsole KVM Extension",
  slogan: "KVM-Power für Ihre uConsole",
  subtitle: "Verwandeln Sie die tragbare uConsole in ein vollwertiges KVM-Terminal.",
  status: 'oshwa',
  description:
    "Eine Hardware-Erweiterung, die der Clockwork uConsole KVM-over-USB-Funktionalität verleiht. Perfekt für mobile IT-Arbeiten mit integrierter Tastatur und Display.",
  seoDescription:
    "Die uConsole KVM Extension fügt der tragbaren Clockwork uConsole KVM-over-USB hinzu.",
  keywords:
    "uConsole, KVM-Erweiterung, portabler KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Mehr erfahren",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Tragbare Konsolen verfügen nicht über integriertes KVM für Headless-Ziele",
    "Techniker im Außeneinsatz wünschen sich ein Gerät für alles",
  ],
  solutions: [
    "Native Erweiterungskarte im uConsole-Formfaktor",
    "Vollständiger Openterface KVM-Stack auf einem taschengroßen Gerät",
  ],
  hwFeatures: [
    { title: "uConsole nativ", description: "Speziell für die Clockwork uConsole entwickelt." },
    { title: "Kompakte Leiterplatte", description: "Wird im Gehäuse der uConsole installiert." },
  ],
  swFeatures: [
    { title: "Openterface Apps", description: "Dieselbe vertrauenswürdige Software wie für Mini-KVM und KVM-GO." },
    { title: "Einrichtungsleitfäden", description: "Schritt-für-Schritt-Dokumentation zur Hardware- und Software-Installation." },
  ],
  specs: [
    { label: "Kompatibilität", value: "Clockwork uConsole" },
    { label: "Zertifizierung", value: "OSHWA-zertifiziert" },
  ],
  useCases: [
    "Tragbares Rechenzentrumstool",
    "Maker & Homelab für unterwegs",
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
    { label: "Hardware-Installation", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Software-Einrichtung", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Anschlussanleitung", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQs", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
