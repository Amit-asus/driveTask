import axios from "axios";
import { actions } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchDrive() {
  try {
    const URL =
      "https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=50&page=1";
    const result = yield call(axios.get, URL);
    yield put({ type: actions.fetchDriveSuccess.type, payload: result.data });
  } catch (error) {
    yield put({ type: actions.fetchDriveFailure.type, payload: error });
  }
}

const driveSaga = [takeLatest(actions.fetchDrive.type, fetchDrive)];

export default driveSaga;

// import { call, put, takeLatest } from "redux-saga/effects";
// import axios from "axios";
// import { actions } from "./slice";
// function* fetchDrives(action) {
//   try {
//     const URL =
//       "https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=50&page=1";

//     const result = yield call(axios, URL);

//     yield put({ type: actions.fetchDrivesSuccess.type, payload: result.data });
//   } catch (error) {
//     console.log('error' ,error.message)
//     yield put({ type: actions.fetchDrivesFailure.type, payload: error.message });
//   }
// }

// const drivesSaga = [takeLatest(actions.fetchDrives.type, fetchDrives)];

// export default drivesSaga;

// function* fetchDrives() {
//   try {
//     console.log('second')
//     const URL =
//       "https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=50&page=1";

//     const result = yield call(axios.get, URL);
//     console.log('result-got' ,result) ;
//     yield put({ type: actions.fetchDrivesSuccess.type, payload: result.data });
//   } catch (error) {
//     yield put({ type: actions.fetchDrivesFailure.type, payload: error });
//   }
// }

// const drivesSaga = [takeLatest(actions.fetchDrives.type, fetchDrives)];

// export default drivesSaga;
