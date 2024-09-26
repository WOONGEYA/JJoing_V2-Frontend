import { Button } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';
import FormField from './formField';

const SecondCreateProjectBox = () => {
  const { setValue } = useFormContext();

  const handlePrevPage = () => setValue('page', 0);

  return (
    <>
      <FormField
        title="분위기 유형"
        placeholder="개발 분위기를 알려주세요."
        fieldName="mood"
      />
      <FormField
        title="사용 기술"
        placeholder="사용할 기술을 알려주세요."
        fieldName="developSkills"
      />
      <FormField
        title="협업 툴"
        placeholder="협업툴을 알려주세요."
        fieldName="developTools"
      />
      <div className="flex justify-between">
        <Button height="h45" width={100} bgColor="primary" onClick={handlePrevPage}>
          이전
        </Button>
        <Button height="h45" width={100}>
          제출
        </Button>
      </div>
    </>
  );
};

export default SecondCreateProjectBox;
