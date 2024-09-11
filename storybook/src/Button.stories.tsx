import { Button } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    bgColor: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'gray', 'borderPrimary', 'borderSecondary'],
    },
    rounded: {
      control: 'inline-radio',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    width: {
      control: 'inline-radio',
      options: ['full'],
    },
    height: {
      control: 'inline-radio',
      options: ['h64', 'h55', 'h50'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    ...DefaultButton.args,
    bgColor: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...DefaultButton.args,
    bgColor: 'secondary',
  },
};

export const BorderPrimary: Story = {
  args: {
    ...DefaultButton.args,
    bgColor: 'borderPrimary',
  },
};

export const BorderSecondary: Story = {
  args: {
    ...DefaultButton.args,
    bgColor: 'borderSecondary',
  },
};
