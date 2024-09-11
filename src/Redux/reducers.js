import driveReducer from "../Features/drives/slice";
import productReducer from "../Features/products/slice";
import userReducer from "../Features/createUser/slice";
import jobReducer from "../Features/jobs/slice";
import authReducer from "../Features/auth/authSlice";
import jobCreateReducer from "../Features/createJob/slice"

const reducers = {
  drives: driveReducer,
  products: productReducer,
  users: userReducer,
  jobs: jobReducer,
  auth: authReducer,
  jobCreate: jobCreateReducer,
};

export default reducers;
