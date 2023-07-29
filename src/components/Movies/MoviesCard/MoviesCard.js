import React from "react";
import { useLocation } from 'react-router-dom';

export default function MoviesCard(props) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);
  const saveBtnClassName = (`movies-card__save button ${isSaved ? 'movies-card__save_active' : ''}`)

  function handleCardSave() {
    setIsSaved(!isSaved)
  }

  return (
    <article className="movies-card">
      <img className="movies-card__cover" src={props.image} alt="Обложка"/>
      <div className="movies-card__first-row">
        <h2 className="movies-card__name">{props.nameRU}</h2>
        {location.pathname === '/movies' && 
          <button className={saveBtnClassName} onClick={handleCardSave}/>
        }

        {location.pathname === '/saved-movies' && 
          <button className="movies-card__delete button"/>
        }
      </div>
      <p className="movies-card__duration">{props.duration}</p>
    </article>
  );
};

