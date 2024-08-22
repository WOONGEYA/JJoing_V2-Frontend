import { ForwardedRef, forwardRef } from 'react';

type WarningAlertProps = {
  actionType: 'DELETE_PROJECT' | 'DELETE_ALARM';
  onConfirm?: () => void;
  onCancel?: () => void;
};

const WarningAlert = forwardRef(function WarningAlert(
  { actionType, onCancel, onConfirm, ...props }: WarningAlertProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const AlertText = actionType === 'DELETE_PROJECT' ? '프로젝트' : '알람';

  return (
    <div
      ref={ref}
      className="w-80 h-52 bg-white flex flex-col rounded-lg shadow-lg"
      {...props}
    >
      <div className="w-full flex-grow flex flex-col items-center justify-center gap-4 p-4">
        <h2 className="text-black text-lg font-semibold">
          {`정말 해당 ${AlertText}를 삭제하시겠습니까?`}
        </h2>
        <h4 className="text-black">{`삭제한 ${AlertText}은 복구할 수 없습니다.`}</h4>
      </div>
      <div className=" h-14 flex cursor-pointer">
        <button
          onClick={onCancel}
          className="w-1/2 bg-gray-400 flex justify-center items-center text-white hover:bg-gray-500 rounded-bl-lg ease-in-out duration-100"
          aria-label="취소"
        >
          취소
        </button>
        <button
          onClick={onConfirm}
          className="w-1/2 bg-red-600 flex justify-center items-center text-white hover:bg-red-700 rounded-br-lg ease-in-out duration-100"
        >
          삭제
        </button>
      </div>
    </div>
  );
});

export default WarningAlert;
