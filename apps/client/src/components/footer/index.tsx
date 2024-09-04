import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import Container from '../layouts/container';
import Wrapper from '../layouts/wrapper';

const Footer = () => {
  return (
    <Container className="bg-slate-100 h-[175px]">
      <Wrapper className="size-full flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Image src="/images/logo.svg" width={90} height={28} alt="mainLogo" priority />
          <p className="text-md mt-1">사이드 프로젝트 모집 서비스</p>
          <p className="text-sm mt-2">팀 웅이야 | 부산소프트웨어 마이스터고등학교</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <a href="https://github.com/WOONGEYA" aria-label="GitHub Repository">
            <FaGithub className="size-[53px] cursor-pointer text-gray-600" />
          </a>
          <p className="text-xs text-gray-500">
            Copyright Woong Ltd. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
