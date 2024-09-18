import { Container, Wrapper } from '@/components/layouts';
import { ProjectList, ProjectSelectBox } from '@/components/projects';
import { ProjectRecruitOptions, ProjectRecruitStatus } from '@/constants';
import { FaPlus } from 'react-icons/fa6';

const ProjectsPage = () => {
  return (
    <Container className="py-10 min-h-[100vh] bg-gray-10">
      <Wrapper>
        <div className="h-[40px] mb-5 flex items-center gap-[10px]">
          <ProjectSelectBox options={ProjectRecruitStatus} />
          <ProjectSelectBox options={ProjectRecruitOptions} />
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-medium">프로젝트 목록 📋</span>
          <div className="flex items-center justify-center rounded-md bg-primary size-[35px] cursor-p hover:bg-primaryHover transition duration-15">
            <FaPlus className="size-[18px] text-white" />
          </div>
        </div>
        <ProjectList />
      </Wrapper>
    </Container>
  );
};

export default ProjectsPage;
