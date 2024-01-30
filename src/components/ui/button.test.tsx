import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '~/components/ui/button';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button>Button</Button>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    expect(ref.current).not.toBeNull();
  });

  it('should trigger onClick function', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick} />);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should ignore events when disabled', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button disabled onClick={onClick} />);
    fireEvent.click(getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
