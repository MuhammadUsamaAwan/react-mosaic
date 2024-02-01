import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '~/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        I agree to sell my privacy
      </label>
    </div>
  ),
};
