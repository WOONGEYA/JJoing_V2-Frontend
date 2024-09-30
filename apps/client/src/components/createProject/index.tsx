import type { OverlayModal } from '@/types';
import { Text } from '@jjoing/ui';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import ModalWrapper from '../layouts/modalWrapper';
import FirstCreateProjectBox from './firstCreateProjectBox';
import SecondCreateProjectBox from './secondCreateProjectBox';

type CreateProjectForm = {
  projectName: string;
  recruitMember: number;
  startDate: string;
  endDate: string;
  projectField: string[];
  projectExplain: string;

  mood: string[];
  developSkills: string[];
  developTools: string[];
  image: string;
};

const CreateProject = ({ open, close }: OverlayModal) => {
  const [page, setPage] = useState(0);

  const methods = useForm<CreateProjectForm>();

  const onSubmit = (data: CreateProjectForm) => {
    console.log('data: ', data);
  };

  return (
    <ModalWrapper open={open} close={close}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="bg-white size-full p-7 rounded-xl">
            <div className="flex items-center justify-between mb-5">
              <Text type="body1">프로젝트 생성하기 🖨</Text>
              <IoClose onClick={close} className="size-7 cursor-pointer" />
            </div>
            {page === 0 ? (
              <FirstCreateProjectBox setPage={setPage} />
            ) : (
              <SecondCreateProjectBox setPage={setPage} />
            )}
          </div>
        </form>
      </FormProvider>
    </ModalWrapper>
  );
};

export default CreateProject;
