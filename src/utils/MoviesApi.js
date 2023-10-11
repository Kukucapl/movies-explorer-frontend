import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  } 

  async getMovies() {
    const res = await fetch(this._url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      });
      return this._getResponseData(res);
  }

}

export const moviesApi = new MoviesApi(MOVIES_URL)