import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const preloadedState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
);

export default store;