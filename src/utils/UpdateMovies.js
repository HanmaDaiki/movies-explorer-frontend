export function UpdateMovies(dataMovies, savedMovies) {
  dataMovies.forEach(dataMovie => {
    return savedMovies.forEach(savedMovie => {
      if(dataMovie.nameRU === savedMovie.nameRU) {
        dataMovie._id = savedMovie._id;
      };
    });
  });

  return dataMovies;
}