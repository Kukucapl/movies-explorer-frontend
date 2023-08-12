import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResize } from '../../../hooks/useResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'

export default function MoviesCardList(props) {
  const location = useLocation();
  const windowSize = useResize();
  const movies = props.isShortMovies ? props.movies.filter(i => i.duration <= 40) : props.movies;
  const savedMovies = props.isShortMovies ?  props.savedMovies.filter(i => i.duration <= 40) : props.savedMovies;
  const filmsArray = location.pathname === '/movies' ? movies : savedMovies;
  const firstCards = windowSize.isFourColumns ? 16 : windowSize.isThreeColumns ? 12 : windowSize.isTwoColumns ? 8 : 5;
  const moreCards = windowSize.isFourColumns ? 4 : windowSize.isThreeColumns ? 3 : 2;
  const [visibleCards, setVisibleCards] = useState(firstCards);

  useEffect (() => {
    setVisibleCards(firstCards)
  }, [filmsArray]);

  function handleMore() {
    if(filmsArray.length > visibleCards) {
      const extraCards = windowSize.isOneColumn ? 0 : visibleCards % moreCards !== 0 ? moreCards - visibleCards % moreCards : 0;
      setVisibleCards(visibleCards + moreCards + extraCards)
    } 
  }
  
  return (
    <section className='movies-cardlist'>
      {props.isLoading &&
          <Preloader />
      }

      {!props.isLoading && props.isNothingFinded &&
          <h2 className='movies-cardlist__message'>Ничего не найдено</h2>
      }

      {!props.isLoading && props.isSearchError &&
          <h2 className='movies-cardlist__message movies-cardlist__message_error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
      }

      <div className='movies-cardlist__cards'>
      {!props.isLoading && filmsArray.slice(0, visibleCards).map((movie) => (
        <MoviesCard key={movie.movieId} movie={movie} onSave={props.onSave} onDelete={props.onDelete} savedMovies={props.savedMovies} allSavedMovies={props.allSavedMovies}/>
      ))}
      </div>
      <div className='movies-cardlist__button-container'>
        {location.pathname === '/movies' && filmsArray.length > visibleCards &&
          <button className='movies-cardlist__button button' onClick={handleMore}>Ещё</button>
        }  
      </div>
    </section>
    
  );
};