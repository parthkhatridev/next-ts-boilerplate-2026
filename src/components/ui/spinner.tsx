import { styled } from '@/styled-system/jsx';

export const Spinner = styled('div', {
  base: {
    display: 'inline-block',
    borderRadius: 'full',
    border: '2px solid',
    borderColor: 'border',
    borderTopColor: 'accent',
    animation: 'spin 0.6s linear infinite',
  },
  variants: {
    size: {
      sm: { w: '4', h: '4' },
      md: { w: '6', h: '6' },
      lg: { w: '8', h: '8' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
Spinner.displayName = 'Spinner';
