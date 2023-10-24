import { Wine } from "@/types/wine.type";
import { useEffect, useState } from "react";
import useResize from "./useResize";

function useRenderCards( wineCards : Wine[]) {
  const [renderCards, setRenderCards] = useState<Wine[]>([]);
  const [cards, setCards] = useState<Wine[]>([]);
  const [renderButton, setRenderButton] = useState(true);
  const { cardsCount } = useResize();

  useEffect(() => {
    // console.log('render2');

    sessionStorage.setItem('countCard', JSON.stringify(cardsCount))
  }, []);

  // useEffect(() => {
  //   setCards(wineCards)
  // }, [wineCards]);

  useEffect(() => {
    // sessionStorage.setItem('countCard', JSON.stringify(cardsCount))
    const count = sessionStorage.getItem('countCard')
    // console.log('COUNT', count);

    setRenderCards(() => wineCards?.slice(0, Number(count)))
    // console.log('render');
    // console.log('count', count);
    // sessionStorage.setItem('cards', JSON.stringify(cards?.slice(0, Number(count))))

  }, [wineCards]);

  useEffect(() => {
    const cards =  sessionStorage.getItem('cards')
    // setRenderCards((renderCards) =>  cards as unknown as Wine[]);
  }, []);

  useEffect(() => {
    setRenderButton(() => wineCards?.length !== renderCards?.length)
  }, [renderCards]);

  const renderWineCards = () => {
    const current = sessionStorage.getItem('countCard');
    sessionStorage.setItem('countCard', String(Number(current!) + cardsCount))
    // console.log('current', current);

    setRenderCards(cards => [
      ...cards,
      // ...wineCards.slice(cards.length, cards.length + Number(current))
      ...wineCards.slice(cards.length, cards.length + cardsCount)
    ])
  }

  return {renderWineCards, renderCards, renderButton}
}

export default useRenderCards;
