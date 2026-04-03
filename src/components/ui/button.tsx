import { type HTMLStyledProps, styled } from '@/styled-system/jsx';
import { type RecipeVariantProps, cva } from '@/styled-system/css';

export const buttonStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    borderRadius: 'md',
    fontWeight: 'medium',
    fontSize: 'sm',
    lineHeight: '1',
    cursor: 'pointer',
    transition: 'all',
    transitionDuration: '150ms',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'accent',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'accent',
        color: 'accent.fg',
        _hover: { opacity: 0.9 },
      },
      secondary: {
        bg: 'bg.muted',
        color: 'fg',
        border: '1px solid',
        borderColor: 'border',
        _hover: { bg: 'bg.subtle' },
      },
      outline: {
        bg: 'transparent',
        color: 'fg',
        border: '1px solid',
        borderColor: 'border',
        _hover: { bg: 'bg.subtle' },
      },
      ghost: {
        bg: 'transparent',
        color: 'fg',
        _hover: { bg: 'bg.subtle' },
      },
      destructive: {
        bg: 'destructive',
        color: 'destructive.fg',
        _hover: { opacity: 0.9 },
      },
      link: {
        bg: 'transparent',
        color: 'accent',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        _hover: { textDecorationColor: 'accent' },
      },
    },
    size: {
      sm: { h: '8', px: '3', fontSize: 'xs' },
      md: { h: '10', px: '4', fontSize: 'sm' },
      lg: { h: '12', px: '6', fontSize: 'base' },
      icon: { h: '10', w: '10' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;
export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariants;

export const Button = styled('button', buttonStyles);
Button.displayName = 'Button';
