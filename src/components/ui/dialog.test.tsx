import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

describe('Dialog', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Dialog>
        <DialogTrigger>Edit Profile</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit sapiente nulla unde aliquam
            explicabo, ipsum earum non deleniti officiis.
          </div>
          <DialogFooter>Save changes</DialogFooter>
        </DialogContent>
      </Dialog>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should open when button is clicked', () => {
    const wrapper = render(
      <Dialog>
        <DialogTrigger data-testid='button'>Edit Profile</DialogTrigger>
        <DialogContent data-testid='dialog'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit sapiente nulla unde aliquam
            explicabo, ipsum earum non deleniti officiis.
          </div>
          <DialogFooter>Save changes</DialogFooter>
        </DialogContent>
      </Dialog>
    );
    fireEvent.click(wrapper.getByTestId('button'));
    expect(wrapper.getByTestId('dialog')).toBeInTheDocument();
  });
});
