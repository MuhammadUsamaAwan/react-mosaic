import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Example: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam ab praesentium, enim non recusandae at, odio
          tempora cum, nostrum tempore optio harum ea minima obcaecati ipsum beatae animi iusto quaerat aliquam numquam
          illum debitis aperiam eum. Aliquam a ipsum reprehenderit non voluptates ipsam corporis placeat. Illo sint
          repellendus sapiente!
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};
