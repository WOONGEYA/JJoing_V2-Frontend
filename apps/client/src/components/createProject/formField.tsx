import { Input, Text } from '@jjoing/ui';
import { useFormContext } from 'react-hook-form';

type FormFieldProps = {
  title: string;
  placeholder: string;
  fieldName: string;
  type?: string;
};

const FormField = ({ title, placeholder, fieldName, type = 'text' }: FormFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-1 mb-4">
      <Text type="body2">{title}</Text>
      <Input
        type={type}
        width="100%"
        placeholder={placeholder}
        min={1}
        max={10}
        {...register(fieldName)}
      />
    </div>
  );
};

export default FormField;
