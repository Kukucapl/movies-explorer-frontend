import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

export default function Main() {
  return (
    <main className='Main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
};