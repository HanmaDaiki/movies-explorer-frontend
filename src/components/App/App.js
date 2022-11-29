import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { mainApi } from '../../utils/MainApi';
import { UserContext } from '../../contexts/UserContext';

import PopupMenu from '../PopupMenu/PopupMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import SettingsProfile from '../SettingsProfile/SettingsProfile';
import { UpdateMovies } from '../../utils/UpdateMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: 'default@email.com',
    name: 'MyNameIs',
  });
  const [isInfoTooltip, setIsInfoToolip] = useState({ state: false, text: '' });
  const [isPopupMenu, setIsPopupmenu] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('moviesSearchResult')) || []);

  useEffect(() => {
    setFilteredMovies(UpdateMovies(filteredMovies, savedMovies));
    localStorage.setItem('moviesSearchResult', JSON.stringify(UpdateMovies(filteredMovies, savedMovies)));
  }, [savedMovies]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUser(localStorage.getItem('jwt'))
        .then((user) =>{
           setCurrentUser(user)})
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
    setIsInfoToolip({ state: false, text: '' });
    setIsPopupmenu(false);
  };

  function handleOpenPopupMenu() {
    setIsPopupmenu(true);
  };

  function handleOpenInfoToolip(text) {
    setIsInfoToolip({ state: true, text });
  }

  function handleRegUser(email, password, name) {
    mainApi
      .signUp(email, password, name)
      .then(() =>{ 
        handleLogUser(email, password)
      })
      .catch(err => {
        console.log(`Error ${err}`)
        handleOpenInfoToolip('Что-то пошло не так, пройдите регистрацию повторно');
      });
  }

  function handleLogUser(email, password) {
    mainApi
      .signIn(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      }).catch(err => {
        console.log(`Error ${err}`)
        handleOpenInfoToolip('Неверный логин или пароль!');
      });
  }

  function updateUser(email, name) {
    mainApi
      .updateUser({ email, name }, localStorage.getItem('jwt'))
      .then(user => setCurrentUser(user))
      .catch(err => {
        console.log(`Error ${err}`)
        handleOpenInfoToolip('Обновления профиля не завершено, где-то ошибка!');
      });
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
    localStorage.removeItem('allDataMovie');
  }

  function handleFollowMovie(movie) {
    return mainApi
      .postSavedMovies(movie, localStorage.getItem('jwt'))
      .then((newMovi) => {
        setSavedMovies([...savedMovies, newMovi]);
        return newMovi;
      })
      .catch(err => console.log(`Error ${err}`));
  }

  function handleUnfollowMovie(movie) {
    return mainApi
      .deleteSavedMovie(movie._id, localStorage.getItem('jwt'))
      .then((res) => {
        const localStorageData = JSON.parse(localStorage.getItem('moviesSearchResult'));
        const newSavedMovies = savedMovies.filter(savedMovie => savedMovie._id !== movie._id);

        localStorageData.map(dataMovie => {
          if (dataMovie.nameRU === movie.nameRU) {
            delete dataMovie._id;
          }
          return dataMovie;
        });

        localStorage.setItem('moviesSearchResult', JSON.stringify(localStorageData));
        setFilteredMovies(localStorageData);
        setSavedMovies(newSavedMovies);
        return res;
      })
      .catch(err => console.log(`Error ${err}`));
  }

  function handleUpdateFilteredMovies(newData) {
    setFilteredMovies(newData);
  }


  return (
    <div className="app">
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path='/' element={<Main handleOpenPopupMenu={handleOpenPopupMenu} loggedIn={loggedIn} />} />
          <Route exact path='/404' element={<NotFoundPage />} />
          <Route exact path='/signin' element={<Login handleLogUser={handleLogUser} handleOpenInfoToolip={handleOpenInfoToolip} />} />
          <Route exact path='/signup' element={<Register handleRegUser={handleRegUser} handleOpenInfoToolip={handleOpenInfoToolip} />} />
          <Route exact path='/movies'
            element={loggedIn ?
              <Movies
                filteredMovies={filteredMovies}
                handleUpdateFilteredMovies={handleUpdateFilteredMovies}
                handleFollowMovie={handleFollowMovie}
                handleUnfollowMovie={handleUnfollowMovie}
                savedMovies={savedMovies}
                loggedIn={loggedIn}
                handleOpenPopupMenu={handleOpenPopupMenu} /> :
              <Navigate to='/' />
            }
          />
          <Route exact path='/saved-movies'
            element={loggedIn ?
              <SavedMovies
                handleUnfollowMovie={handleUnfollowMovie}
                savedMovies={savedMovies}
                loggedIn={loggedIn}
                handleOpenPopupMenu={handleOpenPopupMenu} /> :
              <Navigate to='/' />
            }
          />
          <Route exact path='/profile'
            element={loggedIn ?
              <SettingsProfile
                handleOpenInfoToolip={handleOpenInfoToolip}
                handleExitAccount={handleExitAccount}
                updateUser={updateUser}
                loggedIn={loggedIn}
                myProfile={currentUser}
                handleOpenPopupMenu={handleOpenPopupMenu}
              /> :
              <Navigate to='/' />
            }
          />
          <Route exact path='*' element={<Navigate to='/404' />} />
        </Routes>
      </UserContext.Provider>
      {
        isPopupMenu &&
        <PopupMenu closePopup={handleClosePopup} />
      }
      {
        isInfoTooltip.state &&
        <InfoTooltip closePopup={handleClosePopup} text={isInfoTooltip.text} />
      }
    </div>
  );
}

export default App;
