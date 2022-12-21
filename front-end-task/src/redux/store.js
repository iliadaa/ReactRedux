import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import combineAllSagas from "./rootSaga";
import combineAllReducers from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
)(createStore)(combineAllReducers);

sagaMiddleware.run(combineAllSagas);

export default store;