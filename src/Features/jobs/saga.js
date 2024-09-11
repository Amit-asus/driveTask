import {actions} from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";
import  axios  from "axios";
function* fetchJobs(action) {
  try {
    const url =
      "https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=50&page=1";

    const result = yield call(axios.get, url);
    console.log(result.data)
    yield put({ type: actions.fetchJobSuccess.type, payload: result.data });
  } catch (error) {
    yield put({ type: actions.fetchJobFailure.type, payload: error });
  }
}

const jobsSaga = [takeLatest(actions.fetchJobs.type, fetchJobs)];

export default jobsSaga;
