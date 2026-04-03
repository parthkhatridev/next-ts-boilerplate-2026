'use client';

import { useEffect } from 'react';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { Button } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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
        <h1
          className={css({
            fontSize: '2xl',
            fontWeight: 'bold',
          })}
        >
          Something went wrong
        </h1>
        <p
          className={css({
            color: 'fg.muted',
            fontSize: 'sm',
            maxW: 'md',
          })}
        >
          An unexpected error occurred. Please try again or contact support if
          the problem persists.
        </p>
        {error.digest && (
          <p
            className={css({
              color: 'fg.muted',
              fontSize: 'xs',
              fontFamily: 'mono',
            })}
          >
            Error ID: {error.digest}
          </p>
        )}
      </div>
      <Button variant="primary" onClick={reset}>
        Try Again
      </Button>
    </div>
  );
}
