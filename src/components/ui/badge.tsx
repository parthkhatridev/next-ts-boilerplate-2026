import { type HTMLStyledProps, styled } from '@/styled-system/jsx';
import { type RecipeVariantProps, cva } from '@/styled-system/css';

export const badgeStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'full',
    fontWeight: 'medium',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    transition: 'all',
    transitionDuration: '150ms',
  },
  variants: {
    variant: {
      default: {
        bg: 'accent',
        color: 'accent.fg',
      },
      secondary: {
        bg: 'bg.muted',
        color: 'fg',
        border: '1px solid',
        borderColor: 'border',
      },
      outline: {
        bg: 'transparent',
        color: 'fg',
        border: '1px solid',
        borderColor: 'border',
      },
      destructive: {
        bg: 'destructive',
        color: 'destructive.fg',
      },
    },
    size: {
      sm: { px: '2', py: '0.5', fontSize: '2xs' },
      md: { px: '2.5', py: '1', fontSize: 'xs' },
      lg: { px: '3', py: '1.5', fontSize: 'sm' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type BadgeVariants = RecipeVariantProps<typeof badgeStyles>;
export type BadgeProps = HTMLStyledProps<'span'> & BadgeVariants;

export const Badge = styled('span', badgeStyles);
Badge.displayName = 'Badge';
