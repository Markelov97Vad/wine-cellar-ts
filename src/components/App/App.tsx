import Header from "../header/Header";
import Promo from "../promo/Promo";
import backgroundVideo from '../../assets/video/background-video.mp4'
import styles from "./app.module.scss"
import WineForm from "../WineForm/WineForm";

function App() {
  return (
    <div className="App">
      <video className={styles.app__video} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo/>
      <WineForm/>
    </div>
  );
}

export default App;
