class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _checkResponse(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Error ${res.status}`);
	};

  getFilms() {
    return fetch(`${this._url}/beatfilm-movies`)
      .then(this._checkResponse)
      .then(data => {
        return data;
      });
  }

}

export const moviesApi = new MoviesApi('https://api.nomoreparties.co');