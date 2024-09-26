import type { OverlayModal } from '@/types';
import { Button, Input, Text } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

type SecondCreateProjectPageProps = Omit<OverlayModal, 'open'>;

const SecondCreateProjectPage = ({ close }: SecondCreateProjectPageProps) => {
  const { register, setValue } = useFormContext();

  const handlePrevPage = () => setValue('page', 1);

  return (
    <div className="bg-white size-full p-7 rounded-xl">
      <div className="flex items-center justify-between mb-5">
        <Text type="body1">프로젝트 생성하기 🖨</Text>
        <IoClose onClick={close} className="size-7 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">분위기 유형</Text>
        <Input
          width="100%"
          placeholder="개발 분위기를 알려주세요."
          {...register('mood')}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">사용 기술</Text>
        <Input
          width="100%"
          placeholder="사용할 기술을 알려주세요."
          {...register('developSkills')}
        />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">협업 툴</Text>
        <Input
          width="100%"
          placeholder="협업툴을 알려주세요."
          {...register('developTools')}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <Text type="body2">협업 툴</Text>
        <Input width="100%" placeholder="협업툴을 알려주세요." {...register('image')} />
      </div>
      <div className="flex justify-between">
        <Button height="h45" width={100} onClick={handlePrevPage}>
          이전
        </Button>
        <Button height="h45" width={100}>
          제출
        </Button>
      </div>
    </div>
  );
};

export default SecondCreateProjectPage;
