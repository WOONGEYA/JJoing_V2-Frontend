import { OverlayModal } from '@/types';
import { PropsWithChildren } from 'react';

type ModalWrapperProps = PropsWithChildren & OverlayModal;

const ModalWrapper = ({ open, close, children }: ModalWrapperProps) => {
  return (
    open && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={close}
      >
        <div
          className="w-full max-w-xl max-h-[47rem] overflow-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default ModalWrapper;
