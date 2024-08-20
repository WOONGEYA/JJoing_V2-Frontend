import { Flex } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFlex: Story = {
  args: {
    items: 'center',
    justify: 'center',
    direction: 'col',
    gap: '1rem',
  },

  render: (args) => {
    return (
      <Flex {...args} className="h-screen w-full bg-pink-300">
        <div className="w-full h-1/3 bg-green-500">텍스트 1</div>
        <div className="w-full h-1/3 bg-yellow-500">텍스트 2</div>
      </Flex>
    );
  },
};
