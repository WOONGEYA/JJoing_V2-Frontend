import { Button, Text } from '@jjoing/ui';

const UserProfile = () => {
  return (
    <section className="w-full flex justify-between">
      <div className="flex gap-6">
        {/* 차후 벡엔드 연동 시 이미지 추가 필요 */}
        <div className="bg-gray-500 rounded-full w-36 h-36 flex-shrink-0"></div>
        <div className="flex flex-col gap-2">
          <Text type="body1">lheesung</Text>
          <Text type="body3">부산소프트웨어마이스터고등학교 / Frontend</Text>
          <Text type="body3">팔로워 0 팔로잉 0</Text>
          <Text type="body3" className="text-gray-30 whitespace-pre-wrap">
            카더가든 사모중 저랑 사귀실분 \n fwef wfwef wef wf we
          </Text>
        </div>
      </div>
      <Button height="h45" width={152}>
        <Text type="body3">팔로우</Text>
      </Button>
    </section>
  );
};

export default UserProfile;
