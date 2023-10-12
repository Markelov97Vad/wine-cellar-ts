import style from './WineLibrary.module.scss';
import WineCardList from './WineCardList/WineCardList';
import { montserrat } from '@/app/fonts';

function WineLibrary() {
  return ( 
    <section className={`${style['wine-library']} ${montserrat.className}`}>
      <div className={style['wine-library__wrapper']}>
        <div className={style['wine-library__block']}></div>
        <div className={style['wine-library__filter-headers']}>
          <div>filter</div>
          <div>volume</div>
        </div>
        <div className={style['wine-library__side-bar']}>side-bar</div>
        <WineCardList />
      </div>
    </section>
   );
}

export default WineLibrary;