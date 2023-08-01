import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio'
import photo from '../../../images/student.png'

export default function AboutMe() {
  return (
    <section className='about-me'>
      <SectionTitle text={'Студент'} />
      <div className='about-me__box'>
        <div className='about-me__text-container'>
          <div className='about-me__brief'>
            <h3 className='about-me__name'>Гаврила</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>Я родился я родился  я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился я родился и родился.</p>
          </div>
          <a className='about-me__link link' href='https://github.com/Kukucapl' rel='noreferrer' target='_blank'>Github</a>
        </div>
        <img className='about-me__photo'  src={photo} alt='Фото' />
      </div>
      <Portfolio />
    </section>
  );
};