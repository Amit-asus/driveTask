import { all } from "redux-saga/effects";
import drivesSaga from "../Features/drives/saga";
import productSaga from "../Features/products/saga";
import userSaga from "../Features/createUser/saga";
import jobsSaga from "../Features/jobs/saga";
import authSaga from "../Features/auth/sagas";

export default function* rootSaga() {
  yield all([...drivesSaga, ...productSaga, ...userSaga  ,...jobsSaga , ...authSaga]);
}
