import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AspectRatio } from '~/components/ui/aspect-ratio';

describe('Aspect Ratio', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <AspectRatio ratio={16 / 9}>
        <div className='size-full' />
      </AspectRatio>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <AspectRatio ratio={16 / 9} ref={ref}>
        <div className='size-full' />
      </AspectRatio>
    );
    expect(ref.current).not.toBeNull();
  });
});
