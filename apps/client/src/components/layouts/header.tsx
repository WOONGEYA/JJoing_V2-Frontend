import alarm from '@/assets/images/alarm.svg';
import mainLogo from '@/assets/images/logo.svg';
import { Text } from '@jjoing/ui';
import Image from 'next/image';
import Container from './container';
import Wrapper from './wrapper';

const Header = () => {
  return (
    <Container className="border-b">
      <Wrapper className="h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Image className="cursor-p" src={mainLogo} width={80} height={25} alt="img" />
          <Text className="cursor-p">프로젝트 목록</Text>
          <Text className="cursor-p">새 프로젝트</Text>
          <Text className="cursor-p">게시판</Text>
        </div>
        <div className="flex items-center gap-5">
          <Image className="cursor-p" src={alarm} width={22} height={22} alt="alarm" />
          <div className="rounded-[50%] bg-gray-500 size-9 cursor-p"></div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
