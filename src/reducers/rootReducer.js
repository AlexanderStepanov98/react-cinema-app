import { actionTypes, initialState } from "../utils/constants";

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SELECTED_CITY:
            return {
                ...state,
                city: action.payload.city
            };
        case actionTypes.UPDATE_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload.selectedDate
            };
        case actionTypes.UPDATE_URL:
            return {
                ...state,
                url: action.payload.url
            };
        case actionTypes.UPDATE_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload.selectedMovie
            };
        case actionTypes.UPDATE_SELECTED_CINEMA:
            return {
                ...state,
                selectedCinema: action.payload.selectedCinema
            };
        case actionTypes.UPDATE_CART:
            return {
                ...state,
                cart: action.payload.cart
            };
        case actionTypes.START_REQUEST:
            return {
                ...state,
                isRequesting: {
                    ...state.isRequesting,
                    [action.payload.path]: action.payload.value,
                }
            };
        case actionTypes.REQUEST_SUCCEED:
            return {
                ...state,
                isRequesting: {
                    ...state.isRequesting,
                    [action.payload.path]: action.payload.value,
                }
            };
        case actionTypes.REQUEST_FAILED:
            return {
                ...state,
                isRequesting: {
                    ...state.isRequesting,
                    [action.payload.path]: action.payload.value,
                },
                error: {
                    message: action.payload.error.message,
                    code: action.payload.error.code,
                    details: action.payload.error.details,
                }
            };
        default:
            return state
    }
};

export default rootReducer;