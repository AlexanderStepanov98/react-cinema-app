import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { getCurrentDate } from "./services/dateGenerator";

const preloadedState = {
    cityId: 5,
    date: getCurrentDate(),
    url: "/movies"
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
);

export default store;