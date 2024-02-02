import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should display content when open', () => {
    const wrapper = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
    const trigger = wrapper.getByRole('button');
    expect(wrapper.queryByText('Popover Content')).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(wrapper.getByText('Popover Content')).toBeInTheDocument();
  });
});
