import { Wine } from "@/types/wine.type";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useRenderCards( wineCards : Wine[]) {
  const [renderCards, setRenderCards] = useState<Wine[]>([]);
  const [renderButton, setRenderButton] = useState(true);
  const { cardsCount } = useResize();

  useEffect(() => {
    sessionStorage.setItem('countCard', JSON.stringify(cardsCount))
  }, []);

  useEffect(() => {
    const count = sessionStorage.getItem('countCard')
    setRenderCards(() => wineCards?.slice(0, Number(count)))
  }, [wineCards]);

  useEffect(() => {
    setRenderButton(() => wineCards?.length !== renderCards?.length)
  }, [renderCards]);

  const renderWineCards = () => {
    const current = sessionStorage.getItem('countCard');
    sessionStorage.setItem('countCard', String(Number(current!) + cardsCount))

    setRenderCards(cards => [
      ...cards,
      ...wineCards.slice(cards.length, cards.length + cardsCount)
    ])
  }

  return {renderWineCards, renderCards, renderButton}
}

export default useRenderCards;
