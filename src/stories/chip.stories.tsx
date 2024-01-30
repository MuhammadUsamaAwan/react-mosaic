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

export const DefaultChip: Story = {
  args: {
    children: 'Chip',
  },
};

export const SuccessChip: Story = {
  args: {
    variant: 'success',
    children: 'Chip',
  },
};

export const WarningChip: Story = {
  args: {
    variant: 'warning',
    children: 'Chip',
  },
};

export const DestructiveChip: Story = {
  args: {
    variant: 'destructive',
    children: 'Chip',
  },
};

export const OutlineChip: Story = {
  args: {
    variant: 'outline',
    children: 'Chip',
  },
};

export const SecondaryChip: Story = {
  args: {
    variant: 'secondary',
    children: 'Chip',
  },
};
