export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link link' href='https://github.com/Kukucapl/how-to-learn' rel='noreferrer' target='_blank'>Статичный сайт<span className='portfolio__link-arrow'>↗</span></a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link link' href='https://github.com/Kukucapl/russian-travel' rel='noreferrer' target='_blank'>Адаптивный сайт<span className='portfolio__link-arrow'>↗</span></a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link link' href='https://github.com/Kukucapl/react-mesto-api-full-gha' rel='noreferrer' target='_blank'>Одностраничное приложение<span className='portfolio__link-arrow'>↗</span></a>
        </li>
      </ul>
    </section>
  );
};