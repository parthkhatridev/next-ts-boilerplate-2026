import { styled } from '@/styled-system/jsx';

export const Card = styled('div', {
  base: {
    bg: 'bg',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'lg',
    overflow: 'hidden',
    shadow: 'sm',
  },
});
Card.displayName = 'Card';

export const CardHeader = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5',
    p: '6',
  },
});
CardHeader.displayName = 'CardHeader';

export const CardTitle = styled('h3', {
  base: {
    fontSize: 'lg',
    fontWeight: 'semibold',
    lineHeight: '1.2',
    letterSpacing: 'tight',
  },
});
CardTitle.displayName = 'CardTitle';

export const CardDescription = styled('p', {
  base: {
    fontSize: 'sm',
    color: 'fg.muted',
    lineHeight: '1.5',
  },
});
CardDescription.displayName = 'CardDescription';

export const CardContent = styled('div', {
  base: {
    p: '6',
    pt: '0',
  },
});
CardContent.displayName = 'CardContent';

export const CardFooter = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    p: '6',
    pt: '0',
  },
});
CardFooter.displayName = 'CardFooter';
