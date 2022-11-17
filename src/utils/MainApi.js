class MainApi {
	constructor(url) {
		this._url = url;
	};

	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Error ${res.status}`);
	};

	signIn(email, password) {
		return fetch(`${this._url}/signin`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'include',
			body: JSON.stringify({
				email,
				password
			}),
		})
		.then(this._checkResponse)
		.then((data) => {
			if(data.token) {
				localStorage.setItem('jwt', data.token);
				return data;
			}
		});
	}

	signUp(email, password, name) {
		return fetch(`${this._url}/signup`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'include',
			body: JSON.stringify({
				email,
				password,
				name
			}),
		})
		.then(this._checkResponse);
	}

	getUser(jwt) {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			credentials: 'include',
			headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
		})
		.then(this._checkResponse);
	}

	identificationUser(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi('api.daikihanma.films.nomoredomains.icu/api');