import { Input, Text } from '@jjoing/ui';
import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

const RecruitPeriodField = () => {
  const { register } = useFormContext();
  const today = dayjs().format().slice(0, 10);

  return (
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
  );
};

export default RecruitPeriodField;
