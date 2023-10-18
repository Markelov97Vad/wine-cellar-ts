import { useEffect, useState } from "react";
import {
  // NUMBER_OF_MOVIES_FOR_DESKTOP,
  // NUMBER_OF_MOVIES_FOR_DESKTOP_ADD,
  // NUMBER_OF_MOVIES_FOR_MOBILE,
  // NUMBER_OF_MOVIES_FOR_MOBILE_ADD,
  // NUMBER_OF_MOVIES_FOR_TABLET,
  SCREEN_LAPTOP,
  SCREEN_TABLET
} from "../../utils/constans";

function useResize() {
  const [cardsCount, setCardsCount] = useState<number>(12);
  const [newCardsCount, setNewCardsCount] = useState<number>(3);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // let isLaptop
  // let isMobile

  useEffect(() => {
    const handleResize = () => {
      // const renderCount = width > SCREEN_DESKTOP ?
      //   NUMBER_OF_MOVIES_FOR_DESKTOP : width > SCREEN_TABLET ?
      //   NUMBER_OF_MOVIES_FOR_TABLET : NUMBER_OF_MOVIES_FOR_MOBILE;

      // const downloadCount = width > SCREEN_DESKTOP ?
      //   NUMBER_OF_MOVIES_FOR_DESKTOP_ADD : NUMBER_OF_MOVIES_FOR_MOBILE_ADD;

      // setCardsCount(renderCount);
      // setNewCardsCount(downloadCount);

      setIsLaptop(() => width >= SCREEN_LAPTOP ? true : false);
      setIsMobile(() => width < SCREEN_LAPTOP ? true : false);


      // isLaptop = width >= SCREEN_LAPTOP ? true : false;
      // isMobile = width < SCREEN_LAPTOP ? true : false;

      setWidth(window.innerWidth);
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
