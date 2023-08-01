import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import PageNotFound from '../PageNotFound/PageNotFound';

import { user } from '../../utils/constants';
const loggedIn = false;


export default function App() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);

  function openPopup() {
    setIsPopupOpened(true)
  }

  function closePopup() {
    setIsPopupOpened(false)
  }

  return (
    <div className="App">
       <Routes>
         <Route exact path='/signup' element={<Register />}/>
         <Route exact path='/signin' element={<Login />}/>
         <Route exact path='/' 
            element={<>
            <Header loggedIn={loggedIn} onNavBtn={openPopup} />
            <Popup isOpen={isPopupOpened} onClose={closePopup} />
            <Main />
            <Footer />
          </>}/>
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
            <Profile {...user} />
          </>}/>
         <Route path='*'  element={<PageNotFound />} />
       </Routes>
    </div>
  );
};
