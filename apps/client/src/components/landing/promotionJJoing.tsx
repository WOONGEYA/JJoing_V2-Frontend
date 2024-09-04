'use client';

import { PromotionMeta } from '@/constants/promotionMetadata';
import { Text } from '@jjoing/ui';
import { m } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, Sticker, Wrapper } from '../layouts';

const PromotionSolutionJJoing = () => {
  const [promotionClickId, setPromotionClickId] = useState('01'); // 아이디가 01 이런식이라 string 사용함

  const selectedPromotion = PromotionMeta.find(
    (promotion) => promotion.id === promotionClickId
  );

  return (
    <Container className="content-container pt-6">
      <Wrapper className="h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-start">
          <div className="flex flex-col gap-12">
            <Text size="md" color="gray">
              solutions
            </Text>
            <div className="flex flex-col gap-6">
              <span className="text-f34 font-medium text-gray-800">서비스 소개</span>
              <Text size="md" className="leading-5">
                쪼잉에서{' '}
                <Text size="md" color="primary" className="leading-5">
                  최고의 팀원과 <br /> 함께
                </Text>{' '}
                팀을 꾸려보세요!
              </Text>
            </div>
          </div>
          <m.div
            key={promotionClickId}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-5/6 flex items-center justify-center"
          >
            <div className="w-[68%] h-full flex flex-col gap-5">
              <Text color="primary">{selectedPromotion?.id}</Text>
              <span className="text-f24 font-semibold text-gray-800">
                {selectedPromotion?.title}
              </span>
              <Text size="sm" weight="medium" className="leading-5 whitespace-pre-line">
                {selectedPromotion?.explain}
              </Text>
            </div>
          </m.div>
        </div>
        <div className="h-full w-[1080px] flex">
          <div className="w-[25%] flex flex-col mt-14 gap-5">
            {PromotionMeta.map((promotion) => (
              <div
                className={`w-full ${promotion.id === promotionClickId && 'bg-primary text-white'} h-[60px] rounded-full flex items-center justify-between px-7 transition duration-50 ease-in-out cursor-pointer hover:bg-primary hover:text-white`}
                onClick={() => setPromotionClickId(promotion.id)}
                key={promotion.id}
              >
                <div className="flex gap-6">
                  <span className="font-semibold">{promotion.id}</span>
                  <span className="font-semibold">{promotion.title}</span>
                </div>
                <IoIosArrowForward className="text-white size-[22px]" />
              </div>
            ))}
          </div>
          <div className="w-[70%] flex items-center justify-center">
            <Sticker
              key={promotionClickId}
              stickerUrl={selectedPromotion?.icon as unknown as string}
              width={400}
              height={400}
            />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default PromotionSolutionJJoing;
