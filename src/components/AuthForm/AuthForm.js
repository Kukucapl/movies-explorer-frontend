import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm(props) {
  const [error, setError] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('Backend не подключен');
  }

  return (
      <form className='auth-form' onSubmit={handleSubmit} noValidate>
        <div className='auth-form__container'>
          <h2 className='auth-form__title'>{props.title}</h2>
          {props.inputName &&
            <label className='auth-form__input-label'>Имя<input 
              className='auth-form__input'
              type='text'
              minLength='2'
              maxLength='30'
              required />
              <span className='auth-form__error auth-form__error_hide'></span>
            </label>
          }
          <label className='auth-form__input-label'>E-mail<input 
            className='auth-form__input' 
            type='email' 
            required />
          <span className='auth-form__error auth-form__error_hide'></span>
          </label>
          <label className='auth-form__input-label'>Пароль<input 
            className='auth-form__input' 
            type='password'
            required />
            <span className='auth-form__error auth-form__error_hide'>Что-то пошло не так...</span>
          </label>
        </div>
        <div className='auth-form__container'>
          <span className='auth-form__submit-error'>{error}</span>
          <button className='auth-form__button button' type='submit'>{props.buttonText}</button>
          <p className='auth-form__subtitle'>{props.subtitle} <Link className='auth-form__link link' to={props.link}>{props.linkText}</Link></p>
        </div>
      </form>
  );
};

