'use client';

import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

/**
 * Root providers wrapper.
 * Add all client-side providers here to keep layout.tsx clean.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
