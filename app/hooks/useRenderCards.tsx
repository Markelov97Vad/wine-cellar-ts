import { Wine } from "@/types/wine.type";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useRenderCards( wineCards : Wine[]) {
  const [renderCards, setRenderCards] = useState<Wine[]>([]);
  const [renderButton, setRenderButton] = useState(true);
  const { cardsCount } = useResize();
  useEffect(() => {
    setRenderCards(wineCards?.slice(0, cardsCount))
  }, [wineCards]);

  useEffect(() => {
    setRenderButton(() => wineCards?.length !== renderCards?.length)
  }, [renderCards]);

  const renderWineCards = () => {
    setRenderCards(cards => [
      ...cards,
      ...wineCards.slice(cards.length, cards.length + cardsCount)
    ])
  }

  return {renderWineCards, renderCards, renderButton}
}

export default useRenderCards;
