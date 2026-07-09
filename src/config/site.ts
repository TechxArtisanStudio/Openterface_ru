import { surfaceDocsBase, surfaceNewsBase } from './surface-urls';

export const siteConfig = {
  name: 'Openterface',
  locale: 'ru',
  url: 'https://ru.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Сверхкомпактные KVM-over-USB решения для IT-специалистов — KVM-GO, Mini-KVM, KeyMod и uConsole KVM Extension.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    kvmextPurchase: 'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    docs: 'https://docs.openterface.com',
    keycmdAndroidApk: 'https://assets2.openterface.com/data/KeyCmd-release-0.19.apk',
    appOverview: 'https://docs.openterface.com/ru/app/kvm/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
    news: 'https://news.openterface.com',
    forum: 'https://forum.openterface.com/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
                  linkerDomains: ['openterface.com', 'forum.openterface.com']
    },
    ahrefs: { dataKey: 'b3G5nUND8OglcZwfjfwixQ' },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Согласие на cookie',
      description:
        'Мы используем cookie для улучшения сайта и анализа использования. Ваше согласие помогает нам оптимизировать ваш опыт. Спасибо!',
      acceptLabel: 'Принять',
      rejectLabel: 'Отклонить',
      cookieLabel: 'Cookie',
    },
  },
} as const;

export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}

export function docsPath(subpath = ''): string {
  const normalized = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  const suffix = normalized && !normalized.endsWith('/') ? `${normalized}/` : normalized || '/';
  const { locale } = siteConfig;
  const base = surfaceDocsBase();
  if (locale === 'en') return suffix === '/' ? `${base}/` : `${base}${suffix}`;
  return `${base}/${locale}${suffix === '/' ? '/' : suffix}`;
}

export function newsPath(subpath = ''): string {
  const normalized = subpath.replace(/^\/+|\/+$/g, '');
  const { locale } = siteConfig;
  const base = surfaceNewsBase();
  if (locale === 'en') return normalized ? `${base}/${normalized}/` : `${base}/`;
  return normalized ? `${base}/${locale}/${normalized}/` : `${base}/${locale}/`;
}
