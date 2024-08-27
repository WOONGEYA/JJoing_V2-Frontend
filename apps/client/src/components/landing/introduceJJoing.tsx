import ImagineProject from '@/assets/images/ImagineProject-icon.svg';
import { Button, Text } from '@jjoing/ui';
import { Container, Sticker, Wrapper } from '../layouts';

const IntroduceJJoing = () => {
  return (
    <Container className="content-container bg-main-gradient">
      <Wrapper className="flex h-full justify-between">
        <div className="w-[416px] flex items-center">
          <div className="w-full h-[450px] flex flex-col gap-10">
            <Text color="darkGray" size="xl" weight="semibold">
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
              <Text color="darkGray">시작하기 {'>'}</Text>
            </Button>
          </div>
        </div>
        <div className="w-[400px] flex items-end justify-end">
          <Sticker stickerUrl={ImagineProject} width={395} height={382} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default IntroduceJJoing;
