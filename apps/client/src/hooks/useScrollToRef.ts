import { RefObject, useCallback } from 'react';

const useScrollToRef = <T extends HTMLElement>(ref: RefObject<T>) => {
  return useCallback(() => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [ref]);
};

export default useScrollToRef;
