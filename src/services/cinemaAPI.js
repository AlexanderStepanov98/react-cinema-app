// API service for requesting data from kino-teatr.ua
// Each function returns a promise, which then needs to be resolved
// And dispatched into the redux store (or rendered directly into UI ?)

import axios from "axios";

const API_KEY = "pol1kh111";
const BASE_URL = "api.kino-teatr.ua";
const PROXY = "cors-anywhere.herokuapp.com";

const getPremiersByCityId = (id) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/city/${id}/shows?apiKey=${API_KEY}&size=100&date=2019-07-10&detalization=FULL`)
};

const getCinemasByCityId = (id) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/city/${id}/cinemas?apiKey=${API_KEY}&size=100`)
};

const getMovieById = (id) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/film/${id}?apiKey=${API_KEY}`)
};

const getCinemaById = (id) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/cinema/${id}?apiKey=${API_KEY}`)
};

// NO longer valid
// To get an image, URL should be added to its src attribute

// const getPosterByMovieId = (id) => {
//     return axios.get(`https://${PROXY}/${BASE_ADDRESS}/public/film/${id}/poster?width=300&height=400&ratio=1`)
// };

const getActorsByMovieId = (id) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/film/${id}/persons?apiKey=${API_KEY}&size=100&detalization=FULL`)
};

const getSessionsByMovieIdAndDate = (id, date) => {
    return axios.get(`https://${PROXY}/${BASE_URL}/rest/cinema/${id}/shows?apiKey=${API_KEY}&size=100&date=${date}&detalization=FULL`)
};

const api = {
    getPremiersByCityId,
    getCinemasByCityId,
    getMovieById,
    getCinemaById,
    getActorsByMovieId,
    getSessionsByMovieIdAndDate
};

export default api