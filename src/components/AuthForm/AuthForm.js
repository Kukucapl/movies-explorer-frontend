import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function AuthForm(props) {
  const form = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(form.values);
  }

  return (
      <form className='auth-form' onSubmit={handleSubmit} noValidate >
        <div className='auth-form__container'>
          <h2 className='auth-form__title'>{props.title}</h2>
          {props.inputName &&
            <label className='auth-form__input-label'>Имя<input 
              className={(`auth-form__input ${ form.errors.name ? 'auth-form__input_error' : ''}`)}
              name='name'
              onChange={form.handleChange}
              value={form.value}
              type='text'
              pattern='^[a-zA-Zа-яЁёА-Я\s\-]+$'
              minLength='2'
              maxLength='30'
              required
              autoComplete='new-password'/>
              <span className='auth-form__error'>{form.errors.name}</span>
            </label>
          }
          
          <label className='auth-form__input-label'>E-mail<input 
            className={(`auth-form__input ${ form.errors.email ? 'auth-form__input_error' : ''}`)}
            name='email'
            onChange={form.handleChange}
            value={form.value}
            type='email'
            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
            required
            autoComplete='new-password'/>
          <span className='auth-form__error'>{form.errors.email}</span>
          </label>
          <label className='auth-form__input-label'>Пароль<input 
            className={(`auth-form__input ${ form.errors.password ? 'auth-form__input_error' : ''}`)} 
            name='password'
            onChange={form.handleChange}
            value={form.value}
            type='password'
            minLength='6'
            required
            autoComplete='new-password'/>
            <span className='auth-form__error'>{form.errors.password}</span>
          </label>
        </div>
        <div className='auth-form__container'>
          <span className='auth-form__submit-error'>{props.error}</span>
          <button className='auth-form__button button' type='submit' disabled={!form.isValid}>{props.buttonText}</button>
          <p className='auth-form__subtitle'>{props.subtitle} <Link className='auth-form__link link' to={props.link}>{props.linkText}</Link></p>
        </div>
      </form>
  );
};

