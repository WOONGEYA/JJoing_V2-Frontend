import ImagineProject from '@/assets/images/ImagineProject-icon.svg';
import { Container, Wrapper } from '@/components/layouts';
import { Text } from '@jjoing/ui';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Container className="content-container bg-main-gradient">
      <Wrapper className="flex h-full">
        <div className="w-2/3 flex items-center">
          <div className="w-full h-4/5">
            <Text size="xl" weight="medium">
              내가 원하는 최고의 <br />
              팀원과 <br />
              지금 바로{' '}
              <Text size="xxl" className="text-primary">
                쪼잉
              </Text>
              <br />
            </Text>
          </div>
        </div>
        <div className="w-1/3 flex items-end justify-end">
          <Image src={ImagineProject} width={500} height={500} alt="imagineProject" />
        </div>
      </Wrapper>
    </Container>
  );
}
