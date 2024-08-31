import { Text } from '@jjoing/ui';
import { RefObject } from 'react';
import { Container, Wrapper } from '../layouts';

type InterviewJJoingProps = {
  mouseRef: RefObject<HTMLDivElement>;
};

const InterviewJJoing = ({ mouseRef }: InterviewJJoingProps) => {
  return (
    <Container className="content-container">
      <Wrapper
        className="h-full bg-orange-100 flex items-center justify-center"
        ref={mouseRef}
      >
        <Text>Interview</Text>
      </Wrapper>
    </Container>
  );
};

export default InterviewJJoing;
