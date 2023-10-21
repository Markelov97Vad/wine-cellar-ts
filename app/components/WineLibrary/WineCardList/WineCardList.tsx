'use client';
import useRenderCards from '@/app/hooks/useRenderCards';
import WineCard from '../WineCard/WineCard';
import style from './WineCardList.module.scss';
import { Wine } from '@/types/wine.type';
import Button from '../../ui/Button/Button';

function WineCardList({ wines }: { wines: Wine[] }) {
  const { renderWineCards, renderCards, renderButton } = useRenderCards(wines);

  return (
    <div className={style['wine-card-list']}>
      {renderCards?.length === 0 ? (
        <div className={style['wine-card-list__confirm-container']}>
          <span className={style['wine-card-list__confirm-text']}>Ничего не найдено.</span>
        </div>
      ) : (
        <>
          <div className={style['wine-card-list__container']}>
            {renderCards?.map((wineElem, id) => (
              <WineCard key={id} wineElem={wineElem} />
            ))}
          </div>
          {renderButton && (
            <Button
              onClick={renderWineCards}
              text={'Ещё'}
              extraClass={style['wine-card-list__add-button']}
            />
          )}
        </>
      )}
    </div>
  );
}

export default WineCardList;
