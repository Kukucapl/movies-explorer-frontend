export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__navigation'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__links'>
          <li className='footer__list-item'>
            <a className='footer__link link' href='https://practicum.yandex.ru' rel='noreferrer' target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__list-item'>
            <a className='footer__link link' href='https://github.com' rel='noreferrer' target='_blank'>Github</a>
          </li>
        </ul>  
      </div>
    </footer>
  );
};
