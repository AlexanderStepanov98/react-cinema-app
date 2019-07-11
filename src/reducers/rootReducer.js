const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_CITY":
            return {
                ...state,
                cityId: action.payload
            };
        case "UPDATE_DATE":
            return {
                ...state,
                date: action.payload
            };
        case "UPDATE_URL":
            return {
                ...state,
                date: action.payload
            };
        case "UPDATE_SELECTED_MOVIE":
            return {
                ...state,
                selectedMovieId: action.payload
            };
        case "UPDATE_SELECTED_CINEMA":
            return {
                ...state,
                selectedCinemaId: action.payload
            };
        case "UPDATE_SHOPPING_CART":
            return {
                ...state,
                shoppingCart: action.payload
            };
        default:
            return state
    }
};

export default rootReducer;