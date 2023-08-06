import Header from "../header/Header";
import Promo from "../promo/Promo";
import backgroundVideo from '../../assets/video/background-video.mp4'
import styles from "./app.module.scss"

import WineForm from "../AddWineComponent/AddWineComponent";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";

function App() {
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const spanRef = useRef<HTMLParagraphElement>(null);
  // const refs = useRef({titleRef, spanRef})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      {/* <video className={styles.video} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo />
      <WineForm/> */}
    </div>
  );
}

export default App;
