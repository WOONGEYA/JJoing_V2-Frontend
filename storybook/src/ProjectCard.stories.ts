import { ProjectCard } from '@jjoing/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProjectCard',
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProjectCard: Story = {
  args: {
    title: '프로젝트 할사람구함',
    imageUrl: 'https://avatars.githubusercontent.com/u/102288397?v=4',
    subTitle:
      '안녕하세요! 웅이야 입니다. 안녕하세요! 웅이야 입니다. 안녕하세요! 웅이야 입니다. 안녕하세요! 웅이야 입니다. 안녕하세요! 웅이야 입니다.',
    projectDeadline: '2024.09.13',
    maxProjectMembers: 5,
    currentProjectMembers: 3,
    viewCount: 123,
    heartCount: 13,
    onClick: () => {
      alert('상세 페이지로 이동중...');
    },
  },
};
