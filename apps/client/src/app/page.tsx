import { WarningAlertModal } from '@jjoing/ui';

export default function Home() {
  return (
    <WarningAlertModal
      title="정말 프로젝트를 삭제하실 건가요?"
      subTitle="한 번 삭제한 프로젝트는 복구 할 수 없어요."
      confirmTitle="삭제"
    />
  );
}
