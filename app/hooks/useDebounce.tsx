import { useEffect, useState } from "react";

export function useDebounce (value: string | undefined, time = 300) {
  const [debounce, setDebounce] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value as string), time);

    return () => clearTimeout(handler)
  }, [value, time]);

  useEffect(() => {
    const handler = setTimeout(() => console.log('выполнено'), time);
    return () => clearTimeout(handler);
  }, [value, time]);

  return debounce;
}
