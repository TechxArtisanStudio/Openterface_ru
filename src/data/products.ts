import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: 'Verwandeln Sie Ihr Smartphone in eine intelligente Tastatur',
    subtitle: 'Programmierbare Tastatur- und Maussteuerung für Technikbegeisterte, Profis und Gaming.',
    description:
      'Ein kompakter, programmierbarer USB + Bluetooth HID-Emulator, der Ihr Smartphone in eine tragbare Tastatur- und Trackpad-Konsole verwandelt. Basiert auf dem bewährten HID-Kern des Openterface Mini-KVM — Plug-and-Play, 100 % Open Source.',
    seoDescription:
      'Die KeyMod Series verwandelt Ihr Smartphone in eine tragbare Tastatur und ein Trackpad. USB + Bluetooth HID-Emulator, Open Source, perfekt für Kioske und Workflow-Shortcuts.',
    keywords: 'KeyMod, HID-Emulator, Smartphone-Tastatur, Bluetooth-Tastatur, USB-Tastatur, Open Source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'JETZT unterstützen',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Das Mitführen einer vollwertigen Tastatur für Kiosk- oder TV-Setups ist unpraktisch',
      'Workflow-Shortcuts erfordern programmierbare Makros für unterwegs',
      'Viele HID-Tools sind proprietär mit eingeschränkter Anpassbarkeit',
    ],
    solutions: [
      'Nutzen Sie Ihr Smartphone als tragbare Tastatur und Trackpad',
      'USB und Bluetooth HID in einem kompakten Gerät',
      '100 % Open Source mit Unterstützung der Openterface App',
    ],
    hwFeatures: [
      { title: 'Kompakter Formfaktor', description: 'Passt in die Hosentasche für Außeneinsätze und Reisen.' },
      { title: 'USB + Bluetooth', description: 'Duale Konnektivität für maximale Gerätekompatibilität.' },
      { title: 'Offene Hardware', description: 'Transparentes Design basierend auf dem bewährten Openterface HID-Kern.' },
    ],
    swFeatures: [
      { title: 'KeyMod App', description: 'Konfigurieren Sie Makros, Layouts und Gamepad-Profile von Ihrem Smartphone aus.' },
      { title: 'Plattformübergreifend', description: 'Funktioniert mit Android, iPadOS und Desktop-Hosts über Openterface Apps.' },
      { title: 'Open Source', description: 'Der gesamte Stack ist auf GitHub für Community-Beiträge verfügbar.' },
    ],
    specs: [
      { label: 'Konnektivität', value: 'USB-C + Bluetooth LE' },
      { label: 'HID-Modi', value: 'Tastatur, Maus, Gamepad' },
      { label: 'Lizenz', value: 'Open Source Hardware & Software' },
    ],
    useCases: ['Smart TV & Kiosk-Eingabe', 'Mobile Workflow-Makros', 'Gaming & Barrierefreiheit-Setups'],
    docLinks: [
      { label: 'Features', href: docsPath('/product/keymod/features/') },
      { label: 'Lieferumfang', href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: 'Anschlussanleitung', href: docsPath('/product/keymod/how-to-connect/') },
      { label: 'FAQs', href: docsPath('/product/keymod/faq/') },
      { label: 'KeyMod App herunterladen', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: 'Ultrakompakter KVM, der an Ihren Schlüsselbund passt',
    subtitle: 'Für kritische Technik-Momente — Anschließen. Steuern. Loslegen.',
    description:
      'Die KVM-over-USB-Lösung der nächsten Generation mit integrierten Videoanschlüssen (HDMI, DisplayPort oder VGA). Ultrakompakt, schlüsselbundgroß und konzipiert für schnelle IT-Einsätze in Rechenzentren und Serverräumen.',
    seoDescription:
      'Steuern Sie Headless-Computer mit Openterface KVM-Go. Integriertes HDMI/DP/VGA, schlüsselbundgroß, 4K KVM-over-USB für IT-Profis.',
    keywords: 'KVM-Go, KVM over USB, ultrakompakter KVM, Schlüsselbund KVM, 4K KVM, Headless-Steuerung',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'JETZT vorbestellen',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101.548', date: 'Finanziert am 30. Dez. 2025', backers: '478' },
    painPoints: [
      'Herkömmliche KVM-Ausrüstung ist sperrig und erfordert separate Videokabel',
      'Notfall-Serverzugriff vor Ort benötigt ein Tool im Taschenformat',
      'Headless-Fehlersuche ohne Netzwerkzugriff ist langsam',
    ],
    solutions: [
      'Integrierte Videoanschlüsse machen zusätzliche Kabel überflüssig',
      'Schlüsselbund-Formfaktor, immer griffbereit',
      'KVM-over-USB — kein Netzwerk oder Treiber auf dem Zielsystem erforderlich',
    ],
    hwFeatures: [
      { title: 'Integriertes Video', description: 'HDMI-, DisplayPort- oder VGA-Modelle — keine losen Kabel.' },
      { title: 'Schlüsselbund-Größe', description: 'Kleinster KVM-over-USB im Openterface-Sortiment.' },
      { title: '4K-Unterstützung', description: 'Hochauflösende Erfassung für moderne Displays.' },
    ],
    swFeatures: [
      { title: 'Openterface Qt App', description: 'Plattformübergreifende Host-Steuerung für Windows, macOS und Linux.' },
      { title: 'MicroSD-Switch', description: 'Umschaltbarer Speicher für portable OS-Images und Tools.' },
      { title: 'Open-Source-Stack', description: 'Community-getriebene Firmware und Host-Anwendungen.' },
    ],
    specs: [
      { label: 'Video', value: 'HDMI / DP / VGA (modellabhängig)' },
      { label: 'Auflösung', value: 'Bis zu 4K' },
      { label: 'Verbindung', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Rechenzentrumsbegehungen', 'Headless-Geräte-Setup', 'IT-Außeneinsatz und Homelab-Rettung'],
    docLinks: [
      { label: 'Features', href: docsPath('/product/kvm-go/features/') },
      { label: 'Beta-Schnellstart', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Anschlussanleitung', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: 'FAQs', href: docsPath('/product/kvm-go/faq/') },
      { label: 'App herunterladen', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Verwandeln Sie Ihren Laptop in eine KVM-Konsole',
    subtitle: 'Vereinfachen Sie Ihr Technik-Leben.',
    description:
      'Eine Plug-and-Play KVM-over-USB-Lösung. Steuern Sie einen Headless-Computer in der Nähe direkt von Ihrem Laptop über USB und HDMI — keine zusätzlichen Peripheriegeräte oder Netzwerke erforderlich.',
    seoDescription:
      'Openterface Mini-KVM: Plug-and-Play KVM-over-USB mit HDMI. Steuern Sie Headless-Computer von Ihrem Laptop ohne Netzwerk.',
    keywords: 'Mini-KVM, KVM over USB, Headless-Steuerung, HDMI KVM, Plug-and-Play KVM',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'JETZT bestellen',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505.471', date: 'Finanziert am 13. Juni 2024', backers: '3.775' },
    painPoints: [
      'Das Mitschleppen von Monitor und Tastatur für jede Serverreparatur ist unpraktisch',
      'Netzwerk-KVM erfordert Konfiguration und Konnektivität',
      'IT-Profis benötigen täglich einen zuverlässigen KVM im Taschenformat',
    ],
    solutions: [
      'Nutzen Sie Ihren vorhandenen Laptop als KVM-Konsole',
      'HDMI-Capture + USB-HID in einem kompakten Gerät',
      'Bewährt durch über 5.000 Community-Mitglieder seit 2024',
    ],
    hwFeatures: [
      { title: 'HDMI-Capture', description: 'Vollständiges Videosignal vom Zielrechner auf Ihren Host-Laptop.' },
      { title: 'USB-Switch', description: 'Umschalten von USB-Geräten zwischen Host und Ziel.' },
      { title: 'Erweiterungspins', description: 'Optionen für Hardware-Hacking und kundenspezifische Integration.' },
    ],
    swFeatures: [
      { title: 'Qt / macOS / Android Apps', description: 'Native Apps für jede gängige Host-Plattform.' },
      { title: 'Open Source', description: 'Vollständig offenes Hardware- und Software-Ökosystem.' },
      { title: 'Aktive Community', description: 'Discord, GitHub und regelmäßige Firmware-Updates.' },
    ],
    specs: [
      { label: 'Videoeingang', value: 'HDMI' },
      { label: 'USB', value: 'USB-C mit umschaltbarem Port' },
      { label: 'Status', value: 'Versandbereit — Crowd Supply' },
    ],
    useCases: ['Homelab-Management', 'Side-by-side-Steuerung von Entwickler-Workstations', 'Fehlersuche am IT-Prüfstand'],
    docLinks: [
      { label: 'Features', href: docsPath('/product/minikvm/features/') },
      { label: 'USB-Switch', href: docsPath('/product/minikvm/usb-switch/') },
      { label: 'Technischer Support', href: docsPath('/product/minikvm/support/') },
      { label: 'FAQs', href: docsPath('/product/minikvm/faq/') },
      { label: 'App herunterladen', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: 'KVM-Power für Ihre uConsole',
    subtitle: 'Verwandeln Sie die tragbare uConsole in ein vollwertiges KVM-Terminal.',
    description:
      'Eine Hardware-Erweiterung, die der Clockwork uConsole KVM-over-USB-Funktionalität verleiht. Perfekt für mobile IT-Arbeiten mit integrierter Tastatur und Display.',
    seoDescription:
      'Die uConsole KVM Extension fügt der tragbaren Clockwork uConsole KVM-over-USB hinzu.',
    keywords: 'uConsole, KVM-Erweiterung, portabler KVM, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'Mehr erfahren',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Tragbare Konsolen verfügen nicht über integriertes KVM für Headless-Ziele',
      'Techniker im Außeneinsatz wünschen sich ein Gerät für alles',
    ],
    solutions: [
      'Native Erweiterungskarte im uConsole-Formfaktor',
      'Vollständiger Openterface KVM-Stack auf einem taschengroßen Gerät',
    ],
    hwFeatures: [
      { title: 'uConsole nativ', description: 'Speziell für die Clockwork uConsole entwickelt.' },
      { title: 'Kompakte Leiterplatte', description: 'Wird im Gehäuse der uConsole installiert.' },
    ],
    swFeatures: [
      { title: 'Openterface Apps', description: 'Dieselbe vertrauenswürdige Software wie für Mini-KVM und KVM-GO.' },
      { title: 'Einrichtungsleitfäden', description: 'Schritt-für-Schritt-Dokumentation zur Hardware- und Software-Installation.' },
    ],
    specs: [
      { label: 'Kompatibilität', value: 'Clockwork uConsole' },
      { label: 'Zertifizierung', value: 'OSHWA-zertifiziert' },
    ],
    useCases: ['Tragbares Rechenzentrumstool', 'Maker & Homelab für unterwegs'],
    docLinks: [
      { label: 'Hardware-Installation', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Software-Einrichtung', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Anschlussanleitung', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'FAQs', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Openterface Accessories',
    slogan: 'Vervollständigen Sie Ihr Setup',
    subtitle: 'Premium-Kabel, Adapter und Toolkit-Taschen für Profis.',
    description:
      'Unverzichtbares Zubehör wie Videoadapter, Hochgeschwindigkeitskabel und Speicherlösungen. Verbessern Sie Ihr Openterface-Erlebnis mit hochwertiger Ausrüstung aus dem TxA Shop.',
    seoDescription: 'Openterface-Zubehör — Kabel, Adapter, Toolkit-Taschen und Videoanschlüsse.',
    keywords: 'KVM-Zubehör, HDMI-Kabel, USB-C-Kabel, Toolkit-Tasche',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'JETZT shoppen',
    buyHref: siteConfig.links.shop,
    painPoints: ['Das Fehlen des richtigen Kabels vor Ort verzögert jede Reparatur'],
    solutions: ['Kuratiertes Zubehör, getestet mit Openterface-Produkten'],
    hwFeatures: [
      { title: 'Videoadapter', description: 'HDMI, VGA und Spezialanschlüsse.' },
      { title: 'Hochgeschwindigkeitskabel', description: 'USB-C- und Type-A-Kabel für KVM-Workloads.' },
      { title: 'Toolkit-Tasche', description: 'Organisieren Sie Ihr gesamtes Openterface-Kit.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organisation des Field-Kits', 'Videoformat-Konvertierung', 'Ersatzkabel für IT-Notfalltaschen'],
    docLinks: [
      { label: 'Alle SKUs', href: docsPath('/product/accessories/') },
      { label: 'TxA Shop', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
