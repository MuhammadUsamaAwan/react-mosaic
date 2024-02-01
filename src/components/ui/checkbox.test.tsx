import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Checkbox } from '~/components/ui/checkbox';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = render(<Checkbox>Checkbox</Checkbox>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref}>Checkbox</Checkbox>);
    expect(ref.current).not.toBeNull();
  });

  it('should check when clicked', () => {
    const wrapper = render(<Checkbox>Checkbox</Checkbox>);
    const checkbox = wrapper.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
