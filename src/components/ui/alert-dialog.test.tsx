import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';

describe('Alert Dialog', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should open when button is clicked', () => {
    const wrapper = render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline' data-testid='button'>
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent data-testid='dialog'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    fireEvent.click(wrapper.getByTestId('button'));
    expect(wrapper.getByTestId('dialog')).toBeInTheDocument();
  });

  it('should close when action buttons are clicked', () => {
    const wrapper = render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline' data-testid='button'>
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent data-testid='dialog'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid='cancel'>Cancel</AlertDialogCancel>
            <AlertDialogAction data-testid='action'>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    fireEvent.click(wrapper.getByTestId('button'));
    fireEvent.click(wrapper.getByTestId('cancel'));
    expect(wrapper.queryByTestId('dialog')).not.toBeInTheDocument();
    fireEvent.click(wrapper.getByTestId('button'));
    fireEvent.click(wrapper.getByTestId('action'));
    expect(wrapper.queryByTestId('dialog')).not.toBeInTheDocument();
  });
});
