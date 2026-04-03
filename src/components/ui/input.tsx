import { type HTMLStyledProps, styled } from '@/styled-system/jsx';
import { type RecipeVariantProps, cva } from '@/styled-system/css';

export const inputStyles = cva({
  base: {
    display: 'flex',
    w: 'full',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: 'border',
    bg: 'bg',
    color: 'fg',
    fontSize: 'sm',
    transition: 'all',
    transitionDuration: '150ms',
    _placeholder: { color: 'fg.muted' },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'accent',
      outlineOffset: '-1px',
      borderColor: 'accent',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    _invalid: {
      borderColor: 'destructive',
      _focusVisible: {
        outlineColor: 'destructive',
      },
    },
  },
  variants: {
    size: {
      sm: { h: '8', px: '3', fontSize: 'xs' },
      md: { h: '10', px: '3', fontSize: 'sm' },
      lg: { h: '12', px: '4', fontSize: 'base' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type InputVariants = RecipeVariantProps<typeof inputStyles>;
export type InputProps = HTMLStyledProps<'input'> & InputVariants;

export const Input = styled('input', inputStyles);
Input.displayName = 'Input';
