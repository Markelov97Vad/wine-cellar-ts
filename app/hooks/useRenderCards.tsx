import { Wine } from "@/types/wine.type";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useRenderCards( wineCards : Wine[]) {
  const [renderCards, setRenderCards] = useState<Wine[]>([]);
  const [renderButton, setRenderButton] = useState(true);
  const { cardsCount } = useResize();
  // const countCard = 6;
  useEffect(() => {
    setRenderCards(wineCards?.slice(0, cardsCount))
  }, [wineCards]);

  // useEffect(() => {
  //   console.log(renderCards);
  //   console.log(wineCards?.length !== renderCards?.length)
  //   console.log(renderButton)
  // }, [renderCards]);

  useEffect(() => {
    setRenderButton(() => wineCards?.length !== renderCards?.length)
  }, [renderCards]);

  const renderWineCards = () => {
    setRenderCards(cards => [
      ...cards,
      ...wineCards.slice(cards.length, cards.length + cardsCount)
    ])
  }


  // console.log(wineCards);


  return {renderWineCards, renderCards, renderButton}
}

export default useRenderCards;
