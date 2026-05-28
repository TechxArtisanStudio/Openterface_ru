import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Продукты",
    href: '/products/',
    children: [
      { label: "Все продукты", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Аксессуары", href: '/accessories/' },
    ],
  },
  {
    label: "Приложения",
    href: '/app/',
    children: [
      { label: "Все приложения", href: '/app/' },
      { label: "KVM-управление", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Медиа", href: '/videos/' },
  { label: "О нас", href: '/about/' },
  { label: "Документация", href: docsPath(), external: true },
  { label: "Новости", href: newsPath(), external: true },
  { label: "Магазин", href: siteConfig.links.shop, external: true },
];
