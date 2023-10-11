import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Register(props) {
  return (
    <main className='register'>
      <div className='register__logo-container'>
        <Logo />
      </div>
      <AuthForm
      onSubmit={props.onRegister}
      error={props.error}
      title={'Добро пожаловать!'} 
      inputName={true} 
      buttonText={'Зарегистрироваться'}
      subtitle={'Уже зарегистрированы?'}
      link={'/signin'}
      linkText={'Войти'}
      />
    </main>
    
  );
};