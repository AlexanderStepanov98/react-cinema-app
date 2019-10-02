import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { getCurrentDate } from "./utils/dateGenerator";
import { initialState } from "./utils/constants";

const preloadedState = {
    ...initialState,
    cityId: 5,
    selectedDate: getCurrentDate(),
    url: "/movies"
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
);

export default store;