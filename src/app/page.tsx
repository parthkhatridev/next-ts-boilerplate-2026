import { css } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import { Button } from '@/components/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Badge } from '@/components/ui';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <div className={flex({ direction: 'column', gap: '12' })}>
      {/* Hero Section */}
      <section
        className={flex({
          direction: 'column',
          align: 'center',
          gap: '6',
          textAlign: 'center',
          py: '16',
        })}
      >
        <Badge variant="secondary" size="lg">
          Production Ready
        </Badge>

        <h1
          className={css({
            fontSize: { base: '3xl', md: '5xl' },
            fontWeight: 'bold',
            letterSpacing: 'tight',
            lineHeight: '1.1',
            maxW: '3xl',
          })}
        >
          {siteConfig.name}
        </h1>

        <p
          className={css({
            fontSize: { base: 'md', md: 'lg' },
            color: 'fg.muted',
            maxW: '2xl',
            lineHeight: '1.6',
          })}
        >
          A modern, production-grade Next.js boilerplate with TypeScript, Panda
          CSS, and all the tools you need to build great applications.
        </p>

        <div className={flex({ gap: '4', mt: '2' })}>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Documentation
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className={grid({
          columns: { base: 1, md: 2, lg: 3 },
          gap: '6',
        })}
      >
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={flex({ gap: '2', flexWrap: 'wrap' })}>
                {feature.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Type Safe',
    description:
      'Full TypeScript with strict mode, Zod validation, and type-safe environment variables.',
    tags: ['TypeScript', 'Zod', 'Strict'],
  },
  {
    title: 'Panda CSS',
    description:
      'Zero-runtime CSS-in-JS with design tokens, semantic colors, and dark mode support.',
    tags: ['Panda CSS', 'Tokens', 'Dark Mode'],
  },
  {
    title: 'State Management',
    description:
      'Zustand for client state and TanStack Query for server state, perfectly integrated.',
    tags: ['Zustand', 'TanStack Query'],
  },
  {
    title: 'Testing',
    description:
      'Vitest for unit tests, React Testing Library for components, and Playwright for E2E.',
    tags: ['Vitest', 'Playwright', 'RTL'],
  },
  {
    title: 'Code Quality',
    description:
      'ESLint, Prettier, Husky git hooks, lint-staged, and conventional commits enforced.',
    tags: ['ESLint', 'Prettier', 'Husky'],
  },
  {
    title: 'Production Ready',
    description:
      'Security headers, SEO metadata, error boundaries, and bundle analysis built in.',
    tags: ['Security', 'SEO', 'Performance'],
  },
] as const;
