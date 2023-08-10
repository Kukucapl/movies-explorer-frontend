import { MAIN_URL } from "./constants";

class MainApi {
  constructor(url) {
    this._url = url;
    this._headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`}
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status); 
    }
    return res.json();
  } 

  async getCurrentUser() {
    const res = await fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: this._headers
      });
      return this._getResponseData(res);
  }

  async setUserInfo(userName, userEmail) {
    const res = await fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
              name: userName,
              email: userEmail
          })
      });
      return this._getResponseData(res);
  }

  async getMovies() {
    const res = await fetch(`${this._url}/movies`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });
      return this._getResponseData(res);
  }

  async saveMovie(movie, userId) {
    const res = await fetch(`${this._url}/movies`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: movie.image,
              trailerLink: movie.trailerLink,
              thumbnail: movie.thumbnail,
              owner: userId,
              movieId: movie.movieId,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN
          })
      });
      return this._getResponseData(res);
  }

  async deleteMovie(movieId) {
    const res = await fetch(`${this._url}/movies/${movieId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
      });
      return this._getResponseData(res);
  }
}

export const mainApi = new MainApi(MAIN_URL)
