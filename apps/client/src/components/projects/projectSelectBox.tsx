'use client';

import type { ProjectSortOption, ProjectSortOptionState } from '@/types';
import { Text } from '@jjoing/ui';
import { Dispatch, memo, SetStateAction, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type ProjectSelectBoxProps = {
  options: ProjectSortOption[];
  setSelectedSortOption: Dispatch<SetStateAction<ProjectSortOptionState>>;
};

const ProjectSelectBox = memo(
  ({ options, setSelectedSortOption }: ProjectSelectBoxProps) => {
    const [isClickButton, setIsClickButton] = useState(false);
    const [clickButtonOption, setClickButtonOption] = useState(options[0]);

    const handleOpenAndCloseOptions = () => {
      setIsClickButton(!isClickButton);
    };

    const handleOptionClick = (option: ProjectSortOption) => {
      setClickButtonOption(option);
      setSelectedSortOption(option.state);
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
  }
);

export default ProjectSelectBox;
