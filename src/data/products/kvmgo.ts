import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "Ultrakompakter KVM, der an Ihren Schlüsselbund passt",
  subtitle: "Für kritische Technik-Momente — Anschließen. Steuern. Loslegen.",
  status: 'pre-order',
  description:
    "Die KVM-over-USB-Lösung der nächsten Generation mit integrierten Videoanschlüssen (HDMI, DisplayPort oder VGA). Ultrakompakt, schlüsselbundgroß und konzipiert für schnelle IT-Einsätze in Rechenzentren und Serverräumen.",
  seoDescription:
    "Steuern Sie Headless-Computer mit Openterface KVM-Go. Integriertes HDMI/DP/VGA, schlüsselbundgroß, 4K KVM-over-USB für IT-Profis.",
  keywords:
    "KVM-Go, KVM over USB, ultrakompakter KVM, Schlüsselbund KVM, 4K KVM, Headless-Steuerung",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "JETZT vorbestellen",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101.548", date: "Finanziert am 30. Dez. 2025", backers: "478" },
  painPoints: [
    "Herkömmliche KVM-Ausrüstung ist sperrig und erfordert separate Videokabel",
    "Notfall-Serverzugriff vor Ort benötigt ein Tool im Taschenformat",
    "Headless-Fehlersuche ohne Netzwerkzugriff ist langsam",
  ],
  solutions: [
    "Integrierte Videoanschlüsse machen zusätzliche Kabel überflüssig",
    "Schlüsselbund-Formfaktor, immer griffbereit",
    "KVM-over-USB — kein Netzwerk oder Treiber auf dem Zielsystem erforderlich",
  ],
  hwFeatures: [
    { title: "Integriertes Video", description: "HDMI-, DisplayPort- oder VGA-Modelle — keine losen Kabel." },
    { title: "Schlüsselbund-Größe", description: "Kleinster KVM-over-USB im Openterface-Sortiment." },
    { title: "4K-Unterstützung", description: "Hochauflösende Erfassung für moderne Displays." },
  ],
  swFeatures: [
    { title: "Openterface Qt App", description: "Plattformübergreifende Host-Steuerung für Windows, macOS und Linux." },
    { title: "MicroSD-Switch", description: "Umschaltbarer Speicher für portable OS-Images und Tools." },
    { title: "Open-Source-Stack", description: "Community-getriebene Firmware und Host-Anwendungen." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (modellabhängig)" },
    { label: "Auflösung", value: "Bis zu 4K" },
    { label: "Verbindung", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Rechenzentrumsbegehungen",
    "Headless-Geräte-Setup",
    "IT-Außeneinsatz und Homelab-Rettung",
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
    { label: "Features", href: docsPath("/product/kvm-go/features/") },
    { label: "Beta-Schnellstart", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Anschlussanleitung", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQs", href: docsPath("/product/kvm-go/faq/") },
    { label: "App herunterladen", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
