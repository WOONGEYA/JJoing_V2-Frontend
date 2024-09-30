import { Button } from '@jjoing/ui';
import ExplainField from './explainField';
import FormArrayField from './formArrayField';
import FormField from './formField';
import RecruitPeriodField from './recruitPeriodField';

type FirstCreateProjectBoxProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const FirstCreateProjectBox = ({ setPage }: FirstCreateProjectBoxProps) => {
  const handleNextPage = () => setPage(1);

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
      <FormArrayField
        title="모집 분야"
        placeholder="예시) 디자이너, 백엔드 (엔터로 구분해 주세요!)"
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
