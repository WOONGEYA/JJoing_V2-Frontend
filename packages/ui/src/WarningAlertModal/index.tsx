import { ForwardedRef, forwardRef } from 'react';
import '../styles.css';

type WarningAlertModalProps = {
  title: string;
  subTitle: string;
  confirmTitle: string;
  onCancle?: () => void;
  onConfirm?: () => void;
};

const WarningAlertModal = forwardRef(function WarningAlertModal(
  {
    title,
    subTitle,
    confirmTitle,
    onCancle,
    onConfirm,
    ...props
  }: WarningAlertModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} {...props} className="w-80 h-52 bg-white flex flex-col rounded-lg">
      <div className="w-full h-[220px] flex flex-col items-center justify-center gap-4">
        <h2 className="text-black text-lg font-semibold">{title}</h2>
        <h4 className="text-black">{subTitle}</h4>
      </div>
      <div className="h-[80px] flex cursor-pointer">
        <div
          onClick={onCancle}
          className="w-1/2 bg-gray-400 flex justify-center items-center text-white hover:bg-gray-500 rounded-bl-lg"
        >
          취소
        </div>
        <div
          onClick={onConfirm}
          className="w-1/2 bg-red-600 flex justify-center items-center text-white hover:bg-red-700 rounded-br-lg"
        >
          {confirmTitle}
        </div>
      </div>
    </div>
  );
});

export default WarningAlertModal;
