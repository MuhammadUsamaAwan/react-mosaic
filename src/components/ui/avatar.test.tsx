import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

describe('Avatar', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Avatar ref={ref}>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should display fallback', () => {
    const wrapper = render(
      <Avatar>
        <AvatarImage src='' alt='' />
        <AvatarFallback data-testid='fallback'>CN</AvatarFallback>
      </Avatar>
    );
    expect(wrapper.getByTestId('fallback')).toBeInTheDocument();
  });
});
