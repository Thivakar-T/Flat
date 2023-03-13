import { takeLatest, call, put } from "redux-saga/effects";

import * as types from "../types";
import { fetchDog } from "../../services/dog.services";

// import axios from "axios";
// import { environment } from "../../environments/environment";

// const apiUrl = "https://dog.ceo/api/breeds/image/random";
// const baseURL = environment.serverURL;
// function that makes the api request
//and returns a Promise for response
// function fetchDog() {
//   return axios({
//     method: "get",
//     url: baseURL,
//   });
// }

//worker saga:
//makes api call when watcher saga sees the action
function* dogGetworkerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    //dispatch a success action to the store with new dog
    yield put({ type: types.GET_DOG_SUCCESS, dog: dog });
  } catch (error) {
    //dispatch a failure action to the store with error
    yield put({ type: types.GET_DOG_FAILURE, error: error });
  }
}

// watcher saga:
//watches for actions dispatched to the store, starts worker saga
function* dogWatcherSaga() {
  yield takeLatest(types.GET_DOG_REQUESTED, dogGetworkerSaga);
  // to add multiple worker saga %%%%
  // yield takeLatest(types.POST_DOG_REQUESTED, newWorkerSaga);
}

export default dogWatcherSaga;

// Need to do more research on below command...
// to add more watcher methods
// command the about default export and exports each methods separately
// export function* dogWatcherSaga() {
//   yield takeLatest("GET_DOG_REQUESTED", dogGetworkerSaga);
// }

// then import the function in saga/index.js file, thenadd it in rootSaga

// instead we can add multiple worker saga in one watcher saga
// already commented the basic syntax for add multiple workersaga inside "dogWatcherSaga"
// ref
// https://www.techomoro.com/how-to-use-redux-saga-in-a-react-app-simple-blog-example/
