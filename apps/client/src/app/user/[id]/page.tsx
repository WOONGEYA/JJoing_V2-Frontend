import { Container, Wrapper } from '@/components/layouts';
import { UserContactBox, UserProfile } from '@/components/user';
import UserProjectContainer from '@/components/user/userProjectContainer/userProjectContainer';

const User = () => {
  return (
    <Container className="min-h-dvh py-16">
      <Wrapper className="flex flex-col gap-6">
        <UserProfile />
        <UserContactBox />
        <UserProjectContainer />
      </Wrapper>
    </Container>
  );
};

export default User;
