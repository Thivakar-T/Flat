import { all } from "redux-saga/effects";

import dogWatcherSaga from "./dogSaga";

export default function* rootSaga() {
  yield all([
    dogWatcherSaga(), //add other sagas here
  ]);
}
