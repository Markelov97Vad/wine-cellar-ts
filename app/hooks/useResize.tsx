import { useEffect, useState } from "react";
import {
  SCREEN_LAPTOP,
} from "../../utils/constans";

function useResize() {
  const [cardsCount, setCardsCount] = useState<number>(12);
  const [newCardsCount, setNewCardsCount] = useState<number>(3);
  const [width, setWidth] = useState<number>(globalThis.innerWidth);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const renderCount = width > SCREEN_LAPTOP ? 12 : 6;

      setCardsCount(renderCount);

      setIsLaptop(() => width >= SCREEN_LAPTOP ? true : false);
      setIsMobile(() => width < SCREEN_LAPTOP ? true : false);

      setWidth(globalThis.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return { cardsCount, newCardsCount, isLaptop, isMobile};
};

export default useResize;
