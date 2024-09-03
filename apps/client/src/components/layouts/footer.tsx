import { GithubIcon, MainLogo } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import Wrapper from './wrapper';

const Footer = () => {
  return (
    <Container className="bg-slate-100 h-[175px]">
      <Wrapper className="size-full flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Image src={MainLogo} width={90} height={28} alt="mainLogo" priority />
          <p className="text-md">사이드 프로젝트 모집 서비스</p>
          <p className="text-sm mt-1">팀 웅이야 | 부산소프트웨어 마이스터고등학교</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Link href="https://github.com/WOONGEYA" passHref legacyBehavior>
            <a>
              <Image
                src={GithubIcon}
                width={53}
                height={53}
                alt="githubIcon"
                loading="lazy"
              />
            </a>
          </Link>
          <p className="text-xs text-gray-500">
            Copyright Woong Ltd. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
