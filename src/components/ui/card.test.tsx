import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';

describe('Aspect Ratio', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam ab praesentium, enim non recusandae at,
            odio tempora cum, nostrum tempore optio harum ea minima obcaecati ipsum beatae animi iusto quaerat aliquam
            numquam illum debitis aperiam eum. Aliquam a ipsum reprehenderit non voluptates ipsam corporis placeat. Illo
            sint repellendus sapiente!
          </p>
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Card ref={ref}>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam ab praesentium, enim non recusandae at,
            odio tempora cum, nostrum tempore optio harum ea minima obcaecati ipsum beatae animi iusto quaerat aliquam
            numquam illum debitis aperiam eum. Aliquam a ipsum reprehenderit non voluptates ipsam corporis placeat. Illo
            sint repellendus sapiente!
          </p>
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    expect(ref.current).not.toBeNull();
  });
});
