import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

function* createUser(action) {
  try {
    const url = "https://dummy.restapiexample.com/api/v1/create";
    const response = yield call(axios.post, url, action.payload);
    console.log("response-got", response);
    yield put({
      type: actions.creatingUserSuccess.type,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actions.creatingUserFailure.type,
      payload: error || "An error occurred",
    });
  }
}

//this is the watcher saga
const userSaga = [takeLatest(actions.creatingUser.type, createUser)];


export default userSaga;
