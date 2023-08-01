import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Register() {
  return (
    <section className='register'>
      <div className='register__logo-container'>
        <Logo />
      </div>
      <AuthForm 
      title={'Добро пожаловать!'} 
      inputName={true} 
      buttonText={'Зарегистрироваться'}
      subtitle={'Уже зарегистрированы?'}
      link={'/signin'}
      linkText={'Войти'}
      />
    </section>
    
  );
};