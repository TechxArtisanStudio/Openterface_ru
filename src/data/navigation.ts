import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Продукты',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Аксессуары', href: '/products/accessories/' },
    ],
  },
  { label: 'Видео', href: '/videos/' },
  { label: 'Сценарии', href: '/use-cases/' },
  { label: 'О нас', href: '/about/' },
  { label: 'Документация', href: docsPath(), external: true },
  { label: 'Новости', href: newsPath(), external: true },
  { label: 'Магазин', href: siteConfig.links.shop, external: true },
];
