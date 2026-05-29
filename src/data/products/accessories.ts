import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

export interface AccessorySku {
  title: string;
  description: string;
  image: string;
  shopHref: string;
  docsHref: string;
  badge?: string;
}

/**
 * Accessories marketing payload — Phase 1G flat landing at /accessories/.
 * Sourced from docs/products/accessories/ (index + 6 SKU pages).
 */
export const accessorySkus: AccessorySku[] = [
  {
    title: "Аксессуары Openterface",
    description: "Необходимые аксессуары, включая видеоадаптеры, высокоскоростные кабели и решения для хранения. Улучшите работу с Openterface с помощью качественных аксессуаров из TxA Shop.",
    image: 'https://assets.openterface.com/images/product/part/CABLE100-VGA2HDMI-1.webp',
    shopHref: 'https://shop.techxartisan.com/products/vga-to-hdmi-converter-cable',
    docsHref: docsPath('/accessories/vga-to-hdmi-cable/'),
    badge: 'Video adapter',
  },
  {
    title: 'Upgraded Nylon USB-C Cable',
    description: '1.5 m orange nylon USB-C cable with USB-A adapter — 240 W charging, 10 Gbps data for host connections.',
    image: 'https://assets.openterface.com/images/product/part/nylon-usb-c-cable.webp',
    shopHref:
      'https://shop.techxartisan.com/products/upgraded-nylon-usb-c-cable-240w-fast-charging-10gbps-data-transfer-1-5m-with-usb-a-adapter-eye-catching-orange',
    docsHref: docsPath('/accessories/nylong-c-to-c-150/'),
    badge: 'Host cable',
  },
  {
    title: 'Type-C to Type-C Cable with Adapter',
    description: '1.5 m orange host cable with USB-C to USB-A adapter — 240 W fast charging and high-speed data.',
    image: 'https://assets.openterface.com/images/product/part/OP-05-CABLE150-C2C.webp',
    shopHref:
      'https://shop.techxartisan.com/products/type-c-cable-with-usb-a-adapter-1-5m-4-11ft-240w-fast-charging-data-transfer-usb2-0',
    docsHref: docsPath('/accessories/type-c-to-c-cable-with-adapter/'),
    badge: 'Host cable',
  },
  {
    title: 'Type-C to USB-A Cable (30 cm)',
    description: 'Short black target-side cable with USB-A/C adapter — keyboard, mouse, and data to the target device.',
    image: 'https://assets.openterface.com/images/product/part/OP-04-CABLE30-C2A.webp',
    shopHref: 'https://shop.techxartisan.com/products/type-c-to-usb-a-cable-with-adapter',
    docsHref: docsPath('/accessories/black-c-to-a-30/'),
    badge: 'Target cable',
  },
  {
    title: 'HDMI Male-to-Male Cable (30 cm)',
    description: 'Compact HDMI for target video capture — pairs with Mini-KVM and KVM-GO setups.',
    image: 'https://assets.openterface.com/images/product/part/OP-03-CABLE30-HDMI.webp',
    shopHref: 'https://shop.techxartisan.com/products/hdmi-male-to-male-cable',
    docsHref: docsPath('/accessories/hdmi-male-to-male-cable/'),
    badge: 'Video cable',
  },
  {
    title: 'Openterface Toolkit Bag',
    description: '180 × 115 × 50 mm carry bag with mesh pockets — organize Mini-KVM, cables, and adapters on the go.',
    image: 'https://assets.openterface.com/images/product/part/OP-06-BAG-TOOLKIT.webp',
    shopHref: 'https://shop.techxartisan.com/products/openterface-toolkit-bag',
    docsHref: docsPath('/accessories/openterface-toolkit-bag/'),
    badge: 'Storage',
  },
];

export const accessoriesProduct: Product = {
  slug: 'accessories',
  title: 'Openterface Accessories',
  slogan: "Завершите свою конфигурацию",
  subtitle: "Премиальные кабели, адаптеры и сумки для инструментов для профессионалов.",
  status: 'shipping',
  description:
    'Curated cables, video adapters, and storage tested with Openterface KVM hardware. Build a field-ready kit with the right host cables, target connectors, and a portable bag from TxA Shop.',
  seoDescription:
    "Аксессуары Openterface — кабели, адаптеры, сумки для инструментов и видеоразъемы.",
  keywords: "Аксессуары для KVM, HDMI кабель, USB-C кабель, сумка для инструментов",
  heroImage: 'https://assets.openterface.com/images/product/part/OP-06-BAG-TOOLKIT.webp',
  heroImages: [
    'https://assets.openterface.com/images/product/part/OP-06-BAG-TOOLKIT.webp',
    'https://assets.openterface.com/images/product/part/nylon-usb-c-cable.webp',
    'https://assets.openterface.com/images/product/part/CABLE100-VGA2HDMI-1.webp',
  ],
  buyLabel: "Купить СЕЙЧАС",
  buyHref: siteConfig.links.shop,
  painPoints: [
    "Отсутствие нужного кабеля в поле задерживает любой ремонт",
  ],
  solutions: [
    "Подобранные аксессуары, протестированные с продуктами Openterface",
  ],
  hwFeatures: [
    { title: "Видеоадаптеры", description: "HDMI, VGA и специализированные разъемы." },
    { title: "Высокоскоростные кабели", description: "Кабели USB-C и Type-A, созданные для KVM-задач." },
    { title: "Сумка для инструментов", description: "Организуйте полный набор Openterface." },
  ],
  swFeatures: [],
  specs: [
    { label: 'SKUs', value: '6 cables, adapters & storage items' },
    { label: 'Shop', value: 'TxA Shop — ships worldwide' },
    { label: 'Docs', value: 'Per-SKU specs and setup guides on docs' },
  ],
  useCases: [
    "Организация полевого набора",
    "Конвертация видеоформатов",
    "Резервные кабели для IT-наборов",
  ],
  useCaseCards: [
    {
      title: 'Build a crash-cart replacement kit',
      description: 'Host cable, target HDMI, and USB adapter — everything for a Mini-KVM walk-through.',
      href: docsPath('/accessories/'),
    },
    {
      title: 'Convert legacy VGA targets',
      description: 'VGA + audio to HDMI when the rack still speaks analog video.',
      href: docsPath('/accessories/vga-to-hdmi-cable/'),
    },
    {
      title: 'Stay organized on site',
      description: 'Toolkit bag keeps KVM hardware and spares in one pocketable bundle.',
      href: docsPath('/accessories/openterface-toolkit-bag/'),
    },
  ],
  useCasesDocsHref: docsPath('/accessories/'),
  specsDocsHref: docsPath('/accessories/'),
  docsOverviewHref: docsPath('/accessories/'),
  docLinks: [
    { label: "Все артикулы", href: docsPath("/product/accessories/") },
    { label: "TxA Shop", href: docsPath("https://shop.techxartisan.com") },
  ],
  legacyBase: "/products/accessories/",
};
