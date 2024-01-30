import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from '~/components/ui/skeleton';

describe('Skeleton', () => {
  it('should render correctly', () => {
    const wrapper = render(<Skeleton className='size-5' />);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
