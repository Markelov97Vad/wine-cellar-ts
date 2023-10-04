import WineLibrary from '../components/WineLibrary/WineLibrary';
import style from './page.module.scss';

function MyWines() {
  return (
    <>
      <main className={style['my-wine']}>
        <WineLibrary/>
      </main>
    </>
  );
}

export default MyWines;