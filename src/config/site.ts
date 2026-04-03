export const siteConfig = {
  name: 'next-ts-boilerplate-2026',
  description: '',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ogImage: '',
  links: {
    github: '',
  },
  creator: '',
} as const;

export type SiteConfig = typeof siteConfig;
