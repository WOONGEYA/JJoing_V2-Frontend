import { IntroduceJJoing } from '@/components/landing';
import PromotionSolutionJJoing from '@/components/landing/promotionJJoing';
import { Text } from '@jjoing/ui';

const LandingPage = () => {
  return (
    <>
      <IntroduceJJoing />
      <PromotionSolutionJJoing />
      <div className="w-full h-[150px] flex items-center justify-center">
        <div className="w-[150px] bg-primary h-[50px] rounded-full flex items-center justify-center cursor-p">
          <Text color="white" size="md" weight="medium">
            쪼잉 시작하기
          </Text>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
