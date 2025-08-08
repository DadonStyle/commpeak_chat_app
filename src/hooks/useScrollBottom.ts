import { useEffect, useRef } from 'react';

const useScrollBottom = <T>(dependency: T) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dependency]);

  return scrollRef;
};

export default useScrollBottom;