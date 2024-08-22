import { Input } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    width: 300,
    color: 'black',
    placeholder: '협업툴을 입력해주세요',
  },
};
