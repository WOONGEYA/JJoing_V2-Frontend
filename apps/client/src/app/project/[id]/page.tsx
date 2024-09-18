import { Container, Wrapper } from '@/components/layouts';
import { ProjectCategoryBox, ProjectRecruitInfo } from '@/components/project';
import ProjectMemberList from '@/components/project/projectMemberList';
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
            <Button height="h55">수정하기</Button>
            <Button height="h55" bgColor="secondary">
              모집 마감하기
            </Button>
          </div>
        </div>
        <div className="pt-12 flex flex-col gap-6">
          <Text type="title2">📋 프로젝트 설명</Text>
          <span className="text-lg">{ProjectDetailMeta.subTitle}</span>
          <div className="mt-16 flex flex-col">
            <Text type="title2" className="mb-6">
              💻 업무 카테고리
            </Text>
            <ProjectCategoryBox
              title="개발 분위기"
              emoji="👨‍👩‍👧‍👦"
              items={ProjectDetailMeta.developVibe}
            />
            <ProjectCategoryBox
              title="사용기술"
              emoji="🛠"
              items={ProjectDetailMeta.developTech}
            />
            <ProjectCategoryBox
              title="협업 툴"
              emoji="🤝"
              items={ProjectDetailMeta.developTools}
            />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ProjectPage;
