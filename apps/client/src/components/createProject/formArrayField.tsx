import { Button, Input, Text } from '@jjoing/ui';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

type FormFieldProps = {
  title: string;
  placeholder: string;
  fieldName: string;
};

const FormArrayField = ({ title, placeholder, fieldName }: FormFieldProps) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();

      const newValue = e.currentTarget.value;

      append({ value: newValue });
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      <Text type="body2">{title}</Text>
      <Input width="100%" onKeyDown={handleKeyDown} placeholder={placeholder} />
      <div className="mt-2 flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {fields.map((item: any) => (
          <Button
            bgColor="borderGray"
            rounded="full"
            height="h40"
            className="px-4 flex items-center"
            style={{ width: 'auto !important' }} // Button 기본 넓이가 100%라서 강제로 넓이 스타일 적용해줬음 (120px 이런식으로 넣으면 auto가 안됨)
            key={item.id}
          >
            {item.value}
            <IoClose onClick={() => remove(item.id)} className="ml-1 cursor-pointer" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FormArrayField;
