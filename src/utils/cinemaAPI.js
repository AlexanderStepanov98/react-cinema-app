import axios from 'axios';

// Constants for the request URLs
const PROXY = 'cors-anywhere.herokuapp.com';
const BASE_URL = `https://${PROXY}/api.kino-teatr.ua`;
const API_KEY = 'pol1kh111';
const DEFAULT_RESPONSE_SIZE = 100;
const KEY_AND_SIZE = `apiKey=${API_KEY}&size=${DEFAULT_RESPONSE_SIZE}`;

// Get the list of the cities
const getCities = () => {
    return axios.get(`${BASE_URL}/rest/cities?${KEY_AND_SIZE}`)
        .then(resp => resp.data.content)
        .catch(error => Promise.reject(error))
};

// Get the list of the movies, which are currently shown in particular city
const getDistributionsByCityId = (id) => {
    return axios.get(`${BASE_URL}/rest/city/${id}/shows?${KEY_AND_SIZE}&detalization=FULL`)
        .then(resp => resp.data.films)
        .catch(error => Promise.reject(error))
};

// Get the list of all cinemas in the city
const getCinemasByCityId = (id) => {
    return axios.get(`${BASE_URL}/rest/city/${id}/cinemas?${KEY_AND_SIZE}`)
        .then(resp => resp.data.content)
        .catch(error => Promise.reject(error))
};

// Get information about the particular movie
const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/rest/film/${id}?apiKey=${API_KEY}`)
        .then(resp => resp.data)
        .catch(error => Promise.reject(error))
};

// Get information about the particular cinema
const getCinemaById = (id) => {
    return axios.get(`${BASE_URL}/rest/cinema/${id}?apiKey=${API_KEY}`)
        .then(resp => resp.data)
        .catch(error => Promise.reject(error))
};

// Get the movie's main poster URL (should be inserted in the src attribute)
const getPosterLinkByMovieId = (id) => {
    return `${BASE_URL}/public/film/${id}/poster?width=300&height=400&ratio=1`
};

// Get the list of starring actors in the particular movie
const getActorsByMovieId = (id) => {
    return axios.get(`${BASE_URL}/rest/film/${id}/persons?${KEY_AND_SIZE}&detalization=FULL`)
        .then(resp => resp.data.persons)
        .catch(error => Promise.reject(error))
};

// Get ALL cinemas and sessions on particular movie
const getAllMovieSessions = (cityId, movieId, date) => {
    return getCinemasByCityId(cityId)
       .then(resp => Promise.all(resp.map(cinema => getOneMovieSession(cinema.id, movieId, date))))
       .then(resp => resp.filter(item => item !== undefined))
       .catch(error => Promise.reject(error))
};

// Get ONE cinema and sessions on particular movie
const getOneMovieSession = (cinemaId, movieId, date) => {
    return axios.get(`${BASE_URL}/rest/cinema/${cinemaId}/film/${movieId}/shows?${KEY_AND_SIZE}&date=${date}&detalization=FULL`)
        .then(resp => {
            if (resp.data.cinemas[0] !== undefined) {
                return {
                    cinema: resp.data.cinemas[0].name,
                    sessions: resp.data.content.map(item => item.times.flat()).flat()
                }
            }
        })
        .catch(error => Promise.reject(error))
};

// Get ALL movies and sessions in particular cinema
const getAllCinemaSessions = (cityId, cinemaId, date) => {
    return getDistributionsByCityId(cityId)
        .then(resp => Promise.all(resp.map(movie => getOneCinemaSession(cinemaId, movie.id, date))))
        .then(resp => resp.filter(item => item !== undefined))
        .catch(error => Promise.reject(error))
};

// Get ONE movie and sessions in particular cinema
const getOneCinemaSession = (cinemaId, movieId, date) => {
    return axios.get(`${BASE_URL}/rest/cinema/${cinemaId}/film/${movieId}/shows?${KEY_AND_SIZE}&date=${date}&detalization=FULL`)
        .then(resp => {
            if (resp.data.films[0] !== undefined) {
                return {
                    movie: resp.data.films[0].title,
                    sessions: resp.data.content.map(item => item.times.flat()).flat()
                }
            }
        })
        .catch(error => Promise.reject(error))
};

// Get hall scheme on particular session
const getHallScheme = (sessionId) => {
    return axios.get(`${BASE_URL}/rest/showtime/${sessionId}/schema?apiKey=${API_KEY}`)
        .then(resp => {
            if (resp.data.sectors[0]) {
                return {
                    rows: resp.data.sectors[0].rows
                }
            }
        })
        .catch(error => Promise.reject(error))
};

export default {
    getCities,
    getDistributionsByCityId,
    getCinemasByCityId,
    getMovieById,
    getCinemaById,
    getPosterLinkByMovieId,
    getActorsByMovieId,
    getAllMovieSessions,
    getOneMovieSession,
    getAllCinemaSessions,
    getOneCinemaSession,
    getHallScheme
}