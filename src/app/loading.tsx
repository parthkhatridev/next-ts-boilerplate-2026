import { flex } from '@/styled-system/patterns';
import { Spinner } from '@/components/ui';

export default function Loading() {
  return (
    <div
      className={flex({
        align: 'center',
        justify: 'center',
        minH: '50vh',
      })}
    >
      <Spinner size="lg" />
    </div>
  );
}
