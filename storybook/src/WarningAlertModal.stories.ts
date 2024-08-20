import { WarningAlertModal } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WarningAlertModal',
  component: WarningAlertModal,
  tags: ['autodocs'],
} satisfies Meta<typeof WarningAlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    actionType: 'DELETE_PROJECT',
    onConfirm: () => {
      alert('프로젝트가 삭제되었습니다.');
    },
    onCancel: () => {
      console.log('프로젝트 삭제가 취소되었습니다.');
    },
  },
};
