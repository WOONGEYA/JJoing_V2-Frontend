import { Spinner } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'inline-check',
      options: ['lg', 'md', 'sm'],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSpinner: Story = {
  args: {
    size: 'md',
  },
};
