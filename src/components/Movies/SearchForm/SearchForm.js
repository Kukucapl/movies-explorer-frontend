import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm(props) {
  const location = useLocation();
  const isLoctionMovies = location.pathname === '/movies' ? true : false;
  const lastKeyWord = localStorage.getItem('moviesParams') ? JSON.parse(localStorage.getItem('moviesParams')).lastKeyWord : '';
  const [value, setValue] = useState(lastKeyWord);
  const [valueSavedMovies, setValueSavedMovies] = useState('');
  const [error, setError] = useState('');

  useEffect (() => {
    setError('')
  }, [location]);

  function handleChangeMovies(e) {
    setValue(e.target.value);
  }

  function handleChangeSavedMovies(e) {
    setValueSavedMovies(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(isLoctionMovies && value === '' ? 'Нужно ввести ключевое слово' : !isLoctionMovies && valueSavedMovies === '' ? 'Нужно ввести ключевое слово' : '')
    if(isLoctionMovies && value !== '') {
      props.searchAllMovies(value)
    } else if(!isLoctionMovies && valueSavedMovies !== '') {
      props.searchSavedMovies(valueSavedMovies)
    }
  }


  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit} noValidate >
        <div className='search-form__film'>
          <input 
          className='search-form__input'
          name={'movie'}
          onChange={isLoctionMovies ? handleChangeMovies : handleChangeSavedMovies}
          value={isLoctionMovies ? value : valueSavedMovies}
          required
          placeholder='Фильм' />
          <span className='search-form__error' >{error}</span>
          <button className='search-form__button button' type='submit' >Найти</button>
        </div>
        <FilterCheckbox onCheckbox={props.onCheckbox} isShortMovies={props.isShortMovies} isLoctionMovies={isLoctionMovies} />
      </form>
    </section>
  );
};
