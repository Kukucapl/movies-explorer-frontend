import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Login(props) {
  return (
    <main className='login'>
      <div className='login__logo-container'>
        <Logo />
      </div>
      <AuthForm
      onSubmit={props.onLogin}
      error={props.error}
      title={'Рады видеть!'} 
      inputName={false} 
      buttonText={'Войти'}
      subtitle={'Ещё не зарегистрированы?'}
      link={'/signup'}
      linkText={'Регистрация'}
      />
    </main>
    
  );
};