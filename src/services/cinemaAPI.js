// API service for requesting data from kino-teatr.ua
// Each function returns a promise, which then needs to be resolved
// And dispatched into the redux store (or rendered directly into UI ?)

import axios from "axios";

const API_KEY = "pol1kh111";
const BASE_URL = "https://api.kino-teatr.ua/";

const getPremiersByCityId = (id) => {
    return axios.get(`${BASE_URL}rest/city/${id}/shows?apiKey=${API_KEY}&size=1&date=2019-07-10&detalization=FULL`)
};

const getCinemasByCityId = (id) => {
    return axios.get(`${BASE_URL}rest/city/${id}/cinemas?apiKey=${API_KEY}&size=1`)
};

const getMovieById = (id) => {
    return axios.get(`${BASE_URL}rest/film/${id}?apiKey=${API_KEY}`)
};

const getCinemaById = (id) => {
    return axios.get(`${BASE_URL}rest/city/${id}/shows?apiKey=${API_KEY}&size=1&date=2019-07-10&detalization=FULL`)
};

const getPosterByMovieId = (id) => {
    return axios.get(`${BASE_URL}rest/city/${id}/shows?apiKey=${API_KEY}&size=1&date=2019-07-10&detalization=FULL`)
};

const getActorsByMovieId = (id) => {
    return axios.get(`${BASE_URL}rest/city/${id}/shows?apiKey=${API_KEY}&size=1&date=2019-07-10&detalization=FULL`)
};

const getSessionsByMovieIdAndDate = (id, date) => {
    return axios.get(`${BASE_URL}rest/city/${id}/shows?apiKey=${API_KEY}&size=1&date=2019-07-10&detalization=FULL`)
};