import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Chip } from '~/components/ui/chip';

describe('Chip', () => {
  it('should render correctly', () => {
    const wrapper = render(<Chip>Chip</Chip>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
