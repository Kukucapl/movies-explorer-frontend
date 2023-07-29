import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";
import { films, savedFilms } from "../../../utils/constants";

export default function MoviesCardList() {
  const location = useLocation();
  const filmsArray = location.pathname === '/movies' ? films : savedFilms;
  function getMaxFilms(arr) {
    if(window.innerWidth > 1200) {
      return arr.slice(0, 16);
    } else if (window.innerWidth <= 1200 && window.innerWidth >= 910) {
      return arr.slice(0, 12);
    } else if (window.innerWidth <= 909 && window.innerWidth >= 770) {
      return arr.slice(0, 8);
    } else {
      return arr.slice(0, 5);}
  }

  return (
    <section className="movies-cardlist">
      <div className="movies-cardlist__cards">
      {getMaxFilms(filmsArray).map((movie, id) => (
        <MoviesCard key={id} {...movie} />
      ))}
      </div>
      <div className="movies-cardlist__button-container">
        {location.pathname === '/movies' &&
          <button className="movies-cardlist__button button">Ещё</button>
        }  
      </div>

    </section>
    
  );
};
