import { Wine } from "@/types/wine.type";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useRenderCards( wineCards : Wine[]) {
  const [renderCards, setRenderCards] = useState<Wine[]>([]);
  const [renderButton, setRenderButton] = useState(true);
  const { cardsCount = 2 } = useResize();

  useEffect(() => {
    sessionStorage.setItem('countCard', JSON.stringify(2 ))
  }, []);

  useEffect(() => {
    // sessionStorage.setItem('countCard', JSON.stringify(cardsCount))
    const count = sessionStorage.getItem('countCard')
    // setRenderCards(wineCards?.slice(0, cardsCount))
    setRenderCards(wineCards?.slice(0, Number(count)));
    // console.log('render', typeof count);

  }, [wineCards]);

  useEffect(() => {
    setRenderButton(() => wineCards?.length !== renderCards?.length)
  }, [renderCards]);

  const renderWineCards = () => {
    const current = sessionStorage.getItem('countCard');
    sessionStorage.setItem('countCard', String(Number(current!) + 2))

    setRenderCards(cards => [
      ...cards,
      // ...wineCards.slice(cards.length, cards.length + cardsCount)
      ...wineCards.slice(cards.length, cards.length + Number(current))
    ])
  }

  return {renderWineCards, renderCards, renderButton}
}

export default useRenderCards;
