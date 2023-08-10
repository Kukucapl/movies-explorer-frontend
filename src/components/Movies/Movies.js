import { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortSavedMovies, setIsShorSavedtMovies] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothingFinded, setIsNothingFinded] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  useEffect (() => {
    if(localStorage.getItem('moviesParams')) {
      const moviesParams = JSON.parse(localStorage.getItem('moviesParams'));
      setMovies(moviesParams.movies);
      setIsShortMovies(moviesParams.shortMovies);
    }
  }, []);

  function changeMovies(arr) {
    return arr.map(movie => ({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }));
  };
  
  function searchAllMovies(keyWord) {
    setIsLoading(true);
    moviesApi.getMovies()
    .then((res) => {
      const filteredMovies = res.filter(i => i.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || i.nameEN.toLowerCase().includes(keyWord.toLowerCase()))
      setIsNothingFinded(filteredMovies.length === 0 ? true : false);
      localStorage.setItem('moviesParams', JSON.stringify({lastKeyWord: keyWord, shortMovies: isShortMovies, movies: changeMovies(filteredMovies)}))
      setMovies(changeMovies(filteredMovies))
    })
    .catch((err) => {
      setIsSearchError(true)
    })
    .finally(() => {
      setIsLoading(false); 
    });
  }

  function searchSavedMovies(keyWord) {
    setIsLoading(true);
    mainApi.getMovies()
    .then((res) => {
      const filteredMovies = res.filter(i => i.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || i.nameEN.toLowerCase().includes(keyWord.toLowerCase()))
      setIsNothingFinded(filteredMovies.length === 0 ? true : false)
      setSavedMovies(filteredMovies)
    })
    .catch((err) => {
      setIsSearchError(true)
    })
    .finally(() => {
      setIsLoading(false); 
    });
  }

  function getSavedMovies() {
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  useEffect (() => {
    getSavedMovies()
  }, []);


  function handleCheckbox() {
    if (location.pathname === '/movies') {
      setIsShortMovies(!isShortMovies)
    } else {
      setIsShorSavedtMovies(!isShortSavedMovies)
    }

  }

  function handleDeleteCard(id) {
    mainApi.deleteMovie(id)
    .then((res) => {
      getSavedMovies()
    })
    .catch((err) => {
      console.log(err)
    });
  }

  function handleSaveCard(movie) {
    if(!savedMovies.find(i => i.movieId  === movie.movieId)) {
      mainApi.saveMovie(movie, currentUser.id)
      .then((res) => {
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err)
      });
    } else {
      mainApi.getMovies()
      .then((res) => {
        const id = res.find(i => i.movieId  === movie.movieId )._id;
        handleDeleteCard(id);
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  return (
    <main className="Movies">
        <SearchForm searchAllMovies={searchAllMovies}
          searchSavedMovies={searchSavedMovies}
          onCheckbox={handleCheckbox}
          isShortMovies={location.pathname === '/movies' ? isShortMovies : isShortSavedMovies}
        />
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          isShortMovies={location.pathname === '/movies' ? isShortMovies : isShortSavedMovies}
          isLoading={isLoading}
          isNothingFinded={isNothingFinded}
          isSearchError={isSearchError}
          onSave={handleSaveCard}
          onDelete={handleDeleteCard}
        />
    </main>
    );
};

/*isSaved={props.savedMovies.some(i => i.movieId === movie.id)}*/