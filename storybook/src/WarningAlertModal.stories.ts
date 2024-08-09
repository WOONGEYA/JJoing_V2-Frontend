import type { Meta, StoryObj } from '@storybook/react';

import { WarningAlertModal } from '@jjoing/ui';

const meta = {
  title: 'WarningAlertModal',
  component: WarningAlertModal,
  tags: ['autodocs'],
} satisfies Meta<typeof WarningAlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    title: '프로젝트를 삭제하실 건가요?',
    subTitle: '한번 삭제한 프로젝트는 되돌릴 수 없어요.',
    confirmTitle: '삭제',
  },
};
