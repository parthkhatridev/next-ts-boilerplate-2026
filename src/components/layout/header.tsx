'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { css } from '@/styled-system/css';
import { flex, container } from '@/styled-system/patterns';

import { siteConfig } from '@/config/site';

/**
 * Navigation links.
 * Add your routes here as you build out the app.
 */
const navLinks = [
  { href: '/', label: 'Home' },
  // { href: '/about', label: 'About' },
  // { href: '/blog', label: 'Blog' },
] as const;

export function Header() {
  return (
    <header
      className={css({
        borderBottom: '1px solid',
        borderColor: 'border',
        bg: 'bg/80',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      })}
    >
      <div
        className={container({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          h: '16',
          maxW: 'container.xl',
          mx: 'auto',
          px: '4',
        })}
      >
        <Link
          href="/"
          className={css({
            fontWeight: 'bold',
            fontSize: 'lg',
            letterSpacing: 'tight',
            color: 'fg',
            textDecoration: 'none',
            _hover: { textDecoration: 'none', opacity: 0.8 },
          })}
        >
          {siteConfig.name}
        </Link>

        <nav
          className={flex({
            align: 'center',
            gap: '6',
          })}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as Route}
              className={css({
                fontSize: 'sm',
                color: 'fg.muted',
                _hover: { color: 'fg' },
                transition: 'colors',
                transitionDuration: '150ms',
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
