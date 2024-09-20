'use client';

import { Text } from '@jjoing/ui';
import { m } from 'framer-motion';

type PromotionDetailsTypes = {
  id?: string;
  title?: string;
  explain?: string;
};

const PromotionDetails = ({ id, title, explain }: PromotionDetailsTypes) => {
  return (
    <m.div
      key={id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="w-5/6 flex items-center justify-center"
    >
      <div className="w-[68%] h-full flex flex-col gap-5">
        <Text type="body1" className="text-primary">
          {id}
        </Text>
        <span className="text-2xl font-semibold text-gray-800">{title}</span>
        <Text type="body3" className="leading-5 whitespace-pre-line">
          {explain}
        </Text>
      </div>
    </m.div>
  );
};

export default PromotionDetails;
