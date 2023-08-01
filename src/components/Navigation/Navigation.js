import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navigation(props) {
  const location = useLocation();
  const headerNavMods = {
    link: (`${props.place === 'header' && location.pathname === '/' ? 'navigation__link_main' : ''}`),
    accLink: (`${props.place === 'header' && location.pathname === '/' ? 'navigation__account-button_main' : ''}`),
    accIcon: (`${props.place === 'header' && location.pathname === '/' ? 'navigation__account-icon_main' : ''}`)
  }
  const navLinkClassName = (`navigation__link navigation__link_place-${props.place} link ${headerNavMods.link}`);
  
  return (
      <nav className={`navigation navigation_place-${props.place}`}>
        <div className={`navigation__navlinks navigation__navlinks_place-${props.place}`}>
          <NavLink className={({ isActive }) => isActive ? `${navLinkClassName} navigation__link-to-main navigation__link_active-${props.place}` : `${navLinkClassName} navigation__link-to-main`}  to='/' >Главная</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${navLinkClassName} navigation__link_active-${props.place}` : navLinkClassName}  to='/movies' >Фильмы</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${navLinkClassName} navigation__link_active-${props.place}` : navLinkClassName}  to='/saved-movies' >Сохранённые фильмы</NavLink>
        </div>
        <div className='navigation__account-buttons'>
          <Link className={`navigation__account-button link ${headerNavMods.accLink}`} to='/profile' >Аккаунт</Link>
          <Link className={`navigation__account-icon link ${headerNavMods.accIcon}`} to='/profile' />
        </div>
      </nav>

  );
};

/*
{`navigation__account-button navigation_place-${props.place}`}
*/