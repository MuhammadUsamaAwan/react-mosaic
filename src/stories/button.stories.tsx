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

export const DefaultButton: Story = {
  args: {
    children: 'Button',
  },
};

export const SuccessButton: Story = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};

export const WarningButton: Story = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const DestructiveButton: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const OutlineButton: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const GhostButton: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const LinkButton: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
};

export const LargeButton: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const NormalButton: Story = {
  args: {
    children: 'Button',
  },
};

export const SmallButton: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <Icons.terminal className='size-4' aria-label='button' />,
  },
};
