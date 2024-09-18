import { Text } from '@jjoing/ui';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoPeople, IoTrashOutline } from 'react-icons/io5';

type ProjectRecruitInfoProps = {
  title: string;
  recruitDeadline: string;
  includedMember: number;
  recruitMemberCounts: number;
};

const ProjectRecruitInfo = ({
  title,
  recruitDeadline,
  includedMember,
  recruitMemberCounts,
}: ProjectRecruitInfoProps) => {
  return (
    <div className="h-[200px] flex flex-col gap-6">
      <div className="flex items-center justify-between mt-2">
        <Text type="title2">{title}</Text>
        <IoTrashOutline className="size-[19px] text-red-500 cursor-p" />
      </div>
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-[5px]">
              <FaRegCalendarAlt className="size-[15px]" />
              <Text>모집 기한</Text>
            </div>
            <Text className="whitespace-nowrap text-gray-500">{recruitDeadline}</Text>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-[5px]">
            <IoPeople className="size-[18px]" />
            <Text>모집 인원</Text>
          </div>
          <Text className="text-gray-500">
            {includedMember}/{recruitMemberCounts}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProjectRecruitInfo;
