import Header from "../header/Header";
import Promo from "../promo/Promo";
import backgroundVideo from '../../assets/video/background-video.mp4'
import styles from "./app.module.scss"

import WineForm from "../addWineComponent/addWineComponent";
import { useRef } from "react";

function App() {
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const spanRef = useRef<HTMLParagraphElement>(null);
  // const refs = useRef({titleRef, spanRef})

  return (
    <div className="App">
      <video className={styles.video} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo />
      <WineForm/>
    </div>
  );
}

export default App;
