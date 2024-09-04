import { InterviewMeta } from '@/constants';
import { Text } from '@jjoing/ui';
import { RefObject } from 'react';
import { Container, Wrapper } from '../layouts';
import InterviewCard from './interviewCard';

type InterviewJJoingProps = {
  mouseRef: RefObject<HTMLDivElement>;
};

const InterviewJJoing = ({ mouseRef }: InterviewJJoingProps) => {
  return (
    <Container className="h-[100vh] bg-white">
      <Wrapper
        className="h-full flex flex-col items-center justify-center gap-8"
        ref={mouseRef}
      >
        <Text size="md" color="gray">
          Interview
        </Text>
        <Text size="lg" className="text-center">
          프로젝트를 함께 할 팀원, 찾기 어렵고 먼저 연락하기 망설여진 적이 있나요? <br />
          <Text weight="medium" color="primary">
            팀원을 구할 때 느꼈던 불편한 점
          </Text>
          에 대해 물어보았습니다.
        </Text>
        <div className="h-[380px] mt-10 w-[1082px] grid grid-cols-3 gap-[20px] items-center">
          {InterviewMeta.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default InterviewJJoing;
