// import Image from 'next/image'
// import styles from './page.module.css'
import Header from "@/components/Header/Header";
import backgroundVideo from '@/public/video/background-video.mp4';
import style from './page.module.scss';
import Promo from "@/components/Promo/Promo";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <video className={style.root__video} autoPlay playsInline preload='auto' data-video='0' loop muted>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
        <Promo />
        <AddWineComponent/>
        <WineLibrary />
      </main>
    </>
  );
}
