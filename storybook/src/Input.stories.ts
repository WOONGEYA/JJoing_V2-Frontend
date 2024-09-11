import { Input } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    color: {
      control: 'inline-check',
      options: ['primary', 'secondary', 'white', 'black', 'gray'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    width: '100%',
    placeholder: '내용을 입력해주세요.',
  },
};
