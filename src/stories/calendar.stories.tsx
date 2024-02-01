import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '~/components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Example: Story = {
  args: {
    mode: 'single',
  },
};
