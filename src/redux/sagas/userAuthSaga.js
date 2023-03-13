import { takeLatest, call, put } from "redux-saga/effects";

import * as types from "../types";
import { fetchUserAuth } from "../../services/userAuth.services";

//worker saga:
//makes api call when watcher saga sees the action
function* userAuthGetworkerSaga() {
  try {
    const response = yield call(fetchUserAuth);
    // need to check the below to get user details from response
    const user = response.data.message;

    //dispatch a success action to the store with new dog
    yield put({ type: types.GET_AUTH_SUCCESS, user: user });
  } catch (error) {
    //dispatch a failure action to the store with error
    yield put({ type: types.GET_AUTH_FAILURE, error: error });
  }
}

// watcher saga:
//watches for actions dispatched to the store, starts worker saga
function* userAuthWatcherSaga() {
  yield takeLatest(types.GET_AUTH_REQUESTED, userAuthGetworkerSaga);
  // to add multiple worker saga %%%%
  // yield takeLatest(types.POST_DOG_REQUESTED, newWorkerSaga);
}

export default userAuthWatcherSaga;
