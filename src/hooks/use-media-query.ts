'use client';

import { useSyncExternalStore } from 'react';

/**
 * Hook to detect if a media query matches.
 * Uses useSyncExternalStore for tear-free reads and SSR safety.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', callback);
      return () => media.removeEventListener('change', callback);
    },
    () => window.matchMedia(query).matches,
    () => false, // Server snapshot
  );
}
