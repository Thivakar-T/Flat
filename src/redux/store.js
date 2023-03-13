import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // for dev tools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//run the saga
sagaMiddleware.run(rootSaga);

export default store;
