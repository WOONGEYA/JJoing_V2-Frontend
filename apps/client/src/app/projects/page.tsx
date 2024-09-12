import { Container, Wrapper } from '@/components/layouts';
import { ProjectSelectBox } from '@/components/projects';
import { ProjectOptions, ProjectsMeta, ProjectStatus } from '@/constants';
import { ProjectCard } from '@jjoing/ui';
import { FaPlus } from 'react-icons/fa6';

const ProjectsPage = () => {
  return (
    <Container className="py-10 min-h-[100vh] bg-gray-10">
      <Wrapper>
        <div className="h-[40px] mb-5 flex items-center gap-[10px]">
          <ProjectSelectBox options={ProjectStatus} />
          <ProjectSelectBox options={ProjectOptions} />
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-medium">프로젝트 목록 📋</span>
          <div className="flex items-center justify-center rounded-md bg-primary size-[35px] cursor-p">
            <FaPlus className="size-[18px] text-white" />
          </div>
        </div>
        <div className="my-5 grid grid-cols-3 gap-[25px]">
          {ProjectsMeta.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default ProjectsPage;
