import { Text } from '@jjoing/ui';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IoFolderOpenOutline } from 'react-icons/io5';

const ImageField = () => {
  const { register } = useFormContext();
  const [previewImage, setPreviewImage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      <Text type="body2">모집 기한</Text>
      <div
        className="bg-gray-50 w-full h-60 dashed-border rounded-lg flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: previewImage && `url(${previewImage})` }}
      >
        <input
          type="file"
          accept="image/*"
          {...register('image', {
            onChange: handleChange,
          })}
          className="size-full absolute opacity-0 cursor-pointer"
        />
        {!previewImage && (
          <div className="flex flex-col gap-3 justify-center items-center">
            <IoFolderOpenOutline className="text-gray-300 size-16" />
            <Text className="text-gray-300">
              이미지를 드래그 앤 드롭 또는 직접 업로드를 해주세요.
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageField;
