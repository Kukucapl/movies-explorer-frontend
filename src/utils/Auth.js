import { MAIN_URL } from "./constants";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res.status); 
  }
  return res.json();
}

export function register(name, email, password) {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password})
  })
  .then(getResponseData)
}

export function authorize(email, password) {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then(getResponseData)
}

