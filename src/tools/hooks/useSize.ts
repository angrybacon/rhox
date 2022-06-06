import { RefObject, useEffect, useState } from 'react';

interface Size {
  height?: number;
  width?: number;
}

type UseSize = (root: RefObject<HTMLDivElement>) => Size;

export const useSize: UseSize = (root) => {
  const getSize = (element: HTMLDivElement) => ({
    height: element.offsetHeight,
    width: element.offsetWidth,
  });

  const [size, setSize] = useState<Size>({ height: 0, width: 0 });

  useEffect(() => {
    const handleResize = () => root.current && setSize(getSize(root.current));
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [root]);

  return size;
};
