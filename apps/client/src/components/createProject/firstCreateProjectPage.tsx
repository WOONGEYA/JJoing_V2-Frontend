import type { OverlayModal } from '@/types';
import { Button, Input, Text, Textarea } from '@jjoing/ui';
import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

type FirstCreateProjectPageProps = Omit<OverlayModal, 'open'>;

const FirstCreateProjectPage = ({ close }: FirstCreateProjectPageProps) => {
  const { register, setValue } = useFormContext();
  const today = dayjs().format().slice(0, 10);

  const handleNextPage = () => setValue('page', 1);

  return (
    <div className="bg-white size-full p-7 rounded-xl">
      <div className="flex items-center justify-between mb-5">
        <Text type="body1">프로젝트 생성하기 🖨</Text>
        <IoClose onClick={close} className="size-7 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">프로젝트 이름</Text>
        <Input
          width="100%"
          placeholder="프로젝트 이름을 알려주세요."
          {...register('projectName')}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">모집 인원</Text>
        <Input
          min="2"
          max="10"
          width="100%"
          placeholder="모집 인원을 알려주세요."
          {...register('recruitMember')}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">모집 기한</Text>
        <div className="flex gap-2">
          <Input
            width="100%"
            value={today}
            placeholder="모집 시작 시간을 알려주세요."
            {...register('startDate')}
            readOnly
          />
          <Input
            width="100%"
            placeholder="모집 종료 시간을 알려주세요."
            type="date"
            {...register('endDate')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">모집 분야</Text>
        <Input
          width="100%"
          placeholder="모집 분야를 알려주세요."
          {...register('projectField')}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">프로젝트 설명</Text>
        <Textarea
          placeholder="프로젝트를 설명해주세요."
          {...register('projectExplain')}
        />
      </div>
      <div className="flex justify-end">
        <Button height="h45" width={100} onClick={handleNextPage}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default FirstCreateProjectPage;
