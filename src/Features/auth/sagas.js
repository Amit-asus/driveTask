import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./authSlice";

function* loginSaga(action) {
  try {
    const { username, password, role } = action.payload;
    const response = yield call(fakeLoginApi, { username, password, role });
    yield put(actions.loginSuccess(response));
  } catch (error) {
    yield put(actions.loginFailure(error.message));
  }
}

function fakeLoginApi({ username, password, role }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (role === "admin" && username === "admin" && password === "admin") {
        resolve({ username: "admin", role: "admin" });
      } else if (
        role === "user" &&
        username === "user" &&
        password === "user"
      ) {
        resolve({ username: "user", role: "user" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}

const authSaga =  [ takeLatest(actions.loginRequest.type, loginSaga) ]



export default authSaga;
