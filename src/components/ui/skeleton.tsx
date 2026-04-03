import { styled } from '@/styled-system/jsx';

export const Skeleton = styled('div', {
  base: {
    bg: 'bg.muted',
    borderRadius: 'md',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
});
Skeleton.displayName = 'Skeleton';
