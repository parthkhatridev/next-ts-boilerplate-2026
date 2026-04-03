import Link from 'next/link';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div
      className={flex({
        direction: 'column',
        align: 'center',
        justify: 'center',
        gap: '6',
        minH: '50vh',
        textAlign: 'center',
      })}
    >
      <div className={flex({ direction: 'column', gap: '2' })}>
        <p
          className={css({
            fontSize: '6xl',
            fontWeight: 'bold',
            color: 'fg.muted',
            lineHeight: '1',
          })}
        >
          404
        </p>
        <h1
          className={css({
            fontSize: '2xl',
            fontWeight: 'bold',
          })}
        >
          Page not found
        </h1>
        <p
          className={css({
            color: 'fg.muted',
            fontSize: 'sm',
            maxW: 'md',
          })}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link href="/">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
}
