import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { mainApi } from '../../utils/MainApi';
import { UserContext } from '../../contexts/UserContext';

import Preloader from '../Preloader/Preloader';
import PopupMenu from '../PopupMenu/PopupMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import SettingsProfile from '../SettingsProfile/SettingsProfile';
import { UpdateMovies } from '../../utils/UpdateMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Main = React.lazy(() => import('../Main/Main'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const Login = React.lazy(() => import('../Login/Login'));
const Register = React.lazy(() => import('../Register/Register'));

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: 'default@email.com',
    name: 'MyNameIs',
  });
  const [isInfoTooltip, setIsInfoToolip] = useState(false);
  const [isPopupMenu, setIsPopupmenu] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('moviesSearchResult')) || []);
  
  useEffect(() => {
    setFilteredMovies(UpdateMovies(filteredMovies, savedMovies));
    localStorage.setItem('moviesSearchResult', JSON.stringify(UpdateMovies(filteredMovies, savedMovies)));
  }, [savedMovies]);

  useEffect(() => {
    if(loggedIn) {
      mainApi
        .getUser(localStorage.getItem('jwt'))
        .then((user) => setCurrentUser(user))
        .catch(err => console.log(`Error ${err}`));

      mainApi
        .getSavedMovies(localStorage.getItem('jwt'))
        .then(movies => setSavedMovies(movies))
        .catch(err => console.log(`Error ${err}`));
    }
  }, [loggedIn]);

  useEffect(() => {
    mainApi
    .identificationUser(localStorage.getItem('jwt'))
    .then((user) => {
      
      setCurrentUser(user);
      setLoggedIn(true);
    }).catch(err => console.log(`Error ${err}`));
  }, []);

  function handleClosePopup() {
    setIsInfoToolip(false);
    setIsPopupmenu(false);
  };
  
  function handleOpenPopupMenu() {
    setIsPopupmenu(true);
  };

  function handleOpenInfoToolip() {
    setIsInfoToolip(true);
  }

  function handleRegUser(email, password, name) {
    mainApi
      .signUp(email, password, name)
      .then(() => handleLogUser(email, password))
      .catch(err => console.log(`Error ${err}`));
  }

  function handleLogUser(email, password) {
    mainApi
      .signIn(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      }).catch(err => console.log(`Error ${err}`));
  }

  function updateUser(email, name) {
    mainApi
      .updateUser({ email, name }, localStorage.getItem('jwt'))
      .then(user => setCurrentUser(user))
      .catch(err => console.log(`Error ${err}`));
  }

  function handleExitAccount() {
    setCurrentUser({
      email: 'default@email.com',
      name: 'MyNameIs',
    });
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('keyWord');
    localStorage.removeItem('switcher');
    localStorage.removeItem('moviesSearchResult');
  }

  function handleFollowMovie(movie) {
    mainApi
      .postSavedMovies(movie, localStorage.getItem('jwt'))
      .then((newMovi) => {
        setSavedMovies([...savedMovies, newMovi]);
      }) 
      .catch(err => console.log(`Error ${err}`));
  }

  function handleUnfollowMovie(movie) {
    mainApi
      .deleteSavedMovie(movie._id, localStorage.getItem('jwt'))
      .then(() => {
        const localStorageData = JSON.parse(localStorage.getItem('moviesSearchResult'));
        const newSavedMovies = savedMovies.filter(savedMovie => savedMovie._id !== movie._id);

        localStorageData.map(dataMovie => {
          if(dataMovie.nameRU === movie.nameRU) {
            delete dataMovie._id;
          }
          return dataMovie;
        });

        localStorage.setItem('moviesSearchResult', JSON.stringify(localStorageData));
        setFilteredMovies(localStorageData);
        setSavedMovies(newSavedMovies);
      })
      .catch(err => console.log(`Error ${err}`));
  }

  function handleUpdateFilteredMovies(newData) {
    setFilteredMovies(newData);
  }


  return (
    <div className="app">
      <UserContext.Provider value={ currentUser }>
        <Suspense fallback={<Preloader />}>
          <Routes>
              <Route exact path='/' element={ <Main handleOpenPopupMenu={ handleOpenPopupMenu } loggedIn={ loggedIn } /> }/>
              <Route exact path='/404' element={ <NotFoundPage /> } />
              <Route exact path='/signin' element={ <Login handleLogUser={ handleLogUser }/> }/>
              <Route exact path='/signup' element={ <Register handleRegUser={ handleRegUser } /> }/>
              <Route exact path='/movies'
                element={ loggedIn ? 
                  <Movies
                    filteredMovies={ filteredMovies }
                    handleUpdateFilteredMovies={ handleUpdateFilteredMovies }
                    handleFollowMovie={ handleFollowMovie }
                    handleUnfollowMovie={ handleUnfollowMovie }
                    savedMovies={ savedMovies }
                    loggedIn={ loggedIn } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } /> : 
                  <Navigate to='/' /> 
                } 
              />
              <Route exact path='/saved-movies' 
                element={ loggedIn ?
                  <SavedMovies
                    handleUnfollowMovie={ handleUnfollowMovie } 
                    savedMovies={ savedMovies } 
                    loggedIn={ loggedIn } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } /> :
                  <Navigate to='/' /> 
                } 
              />
              <Route exact path='/profile' 
                element={ loggedIn ?
                  <SettingsProfile
                    handleOpenInfoToolip={ handleOpenInfoToolip }
                    handleExitAccount={ handleExitAccount } 
                    updateUser={ updateUser } 
                    loggedIn={ loggedIn } 
                    myProfile={ currentUser } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } 
                  /> :
                  <Navigate to='/' /> 
                } 
              />
              <Route exact path='*' element={  <Navigate to='/404' /> } />
          </Routes>
        </Suspense>
      </UserContext.Provider>
      {
        isPopupMenu &&
        <PopupMenu closePopup={ handleClosePopup } />
      }
      {
        isInfoTooltip &&
        <InfoTooltip closePopup={ handleClosePopup } />
      }
    </div>
  );
}

export default App;
