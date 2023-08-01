import backgroundImage from '../../../images/background_image.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__background-image' src={backgroundImage} alt='' />
    </section>
  );
};