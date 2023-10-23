import { montserrat } from '@/app/fonts';
import styles from './Footer.module.scss';
import VkIcon from '../Icons/VkIcon';
import TelegramIcon from '../Icons/TelegramIcon';
import GithubIcon from '../Icons/GitgubIcon';
import FooterForLaptop from './FooterForLaptop/FooterForLaptop';
import FooterForMobile from './FooterForMobile/FooterForMobile';

const iconData = [
  { logo: <VkIcon />, href: 'https://vk.com/maarsello' },
  { logo: <TelegramIcon />, href: 'https://t.me/maarsello' },
  { logo: <GithubIcon />, href: 'https://github.com/Markelov97Vad/wine-cellar-ts' },
];

function Footer() {
  return (
    <footer className={`${styles.root__footer} ${styles.footer} ${montserrat.className}`}>
      <FooterForLaptop data={iconData}/>
      <FooterForMobile data={iconData} />
    </footer>
  );
}

export default Footer;
