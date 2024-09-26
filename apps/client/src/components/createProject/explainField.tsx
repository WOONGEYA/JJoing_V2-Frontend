import { Text, Textarea } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';

const ExplainField = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-1 mb-4">
      <Text type="body2">프로젝트 설명</Text>
      <Textarea placeholder="프로젝트를 설명해주세요." {...register('projectExplain')} />
    </div>
  );
};

export default ExplainField;
