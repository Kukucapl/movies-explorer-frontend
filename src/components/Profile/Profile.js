import React from 'react';

export default function Profile(props) {
  const [profileEdited, setProfileEdited] = React.useState(false);
  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);

  function handleEditButton() {
    setProfileEdited(true)
  }
  
  function handleSaveButton(e) {
    e.preventDefault();
    setProfileEdited(false)
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, {props.name}!</h2>
      <form className='profile__form' noValidate>
        <div className='profile__container'>
          <label className='profile__input-label'>Имя<input
            className='profile__input'
            value={name}
            onChange={handleNameChange}
            disabled={!profileEdited}
            type='text' 
            minLength='2'
            maxLength='30'
            required />
          </label>
          <label className='profile__input-label'>E-mail<input
            className='profile__input'
            value={email}
            onChange={handleEmailChange}
            disabled={!profileEdited}
            type='email'
            required />
          </label>
        </div>
        <div className='profile__container'>
          <div className={`profile__buttons-box ${profileEdited ? 'profile__buttons-box_hide' : ''}`}>
            <button className='profile__button button' onClick={handleEditButton} type='button'>Редактировать</button>
            <button className='profile__exit-button button' type='button'>Выйти из аккаунта</button>
          </div>
          <div className={`profile__buttons-box ${!profileEdited ? 'profile__buttons-box_hide' : ''}`}>
            <span className='profile__input-error'></span>
          <button className='profile__save-button button' onClick={handleSaveButton}>Сохранить</button>
          </div>
        </div>
      </form>
    </div>
    );
};