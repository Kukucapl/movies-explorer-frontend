import React from "react";
import { useLocation } from 'react-router-dom';

export default function MoviesCard(props) {
  const location = useLocation();
  const saveBtnClassName = (`movies-card__save button ${props.savedMovies.find(i => i.movieId  === props.movie.movieId) ? 'movies-card__save_active' : ''}`)


  function deleteCard() {
    props.onDelete(props.movie._id);
  }


  function handleCardSave() {
    props.onSave(props.movie);;
  }

  return (
    <article className="movies-card">
      <a className='movies-card__trailerLink' href={props.movie.trailerLink} rel='noreferrer' target='_blank'><img className="movies-card__cover" src={props.movie.image} alt="Обложка"/></a>
      <div className="movies-card__first-row">
        <h2 className="movies-card__name">{props.movie.nameRU}</h2>
        {location.pathname === '/movies' && 
          <button className={saveBtnClassName} onClick={handleCardSave}/>
        }

        {location.pathname === '/saved-movies' && 
          <button className="movies-card__delete button" onClick={deleteCard}/>
        }
      </div>
      <p className="movies-card__duration">{Math.floor(props.movie.duration / 60)}ч{props.movie.duration % 60}м</p>
    </article>
  );
};
