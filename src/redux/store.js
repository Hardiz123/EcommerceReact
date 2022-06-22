import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import createSagaMiddleware  from "@redux-saga/core";
import rootSaga from "./root-saga";
import rootReducer from './root-reducer';

// const middlewares = [logger, thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };