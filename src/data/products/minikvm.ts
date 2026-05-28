import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Verwandeln Sie Ihren Laptop in eine KVM-Konsole",
  subtitle: "Vereinfachen Sie Ihr Technik-Leben.",
  status: 'shipping',
  description:
    "Eine Plug-and-Play KVM-over-USB-Lösung. Steuern Sie einen Headless-Computer in der Nähe direkt von Ihrem Laptop über USB und HDMI — keine zusätzlichen Peripheriegeräte oder Netzwerke erforderlich.",
  seoDescription:
    "Openterface Mini-KVM: Plug-and-Play KVM-over-USB mit HDMI. Steuern Sie Headless-Computer von Ihrem Laptop ohne Netzwerk.",
  keywords:
    "Mini-KVM, KVM over USB, Headless-Steuerung, HDMI KVM, Plug-and-Play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "JETZT bestellen",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505.471", date: "Finanziert am 13. Juni 2024", backers: "3.775" },
  painPoints: [
    "Das Mitschleppen von Monitor und Tastatur für jede Serverreparatur ist unpraktisch",
    "Netzwerk-KVM erfordert Konfiguration und Konnektivität",
    "IT-Profis benötigen täglich einen zuverlässigen KVM im Taschenformat",
  ],
  solutions: [
    "Nutzen Sie Ihren vorhandenen Laptop als KVM-Konsole",
    "HDMI-Capture + USB-HID in einem kompakten Gerät",
    "Bewährt durch über 5.000 Community-Mitglieder seit 2024",
  ],
  hwFeatures: [
    { title: "HDMI-Capture", description: "Vollständiges Videosignal vom Zielrechner auf Ihren Host-Laptop." },
    { title: "USB-Switch", description: "Umschalten von USB-Geräten zwischen Host und Ziel." },
    { title: "Erweiterungspins", description: "Optionen für Hardware-Hacking und kundenspezifische Integration." },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android Apps", description: "Native Apps für jede gängige Host-Plattform." },
    { title: "Open Source", description: "Vollständig offenes Hardware- und Software-Ökosystem." },
    { title: "Aktive Community", description: "Discord, GitHub und regelmäßige Firmware-Updates." },
  ],
  specs: [
    { label: "Videoeingang", value: "HDMI" },
    { label: "USB", value: "USB-C mit umschaltbarem Port" },
    { label: "Status", value: "Versandbereit — Crowd Supply" },
  ],
  useCases: [
    "Homelab-Management",
    "Side-by-side-Steuerung von Entwickler-Workstations",
    "Fehlersuche am IT-Prüfstand",
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
    { label: "Features", href: docsPath("/product/minikvm/features/") },
    { label: "USB-Switch", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Technischer Support", href: docsPath("/product/minikvm/support/") },
    { label: "FAQs", href: docsPath("/product/minikvm/faq/") },
    { label: "App herunterladen", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
