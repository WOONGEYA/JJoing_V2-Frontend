import { Button } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';
import ExplainField from './explainField';
import FormField from './formField';
import RecruitPeriodField from './recruitPeriodField';

const FirstCreateProjectBox = () => {
  const { register, setValue } = useFormContext();

  const handleNextPage = () => setValue('page', 1);

  return (
    <>
      <FormField
        title="프로젝트 이름"
        placeholder="프로젝트 이름을 알려주세요."
        fieldName="projectName"
      />
      <FormField
        title="모집 인원"
        placeholder="모집 인원을 알려주세요."
        fieldName="recruitMember"
        type="number"
      />
      <RecruitPeriodField />
      <FormField
        title="모집 분야"
        placeholder="모집 분야를 알려주세요."
        fieldName="projectField"
      />
      <ExplainField />
      <div className="flex justify-end">
        <Button height="h45" width={100} onClick={handleNextPage}>
          다음
        </Button>
      </div>
    </>
  );
};

export default FirstCreateProjectBox;
