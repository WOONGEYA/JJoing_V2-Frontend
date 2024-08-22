import { Text } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: '웅이야',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    size: 'md',
    color: 'secondary',
    weight: 'semibold',
  },
};
