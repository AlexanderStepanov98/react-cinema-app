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
        payload: url
    }
};

export const updateSelectedMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_SELECTED_MOVIE,
        payload: movie
    }
};

export const updateSelectedCinema = (cinema) => {
    return {
        type: actionTypes.UPDATE_SELECTED_CINEMA,
        payload: cinema
    }
};

export const updateShoppingCart = (tickets) => {
    return {
        type: actionTypes.UPDATE_CART,
        payload: tickets
    }
};

export const getCities = () => dispatch => {
    dispatch(startRequest('cities'));

    api.getCities()
        .then(response => {
            dispatch(requestSucceed('cities'));
            dispatch(updateCities(response));
        })
        .catch(error => {
            dispatch(requestFailed('cities', error));
            dispatch(updateCities({}));
        })
};

export const getDistributions = (cityId) => dispatch => {
    dispatch(startRequest('movies'));

    api.getDistributionsByCityId(cityId)
        .then(response => {
            dispatch(requestSucceed('movies'));
            dispatch(updateMovies(response));
        })
        .catch(error => {
            dispatch(requestFailed('movies', error));
            dispatch(updateMovies({}));
        })
};