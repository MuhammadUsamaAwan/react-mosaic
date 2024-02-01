import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from '~/components/ui/label';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(<Label>Label</Label>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Label</Label>);
    expect(ref.current).not.toBeNull();
  });
});
