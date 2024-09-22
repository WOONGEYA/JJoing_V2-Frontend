'use client';

import { useScrollToRef } from '@/hooks';
import { Button, Text } from '@jjoing/ui';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef } from 'react';
import { BsMouse } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, Sticker, Wrapper } from '../layouts';

const InterviewJJoing = dynamic(() => import('./interviewJJoing'), {
  ssr: false,
});

const IntroduceJJoing = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const handleScroll = useScrollToRef(mouseRef);

  return (
    <>
      <Container className="content-container bg-main-gradient">
        <Wrapper className="flex h-full justify-between">
          <div className="w-[416px] flex items-center">
            <div className="w-full h-[450px] flex flex-col gap-10">
              <Text type="title1" className="text-gray-800">
                내가 원하는 <br />
                최고의 팀원과 <br />
                지금 바로
                <Text type="heading" className="text-primary ml-3">
                  쪼잉
                </Text>
                <br />
              </Text>
              <Text type="body1" className="text-gray-400">
                당신의 아이디어를 현실로 만들 팀원을 구해보세요! <br />
                쪼잉은 더 나은 프로젝트 경험을 위해 시작되었습니다.
              </Text>
              <Link href="/projects">
                <Button bgColor="borderPrimary" width={140} height="h50" rounded="full">
                  <span className="flex items-center gap-[2px] text-xl font-medium">
                    시작하기 <IoIosArrowForward />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-end mb-8">
            <div className="flex flex-col items-center gap-3" onClick={handleScroll}>
              <div className="flex items-center justify-center rounded-[50%] size-12 bg-gray-100 cursor-pointer bounce">
                <BsMouse className="size-[25px] text-gray-400" />
              </div>
              <Text className="text-xs text-gray-400">스크롤을 내려주세요.</Text>
            </div>
          </div>
          <div className="w-[400px] flex items-end justify-end">
            <Sticker stickerUrl="/images/imagine-icon.webp" width={360} height={364} />
          </div>
        </Wrapper>
      </Container>
      <InterviewJJoing mouseRef={mouseRef} />
    </>
  );
};

export default IntroduceJJoing;
