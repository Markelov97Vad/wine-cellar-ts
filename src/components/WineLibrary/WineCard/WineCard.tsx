import './WineCard.scss';
import { Wine } from '../../../types/wine.type';

type WineCardProps = {
  wineElem: Wine
}

function WineCard({ wineElem }: WineCardProps) {

  const { country, image, name, year } = wineElem;

  return (
    <article className='wine-card'>
      <span className='wine-card__country'>{country}</span>
      <button className='wine-card__button-like'></button>
      <img className='wine-card__image' src={image} alt={name} />
      <h3 className='wine-card__title'>{name}</h3>
      <span className='wine-card__year'>{year}</span>
      <span className='wine-card__rating'>4 звезды</span>
      <button className='wine-card__button-info'>Ещё</button>
    </article>
   );
}

export default WineCard;