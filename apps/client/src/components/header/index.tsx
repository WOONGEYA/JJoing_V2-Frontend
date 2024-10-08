import { Text } from '@jjoing/ui';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Wrapper } from '../layouts';

const Header = () => {
  return (
    <Container className="border-b bg-white z-50 fixed">
      <Wrapper className="h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image
              className="cursor-p"
              src="/images/logo.svg"
              width={80}
              height={25}
              alt="img"
            />
          </Link>
          <Text type="body2" className="cursor-p">
            프로젝트 목록
          </Text>
          <Text type="body2" className="cursor-p">
            채팅 목록
          </Text>
          <Text type="body2" className="cursor-p">
            게시판
          </Text>
        </div>
        <div className="flex items-center gap-6 ">
          <Image
            className="cursor-p"
            src="/images/alarm-icon.svg"
            width={22}
            height={22}
            alt="alarm"
          />
          <Link href="/user/123">
            <div className="rounded-[50%] bg-gray-500 size-9 cursor-p" />
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
