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
  <Route exact element={<Navigate to='/404' />} />
</Routes>