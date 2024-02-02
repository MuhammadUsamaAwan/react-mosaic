import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Example: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>Popover Content</PopoverContent>
    </Popover>
  ),
};
