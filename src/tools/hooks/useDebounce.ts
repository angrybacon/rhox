import { useEffect, useState } from 'react';

type UseDebounce = (value: string, delay: number) => string;

export const useDebounce: UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [delay, value]);
  return debouncedValue.trim();
};
