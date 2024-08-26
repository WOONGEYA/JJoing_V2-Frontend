import Text from '@/Text';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { FaEye } from 'react-icons/fa6';
import { FiHeart } from 'react-icons/fi';
import { IoPeopleSharp } from 'react-icons/io5';

type ProjectCardProps = {
  imageUrl?: string;
  title: string;
  subTitle: string;
  projectDeadline: string;
  maxProjectMembers: number;
  currentProjectMembers: number;
  viewCount?: number;
  heartCount?: number;
  onClick?: () => void;
};

const ProjectCard = forwardRef(function ProjectCard(
  {
    imageUrl,
    title,
    subTitle,
    projectDeadline,
    maxProjectMembers,
    currentProjectMembers,
    viewCount = 0,
    heartCount = 0,
    onClick,
  }: ProjectCardProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="size-[328px] border border-gray-300 bg-white rounded-lg" ref={ref}>
      <div
        onClick={onClick}
        className="flex items-center justify-center h-[190px] rounded-t-lg border-b-[1.5px] border-b-gray-300 cursor-pointer overflow-hidden"
      >
        <div className={`relative size-full rounded-t-lg ${!imageUrl && 'bg-gray-200'}`}>
          {imageUrl && (
            <img
              className="size-full rounded-t-lg object-cover transform hover:scale-110 transition-transform duration-200 ease-in-out"
              src={imageUrl.replace(/\.(jpg|png)$/, '.webp')}
            />
          )}
        </div>
      </div>
      <div className="h-[138px] rounded-b-lg px-3 py-2 flex flex-col justify-between">
        <div onClick={onClick} className="cursor-pointer">
          <Text size="md" weight="medium" className="truncate">
            {title}
          </Text>
          <Text size="xs" className="line-clamp-2 text-gray-500 mt-[2px]">
            {subTitle}
          </Text>
        </div>
        <div className="flex justify-between mb-1">
          <div className="flex items-center px-2 py-1 border border-blue-500 rounded-md bg-blue-50">
            <Text size="xs">{projectDeadline}</Text>
          </div>
          <div className="flex gap-5 text-secondary">
            <div className="flex items-center gap-1">
              <IoPeopleSharp />
              <Text size="sm">
                {currentProjectMembers}/{maxProjectMembers}
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <Text size="sm">{viewCount}</Text>
            </div>
            <div className="flex items-center gap-1">
              <FiHeart className="mt-[0.5px]" />
              <Text size="sm">{heartCount}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
