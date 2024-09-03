'use client';

import { Text } from '@jjoing/ui';
import { m } from 'framer-motion';
import Image from 'next/image';

type InterviewCardProps = {
  id: number;
  name: string;
  developmentField: string;
  inconvenience: string;
  needs: string[];
  icon: string;
};

const InterviewCard = ({
  id,
  name,
  developmentField,
  inconvenience,
  needs,
  icon,
}: InterviewCardProps) => {
  const inconvenienceText = inconvenience.split('\n');

  return (
    <m.div
      className="border-2 border-lightPrimary w-[349px] h-[327px] rounded-3xl p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay: id * 0.1 }}
    >
      <div className="flex border-b pb-3 border-gray-300 h-[185px]">
        <div className="w-3/5 flex flex-col justify-evenly gap-5 mb-4">
          <div className="flex flex-col gap-[2px]">
            <Text size="md" weight="semibold">
              {name}
            </Text>
            <Text size="sm" weight="medium">
              {developmentField}
            </Text>
          </div>
          <Text weight="medium" size="lg" className="leading-6">
            "{inconvenienceText[0]}
            <br />
            {inconvenienceText[1]}"
          </Text>
        </div>
        <Image src={icon} width={94} height={140} alt="icon" />
      </div>
      <div className="h-[100px] pt-3 flex flex-col">
        <Text size="md" className="mb-3">
          NEEDS
        </Text>
        <ul className="md:list-disc">
          {needs.map((need, index) => (
            <li className="ml-6 mt-1" key={index}>
              {need}
            </li>
          ))}
        </ul>
      </div>
    </m.div>
  );
};

export default InterviewCard;
