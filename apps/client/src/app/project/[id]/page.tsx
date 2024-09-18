import { Container, Wrapper } from '@/components/layouts';
import { ProjectMemberList, ProjectRecruitInfo } from '@/components/project';
import { ProjectDetailMeta } from '@/constants';
import { Button, Text } from '@jjoing/ui';
import Image from 'next/image';
import { IoPeople } from 'react-icons/io5';

const ProjectPage = () => {
  return (
    <Container className="py-10 min-h-[100vh] bg-gray-10">
      <Wrapper>
        <div className="flex gap-6 h-[400px] border-b pb-5">
          <Image
            src={ProjectDetailMeta.imageUrl}
            width={480}
            height={370}
            alt="project-image"
            className="w-1/2 bg-gray-300 rounded-lg"
          />
          <div className="w-1/2 flex flex-col gap-3">
            <ProjectRecruitInfo {...ProjectDetailMeta} />
            <div className="flex items-center gap-[5px]">
              <IoPeople className="size-[18px]" />
              <Text>멤버</Text>
            </div>
            <ProjectMemberList
              includedMemberImageUrl={ProjectDetailMeta.includedMemberImageUrl}
            />
            <Button height="h50">수정하기</Button>
            <Button height="h50" bgColor="secondary">
              모집 마감하기
            </Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ProjectPage;
