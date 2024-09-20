import type { ProjectSortOption } from '@/types';

export const ProjectRecruitOptions: ProjectSortOption[] = [
  {
    id: 0,
    content: '최신순',
    state: '',
  },
  {
    id: 1,
    content: '조회수 많은 순',
    state: 'view',
  },
  {
    id: 2,
    content: '좋아요 많은 순',
    state: 'like',
  },
];
