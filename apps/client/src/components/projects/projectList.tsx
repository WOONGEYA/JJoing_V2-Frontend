import { ProjectsMeta } from '@/constants';
import { ProjectCard } from '@jjoing/ui';
import Link from 'next/link';

const ProjectList = () => {
  return (
    <div className="my-5 grid grid-cols-3 gap-[25px]">
      {ProjectsMeta.map((project) => (
        <Link href={`/project/${project.id}`} prefetch key={project.id}>
          <ProjectCard {...project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
