'use client';

import { ImagineProjectIcon, MouseIcon } from '@/assets/images';
import { Button, Text } from '@jjoing/ui';
import Image from 'next/image';
import { useRef } from 'react';
import { Container, Sticker, Wrapper } from '../layouts';
import InterviewJJoing from './interviewJJoing';

const IntroduceJJoing = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (mouseRef.current) mouseRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container className="content-container bg-main-gradient">
        <Wrapper className="flex h-full justify-between">
          <div className="w-[416px] flex items-center">
            <div className="w-full h-[450px] flex flex-col gap-10">
              <Text color="gray800" size="xl" weight="semibold">
                내가 원하는 <br />
                최고의 팀원과 <br />
                지금 바로
                <Text size="xxl" weight="bold" color="primary" className="ml-3">
                  쪼잉
                </Text>
                <br />
              </Text>
              <Text size="lg" color="gray">
                당신의 아이디어를 현실로 만들 팀원을 구해보세요! <br />
                쪼잉은 더 나은 프로젝트 경험을 위해 시작되었습니다.
              </Text>
              <Button outline={true} round="3xl" size="md">
                <Text>시작하기 {'>'}</Text>
              </Button>
            </div>
          </div>
          <div className="flex items-end mb-8">
            <div className="flex flex-col items-center gap-3" onClick={handleScroll}>
              <div className="flex items-center justify-center rounded-[50%] size-12 bg-gray-100 cursor-pointer bounce">
                <Image src={MouseIcon} width={20} height={20} alt="mouse-icon" />
              </div>
              <Text size="xs" color="gray400">
                스크롤을 내려주세요.
              </Text>
            </div>
          </div>
          <div className="w-[400px] flex items-end justify-end">
            <Sticker stickerUrl={ImagineProjectIcon} width={395} height={382} />
          </div>
        </Wrapper>
      </Container>
      <InterviewJJoing mouseRef={mouseRef} />
    </>
  );
};

export default IntroduceJJoing;
