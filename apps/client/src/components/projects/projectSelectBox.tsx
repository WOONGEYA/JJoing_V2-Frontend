'use client';

import { ProjectSortOption } from '@/types';
import { Text } from '@jjoing/ui';
import { memo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type ProjectSelectBoxProps = {
  options: ProjectSortOption[];
};

const ProjectSelectBox = memo(({ options }: ProjectSelectBoxProps) => {
  const [isClickButton, setIsClickButton] = useState(false);
  const [clickButtonOption, setClickButtonOption] = useState(options[0]); // 백엔드로 요청할때는 id를 넘겨야 하므로 객체를 기본값으로 가짐

  const handleOpenAndCloseOptions = () => {
    setIsClickButton(!isClickButton);
  };

  const handleOptionClick = (option: ProjectSortOption) => {
    setClickButtonOption(option);
    setIsClickButton(false);
  };

  return (
    <div className="flex flex-col gap-5 relative">
      <button
        className="w-[150px] h-[40px] px-3 border border-gray-300 focus:border-gray-400 rounded-md bg-white flex items-center justify-between transition duration-30"
        onClick={handleOpenAndCloseOptions}
      >
        <Text type="body3">{clickButtonOption?.content}</Text>
        {isClickButton ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isClickButton && (
        <div className="absolute top-[45px] w-full border rounded-md border-gray-300 bg-white z-10">
          {options.map((option) => (
            <div
              className="w-full h-[40px] px-3 flex items-center cursor-p rounded-md hover:bg-gray-100 transition duration-30"
              onClick={() => handleOptionClick(option)}
              key={option.id}
            >
              <Text type="body3">{option.content}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default ProjectSelectBox;
