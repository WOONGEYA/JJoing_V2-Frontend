import type { ProjectSortOptionState } from './projectSortOptionState';

export type ProjectSortOption = {
  id: number;
  content: string;
  state?: ProjectSortOptionState;
};
