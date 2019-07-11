import axios from "axios";

const PROXY = "cors-anywhere.herokuapp.com";
const BASE_URL = `https://${PROXY}/api.kino-teatr.ua`;
const API_KEY = "pol1kh111";
const DEFAULT_RESPONSE_SIZE = 100;
const KEY_AND_SIZE = `apiKey=${API_KEY}&size=${DEFAULT_RESPONSE_SIZE}`;

const getCities = () => {
    return axios.get(`${BASE_URL}/rest/cities?${KEY_AND_SIZE}`)
                .then(resp => resp.data.content)
};

const getDistributionsByCityId = (id) => {
    return axios.get(`${BASE_URL}/rest/city/${id}/shows?${KEY_AND_SIZE}&detalization=FULL`)
                .then(resp => resp.data.films)
};

const getCinemasByCityId = (id) => {
    return axios.get(`${BASE_URL}/rest/city/${id}/cinemas?${KEY_AND_SIZE}`)
                .then(resp => resp.data.content)
};

const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/rest/film/${id}?apiKey=${API_KEY}`)
                .then(resp => resp.data)
};

const getCinemaById = (id) => {
    return axios.get(`${BASE_URL}/rest/cinema/${id}?apiKey=${API_KEY}`)
                .then(resp => resp.data)
};

const getPosterLinkByMovieId = (id) => {
    return `${BASE_URL}/public/film/${id}/poster?width=300&height=400&ratio=1`
};

const getActorsByMovieId = (id) => {
    return axios.get(`${BASE_URL}/rest/film/${id}/persons?${KEY_AND_SIZE}&detalization=FULL`)
                .then(resp => resp.data.persons)
};

const getSessionsByCityIdAndMovieIdAndDate = (cityId, movieId, date) => {
    return axios.get(`${BASE_URL}/rest/city/${cityId}/film/${movieId}/shows?${KEY_AND_SIZE}&date=${date}&detalization=FULL`)
};

const getAllSessions = (cityId, movieId, date) => {
    return getCinemasByCityId(cityId)
               .then(resp => Promise.all(resp.map(cinema => getSessionInCinema(cinema.id, movieId, date))))
               .then(resp => resp.filter(item => item !== undefined))
};

// resp.data.content.forEach(item => data.push(...item.times)); - should be refactored in less complicated way
const getSessionsInCinema = (cinemaId, movieId, date) => {
    return axios.get(`${BASE_URL}/rest/cinema/${cinemaId}/film/${movieId}/shows?${KEY_AND_SIZE}&date=${date}&detalization=FULL`)
                .then(resp => {
                    if (resp.data.cinemas[0] !== undefined) {
                        return {
                            cinema: resp.data.cinemas[0].name,
                            sessions: resp.data.content.map(item => item.times.flat()).flat()
                        }
                    }
                })
};

const api = {
    getCities,
    getDistributionsByCityId,
    getCinemasByCityId,
    getMovieById,
    getCinemaById,
    getPosterLinkByMovieId,
    getActorsByMovieId,
    getSessionsByCityIdAndMovieIdAndDate,
    getAllSessions,
    getSessionsInCinema
};

export default api