import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '~/components/ui/chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Chip',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Chip',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Chip',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Chip',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Chip',
  },
};
