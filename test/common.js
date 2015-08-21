/* eslint no-console:0 */
import fetch from 'isomorphic-fetch';
import qs from 'qs';

const DEBUG = false;
const baseUrl = 'http://ws.audioscrobbler.com/2.0/';
const apiKey = 'FILL-THIS';
export const user = 'FILL-THIS';

function url(method, params = {}) {
  const queryString = qs.stringify({
    method,
    api_key: apiKey,
    format: 'json',
    ...params
  });
  return `${baseUrl}?${queryString}`;
}

function log(response) {
  if (DEBUG) {
    console.log(JSON.stringify(response));
  }
  return response;
}

function checkError(response) {
  if (response.error) {
    throw new Error(JSON.stringify(response));
  }
  return response;
}

export function fetchJSON(method, params) {
  return fetch(url(method, params))
  .then(response => response.json())
  .then(log)
  .then(checkError);
}
