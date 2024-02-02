import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Example: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit sapiente nulla unde aliquam
          explicabo, ipsum earum non deleniti officiis.
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
