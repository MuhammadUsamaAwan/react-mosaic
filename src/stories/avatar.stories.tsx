import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Skeleton } from '~/components/ui/skeleton';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarExample: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>
        <Skeleton className='size-full' />
      </AvatarFallback>
    </Avatar>
  ),
};
