'use client';

import { cn, Input, ProjectCard } from '@jjoing/ui';
import { IoSearch } from 'react-icons/io5';
import { useSearchProcessingProject } from './userProjectContainer.hooks';

const UserProjectContainer = () => {
  const { searchProcessingProject, handleSeachOptions } = useSearchProcessingProject();

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="w-full flex justify-between items-end">
        <div className="flex w-[30%] h-fit relative shadow-[inset_0_-1px_0_#ADB5BD]">
          <div
            onClick={handleSeachOptions}
            className={cn(
              'w-1/2 p-2 text-center text-gray-20 cursor-pointer duration-200 hover:shadow-[inset_0_-2px_0_#ADB5BD]',
              searchProcessingProject && 'shadow-[inset_0_-2px_0_#2F9266] text-primary'
            )}
          >
            참여중인 프로젝트
          </div>
          <div
            onClick={handleSeachOptions}
            className={cn(
              'w-1/2 p-2 text-center text-gray-20 cursor-pointer duration-200 hover:shadow-[inset_0_-2px_0_#ADB5BD]',
              !searchProcessingProject && 'shadow-[inset_0_-2px_0_#2F9266] text-primary'
            )}
          >
            참여했던 프로젝트
          </div>
        </div>
        <Input
          color="black"
          border="none"
          placeholder="검색어를 입력해주세요."
          className="shadow-[1px_1px_4px_#ADB5BD] rounded-md"
        >
          <IoSearch color="#ADB5BD" />
        </Input>
      </div>
      <div className="w-full grid grid-cols-3 justify-items-center gap-7">
        {Array.from({ length: 20 }).map((_: any, i: any) => (
          <ProjectCard
            title="wefewf"
            subTitle="efwefe"
            projectDeadline="20202020"
            maxProjectMembers={5}
            currentProjectMembers={3}
            key={`project-${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default UserProjectContainer;
