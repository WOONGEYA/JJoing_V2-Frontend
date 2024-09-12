import { Textarea } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    color: {
      control: 'inline-check',
      options: ['primary', 'secondary', 'white', 'black', 'gray'],
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextarea: Story = {
  args: {
    children: '안녕하세요',
    height: 200,
  },
};
