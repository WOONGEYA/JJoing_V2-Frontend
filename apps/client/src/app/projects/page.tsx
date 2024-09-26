'use client';

import CreateProject from '@/components/createProject';
import { Container, Wrapper } from '@/components/layouts';
import { ProjectList, ProjectSelectBox } from '@/components/projects';
import { ProjectRecruitOptions, ProjectRecruitStatus } from '@/constants';
import { useOverlay } from '@toss/use-overlay';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const ProjectsPage = () => {
  const [projectStatus, setProjectStatus] = useState(ProjectRecruitStatus[0]?.state);
  const [projectOptions, setProjectOptions] = useState(ProjectRecruitOptions[0]?.state);

  console.log(projectStatus, projectOptions); // 백엔드로 요청보낼때 사용될 코드s

  const overlay = useOverlay();

  const handleOpenCreateProject = () => {
    overlay.open(({ isOpen, close }) => <CreateProject open={isOpen} close={close} />);
  };

  return (
    <Container className="py-10 min-h-[100dvh] bg-gray-10">
      <Wrapper>
        <div className="h-[40px] mb-5 flex items-center gap-[10px]">
          <ProjectSelectBox
            options={ProjectRecruitStatus}
            setSelectedSortOption={setProjectStatus}
          />
          <ProjectSelectBox
            options={ProjectRecruitOptions}
            setSelectedSortOption={setProjectOptions}
          />
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-medium">프로젝트 목록 📋</span>
          <div
            onClick={handleOpenCreateProject}
            className="flex items-center justify-center rounded-md bg-primary size-[35px] cursor-pointer hover:bg-primaryHover transition duration-150"
          >
            <FaPlus className="size-[18px] text-white" />
          </div>
        </div>
        <ProjectList />
      </Wrapper>
    </Container>
  );
};

export default ProjectsPage;
