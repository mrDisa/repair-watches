import { site } from '../data/site';
import type { Service } from '../data/services';

const abs = (p: string) => site.url + p;
export const businessId = abs('/#business');

export function businessSchema() {
  const sameAs = [site.yandexMapsUrl, site.twoGisUrl, site.avitoUrl].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: site.name,
    description: `Ремонт настенных часов в ${site.city}: механические, кварцевые, с боем и кукушкой. Опыт мастера — ${site.experienceYears} лет.`,
    url: abs('/'),
    telephone: site.phone,
    image: abs('/img/og.png'),
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: 'RU',
      ...(site.address ? { streetAddress: site.address } : {}),
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lon },
    areaServed: { '@type': 'City', name: site.city },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceSchema(s: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.h1,
    serviceType: s.name,
    description: s.seoDesc,
    url: abs(`/uslugi/${s.slug}/`),
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: site.city },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'RUB', minPrice: s.priceFrom },
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}
