import { services } from '@/data/services';

export default async function sitemap() {
  const baseUrl = 'https://creativedecorgoa.com';
  
  const staticRoutes = ['', '/about', '/services', '/projects', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const dynamicRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
