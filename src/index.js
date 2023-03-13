import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//redux & saga related imports
// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   compose,
// } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";

// import { reducer } from "./redux";
// import { watcherSaga } from "./redux/sagas/saga";

import store from "./redux/store";

// //create saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // dev tools middleware
// //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   // composeEnhancers(applyMiddleware(sagaMiddleware))
//   compose(applyMiddleware(sagaMiddleware))
// );

//run the saga
// sagaMiddleware.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
