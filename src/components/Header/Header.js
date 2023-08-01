import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

export default function Header(props) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_main' : ''}`}>
      <Logo />

      {!props.loggedIn && 
        <nav className='header__unauth-navigation'>
          <Link className='header__unauth-navigation-button link'  to='/signup' >Регистрация</Link>
          <Link className='header__unauth-navigation-button header__unauth-navigation-button_green link' to='/signin' >Войти</Link>
        </nav>
      }

      {props.loggedIn && 
      <>
        <div className='header__navigation'>
          <Navigation place={'header'} />
        </div>
        <button className={(`header__open-navigation-button button ${location.pathname === '/' ? 'header__open-navigation-button_main' : ''}`)} onClick={props.onNavBtn}/>
      </>

      }

    </header>
  );
};