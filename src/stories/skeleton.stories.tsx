import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '~/components/ui/skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const SkeletonExample: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Skeleton className='size-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  ),
};
