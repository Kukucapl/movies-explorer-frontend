import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Login() {
  return (
    <section className='login'>
      <div className='login__logo-container'>
        <Logo />
      </div>
      <AuthForm 
      title={'Рады видеть!'} 
      inputName={false} 
      buttonText={'Войти'}
      subtitle={'Ещё не зарегистрированы?'}
      link={'/signup'}
      linkText={'Регистрация'}
      />
    </section>
    
  );
};