import { Textarea } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    children: '웅이야',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextarea: Story = {
  args: {},
};
