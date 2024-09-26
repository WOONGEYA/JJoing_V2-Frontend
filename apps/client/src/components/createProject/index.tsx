import type { OverlayModal } from '@/types';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import ModalWrapper from '../layouts/modalWrapper';
import FirstCreateProjectPage from './firstCreateProjectPage';
import SecondCreateProjectPage from './secondCreateProjectPage';

type CreateProjectFrom = {
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

  page: number;
};

const CreateProject = ({ open, close }: OverlayModal) => {
  const methods = useForm<CreateProjectFrom>({
    defaultValues: { page: 0 },
  });

  const page = useWatch({
    control: methods.control,
    name: 'page',
  });

  const onSubmit = (data: CreateProjectFrom) => {
    console.log('data: ', data);
  };

  return (
    <ModalWrapper open={open} close={close}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {page === 0 ? (
            <FirstCreateProjectPage close={close} />
          ) : (
            <SecondCreateProjectPage close={close} />
          )}
        </form>
      </FormProvider>
    </ModalWrapper>
  );
};

export default CreateProject;
