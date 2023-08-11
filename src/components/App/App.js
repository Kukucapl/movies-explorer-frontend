import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import PageNotFound from '../PageNotFound/PageNotFound';

import * as auth from '../../utils/Auth'
import { mainApi } from '../../utils/MainApi';

import { CurrentUserContext } from '../../context/CurrentUserContext';


export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('token') !== null);
  const [registerError, setRegisterError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [updateError, setUpdateError] = React.useState('');
  const [currentUser, setCurrentUser]= React.useState({});
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const navigate = useNavigate();


  function checkToken() {
    if (localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      if(token) {
          setLoggedIn(true);
      }
    }
  }

  React.useEffect (() => {
    checkToken();
    if (loggedIn) {
      mainApi.getCurrentUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }, [loggedIn]);



  function handleRegisterSubmit({name, email, password}) {
    auth.register(name, email, password)
    .then((res) => {
      handleLogin({email, password})
    })
    .catch((err) => {
      err === 409 ? setRegisterError('Пользователь с таким email уже существует') :
      setRegisterError('При регистрации пользователя произошла ошибка');
    });
  }

  function handleLogin({email, password}) {
    auth.authorize(email, password)
    .then((res) => {
      localStorage.setItem('token', res.token);
      setLoggedIn(true);
      navigate('/movies');
    })
    .catch((err) => {
      err === 401 ? setLoginError('Вы ввели неправильный логин или пароль') :
      setLoginError('При авторизации произошла ошибка')
    });
  }

  function handleLogout() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    navigate('/')
  }

  function handleUpdateUser(name, email, func) {
    mainApi.setUserInfo(name, email)
    .then((res) => {
      setCurrentUser(res);
      setUpdateError('');
      func(false)
    })
    .catch((err) => {
      err === 409 ? setUpdateError('Пользователь с таким email уже существует') :
      setUpdateError('При обновлении профиля произошла ошибка');
    });
  }




  function openPopup() {
    setIsPopupOpened(true)
  }

  function closePopup() {
    setIsPopupOpened(false)
  }



  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>

          <Route exact path='/' 
            element={<>
            <Header loggedIn={loggedIn} onNavBtn={openPopup} />
            <Popup isOpen={isPopupOpened} onClose={closePopup} />
            <Main />
            <Footer />
          </>}/>
          <Route element={<ProtectedRoute isLoggedIn={!loggedIn}/>}>
            <Route exact path='/signup' element={<Register onRegister={handleRegisterSubmit} error={registerError}/>}/>
            <Route exact path='/signin' element={<Login onLogin={handleLogin} error={loginError} />}/> 
          </Route>
          <Route element={<ProtectedRoute isLoggedIn={loggedIn}/>}>
            <Route exact path='/movies' 
              element={<>
              <Header loggedIn={true} onNavBtn={openPopup} />
              <Popup isOpen={isPopupOpened} onClose={closePopup} />
              <Movies />
              <Footer />
            </>}/>
            <Route exact path='/saved-movies'
              element={<>
              <Header loggedIn={true} onNavBtn={openPopup} />
              <Popup isOpen={isPopupOpened} onClose={closePopup} />
              <Movies />
              <Footer />
          </>}/>
          <Route exact path='/profile'
              element={<>
              <Header loggedIn={true} onNavBtn={openPopup} />
              <Popup isOpen={isPopupOpened} onClose={closePopup} />
              <Profile onSave={handleUpdateUser} onLogout={handleLogout} error={updateError}/>
            </>}/>
            </Route>
          <Route path='*'  element={<PageNotFound />} />

       </Routes>
      </div>
    </CurrentUserContext.Provider>
    
  );
};