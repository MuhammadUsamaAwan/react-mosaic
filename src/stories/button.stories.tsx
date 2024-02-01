import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/button';
import { Icons } from '~/components/icons';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Normal: Story = {
  args: {
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <Icons.terminal className='size-4' aria-label='button' />,
  },
};
