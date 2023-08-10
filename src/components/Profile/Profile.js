import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';


export default function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const form = useFormWithValidation();
  const [profileEdited, setProfileEdited] = React.useState(false);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleEditButton() {
    setProfileEdited(true)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSave(name, email, setProfileEdited);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    form.handleChange(e)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    form.handleChange(e)
  }


  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' onSubmit={handleSubmit} noValidate >
        <div className='profile__container'>
          <label className='profile__input-label'>Имя<input
            className={(`profile__input ${ form.errors.name ? 'profile__input_error' : ''}`)}
            name='name'
            disabled={!profileEdited}
            onChange={handleNameChange}
            value={name}
            type='text'
            pattern='^[a-zA-Zа-яЁёА-Я\s\-]+$'
            minLength='2'
            maxLength='30'
            required />
            <span className='profile__input-error'>{form.errors.name}</span>
          </label>
          <label className='profile__input-label'>E-mail<input
            className={(`profile__input ${ form.errors.email ? 'profile__input_error' : ''}`)}
            name='email'
            disabled={!profileEdited}
            onChange={handleEmailChange}
            value={email}
            type='email'
            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
            required />
            <span className='profile__input-error'>{form.errors.email}</span>
          </label>
        </div>
        <div className='profile__container'>
          <div className={`profile__buttons-box ${profileEdited ? 'profile__buttons-box_hide' : ''}`}>
            <button className='profile__button button' onClick={handleEditButton} type='button'>Редактировать</button>
            <button className='profile__exit-button button' type='button' onClick={props.onLogout}>Выйти из аккаунта</button>
          </div>
          <div className={`profile__buttons-box ${!profileEdited ? 'profile__buttons-box_hide' : ''}`}>
            <span className='profile__error'>{props.error}</span>
          <button className='profile__save-button button' type='submit' disabled={!form.isValid}>Сохранить</button>
          </div>
        </div>
      </form>
    </main>
    );
};