import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const SingleModeAccordion: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
};
