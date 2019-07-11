export const updateCity = (cityId) => {
    return {
        type: "UPDATE_CITY",
        payload: cityId
    }
};

export const updateDate = (date) => {
    return {
        type: "UPDATE_DATE",
        payload: date
    }
};

export const updateUrl = (url) => {
    return {
        type: "UPDATE_URL",
        payload: url
    }
};

export const updateSelectedMovie = (movie) => {
    return {
        type: "UPDATE_SELECTED_MOVIE",
        payload: movie
    }
};

export const updateSelectedCinema = (cinema) => {
    return {
        type: "UPDATE_SELECTED_CINEMA",
        payload: cinema
    }
};

export const updateShoppingCart = (tickets) => {
    return {
        type: "UPDATE_SHOPPING_CART",
        payload: tickets
    }
};