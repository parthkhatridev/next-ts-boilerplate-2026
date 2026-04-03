export const siteConfig = {
  name: 'Next Boilerplate',
  description: 'A modern Next.js boilerplate with best practices.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/your-username/next-boilerplate',
  },
  creator: 'Your Name',
} as const;

export type SiteConfig = typeof siteConfig;
