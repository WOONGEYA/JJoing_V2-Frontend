import { Button } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';
import FormArrayField from './formArrayField';

const SecondCreateProjectBox = () => {
  const { setValue } = useFormContext();

  const handlePrevPage = () => setValue('page', 0);

  return (
    <>
      <FormArrayField
        title="분위기 유형"
        placeholder="예시) 묵묵한, 충실한 (엔터로 구분해 주세요!)"
        fieldName="mood"
      />
      <FormArrayField
        title="사용 기술"
        placeholder="예시) 리액트, 노드 (엔터로 구분해 주세요!)"
        fieldName="developSkills"
      />
      <FormArrayField
        title="협업 툴"
        placeholder="예시) vsCode, intellij (엔터로 구분해 주세요!)"
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
