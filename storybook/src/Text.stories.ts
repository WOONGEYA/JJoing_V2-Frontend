import { Text } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    type: {
      control: 'inline-check',
      options: ['heading', 'title1', 'title2', 'body1', 'body2', 'body3'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    children: '안녕하세요',
  },
};
