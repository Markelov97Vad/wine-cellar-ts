import Header from '@/components/Header/Header';
import style from './AboutWine.module.scss';
import Image from 'next/image';

function AboutWine() {
  return (
    <>
      <Header/>
      <main className={style.aboutWine}>
        <div>
          <Image src="" alt="" />
        </div>

        <div>
          <h1>Название вина</h1>
          <p>Брэнд</p>
          <div>ЗВЕЗДЫ</div>
          <div>
            CLASSIFICATION	Cru Classe
            TYPE	Red
            BRAND	Chateau de Beaucastel
            VINTAGE	2017
            COUNTRY	France
            REGION	Rhone
            GRAPE	Rhone Blend
            VOLUME	0,75
          </div>

          <p>Отзыв</p>
          <span>ROBERT PARKER (99)</span>
          <p>Loaded with mulberry and blueberry fruit, graced by hints of star anise, cardamom, cinnamon and allspice, the 2017 Chateauneuf du Pape Hommage à Jacques Perrin is another standout vintage for this wine. Full-bodied, rich, velvety and long on the finish, at this point, it&apos;s maybe not quite as sure a thing to reach the century score as the beyond-superlative 2018, but I wouldn&apos;t rule it out. This is seriously great wine.</p>
        </div>
      </main>
    </>
  );
}

export default AboutWine;