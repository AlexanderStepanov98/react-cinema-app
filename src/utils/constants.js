export const initialState = {
    cities: {},
    movies: {},
    cinemas: {},
    selectedDate: '',
    selectedCity: {},
    selectedMovie: {},
    selectedCinema: {},
    scheme: {},
    cart: {
        selectedPlaces: {},
        totalPrice: ''
    },
    isRequesting: {
        cities: false,
        movies: false,
        cinemas: false,
        posters: false,
        actors: false,
        sessions: false,
        scheme: false,
    },
    error: {
        message: '',
        code: '',
        details: '',
    },
};

export const actionTypes = {
    START_REQUEST: 'START_REQUEST',
    REQUEST_SUCCEED: 'REQUEST_SUCCEED',
    REQUEST_FAILED: 'REQUEST_FAILED',
    UPDATE_CITIES: 'UPDATE_CITIES',
    UPDATE_MOVIES: 'UPDATE_MOVIES',
    UPDATE_SCHEME: 'UPDATE_SCHEME',
    UPDATE_SELECTED_CITY: 'UPDATE_SELECTED_CITY',
    UPDATE_SELECTED_DATE: 'UPDATE_SELECTED_DATE',
    UPDATE_SELECTED_CINEMA: 'UPDATE_SELECTED_CINEMA',
    UPDATE_SELECTED_MOVIE: 'UPDATE_SELECTED_MOVIE',
    UPDATE_URL: 'UPDATE_URL',
    UPDATE_CART: 'UPDATE_CART',
    UPDATE_CINEMAS: 'UPDATE_CINEMAS'
};