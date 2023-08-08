import './WineCard.scss';

import img from '../../../assets/images/wine-img.webp'

function WineCard() {
  return ( 
    <article className='wine-card'>
      <span className='wine-card__country'>Страна</span>
      <button className='wine-card__button-like'></button>
      <img className='wine-card__image' src='https://i7.otzovik.com/2019/05/18/8210990/img/691481_73611174.jpeg' alt="" />
      <h3 className='wine-card__title'>Brunello di Montalcino Vallocchio</h3>
      <span className='wine-card__year'>2017</span>
      <span className='wine-card__rating'>4 звезды</span>
      <button className='wine-card__button-info'>Ещё</button>
    </article>
   );
}

export default WineCard;