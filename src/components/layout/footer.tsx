import { css } from '@/styled-system/css';

import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer
      className={css({
        borderTop: '1px solid',
        borderColor: 'border',
        py: '6',
        mt: 'auto',
      })}
    >
      <div
        className={css({
          maxW: 'container.xl',
          mx: 'auto',
          px: '4',
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4',
          fontSize: 'sm',
          color: 'fg.muted',
        })}
      >
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p>
          Built with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={css({ color: 'accent', _hover: { textDecoration: 'underline' } })}
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href="https://panda-css.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css({ color: 'accent', _hover: { textDecoration: 'underline' } })}
          >
            Panda CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
