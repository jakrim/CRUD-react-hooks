import { useEffect, useState } from 'react';

export default function useScreenWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = (event: any) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return width;
}
