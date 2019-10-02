import { actionTypes } from '../utils/constants';
import api from '../utils/cinemaAPI';

export const startRequest = (flag) => {
    return {
        type: actionTypes.START_REQUEST,
        payload: {
            path: flag,
            value: true,
        }
    }
};

export const requestSucceed = (flag) => {
    return {
        type: actionTypes.START_REQUEST,
        payload: {
            path: flag,
            value: false,
        }
    }
};

export const requestFailed = (flag, error) => {
    return {
        type: actionTypes.START_REQUEST,
        payload: {
            path: flag,
            value: false,
            error: {
                message: error.message,
                code: error.code,
                details: error.details,
            },
        }
    }
};

export const updateSelectedCity = (city) => {
    return {
        type: actionTypes.UPDATE_SELECTED_CITY,
        payload: {
            selectedCity: city,
        }
    }
};

export const updateCities = (cities) => {
    return {
        type: actionTypes.UPDATE_CITIES,
        payload: {
            cities: cities,
        }
    }
};

export const updateMovies = (movies) => {
    return {
        type: actionTypes.UPDATE_MOVIES,
        payload: {
            cities: movies,
        }
    }
};

export const updateCinemas = (cinemas) => {
    return {
        type: actionTypes.UPDATE_CINEMAS,
        payload: {
            cinemas: cinemas,
        }
    }
};

export const updateSelectedDate = (date) => {
    return {
        type: actionTypes.UPDATE_SELECTED_DATE,
        payload: {
            selectedDate: date,
        }
    }
};

export const updateUrl = (url) => {
    return {
        type: actionTypes.UPDATE_URL,
        payload: {
            url: url
        }
    }
};

export const updateSelectedMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_SELECTED_MOVIE,
        payload: {
            selectedMovie: movie
        }
    }
};

export const updateSelectedCinema = (cinema) => {
    return {
        type: actionTypes.UPDATE_SELECTED_CINEMA,
        payload: {
            selectedCinema: cinema
        }
    }
};

export const updateScheme = (scheme) => {
    return {
        type: actionTypes.UPDATE_SCHEME,
        payload: {
            scheme: scheme
        }
    }
};

export const updateShoppingCart = (places, price) => {
    return {
        type: actionTypes.UPDATE_CART,
        payload: {
            selectedPlaces: places,
            totalPrice: price,
        }
    }
};

export const getCities = () => dispatch => {
    dispatch(startRequest('cities'));

    return api.getCities()
    .then(response => {
        dispatch(requestSucceed('cities'));
        dispatch(updateCities(response));
    })
    .catch(error => {
        dispatch(requestFailed('cities', error));
        dispatch(updateCities([]));
    })
};

export const getMovies = cityId => dispatch => {
    dispatch(startRequest('movies'));

    return api.getDistributionsByCityId(cityId)
    .then(response => {
        dispatch(requestSucceed('movies'));
        dispatch(updateMovies(response));
    })
    .catch(error => {
        dispatch(requestFailed('movies', error));
        dispatch(updateMovies([]));
    })
};

export const getCinemas = cityId => dispatch => {
    dispatch(startRequest('cinemas'));

    return api.getCinemasByCityId(cityId)
    .then(response => {
        dispatch(requestSucceed('cinemas'));
        dispatch(updateCinemas(response))
    })
    .catch(error => {
        dispatch(requestFailed('cinemas', error));
        dispatch(updateCinemas([]))
    })
};

export const getScheme = sessionId => dispatch => {
    dispatch(startRequest('scheme'));

    return api.getHallScheme(sessionId)
    .then(response => {
        dispatch(requestSucceed('scheme'));
        dispatch(updateScheme(response));
    })
    .catch(error => {
        dispatch(requestFailed('scheme', error));
        dispatch(updateScheme({}));
    })
};